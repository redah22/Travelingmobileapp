import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Camera, MapPin, Calendar, Heart, Image as ImageIcon, LogOut, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useAuth } from '../../contexts/AuthContext';

export function Profile() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  // Mock user stats
  const stats = {
    photos: 24,
    likes: 1342,
    followers: 156,
    following: 89,
    countries: 12,
  };

  // Mock user photos
  const userPhotos = [
    'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=300',
    'https://images.unsplash.com/photo-1626946548234-a65fd193db41?w=300',
    'https://images.unsplash.com/photo-1706387636596-00196e5e1504?w=300',
    'https://images.unsplash.com/photo-1656504862966-2f0d002bae4c?w=300',
    'https://images.unsplash.com/photo-1654605316301-2bcdcfbeb956?w=300',
    'https://images.unsplash.com/photo-1532203414596-86933a7d7fbc?w=300',
  ];

  const likedPhotos = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300',
  ];

  const handleLogout = () => {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Profil</h1>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8 text-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
              <p className="text-blue-100 text-sm mb-3">{user?.email}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{stats.countries} pays</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Depuis mars 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.photos}</div>
              <div className="text-xs text-blue-100">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.likes}</div>
              <div className="text-xs text-blue-100">J'aime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.followers}</div>
              <div className="text-xs text-blue-100">Abonnés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.following}</div>
              <div className="text-xs text-blue-100">Abonnements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="photos">
              <ImageIcon className="w-4 h-4 mr-2" />
              Mes photos
            </TabsTrigger>
            <TabsTrigger value="liked">
              <Heart className="w-4 h-4 mr-2" />
              J'aime
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-1">
              {userPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square cursor-pointer group relative overflow-hidden"
                >
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <Heart className="w-6 h-6 mx-auto mb-1" />
                      <span className="text-sm">245</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {userPhotos.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Aucune photo publiée</p>
                <Button
                  onClick={() => navigate('/publish-photo')}
                  className="mt-4"
                >
                  Publier ma première photo
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="liked">
            <div className="grid grid-cols-3 gap-1">
              {likedPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square cursor-pointer group relative overflow-hidden"
                >
                  <img
                    src={photo}
                    alt={`Liked ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute top-2 right-2">
                    <Heart className="w-5 h-5 text-red-500 fill-current drop-shadow" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <Button
            onClick={() => navigate('/groups')}
            variant="outline"
            className="w-full"
          >
            Mes groupes
          </Button>
          
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
}
