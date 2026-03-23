import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Users, Plus, Bell, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { useAuth } from '../../contexts/AuthContext';

interface Group {
  id: number;
  name: string;
  members: number;
  photos: number;
  image: string;
}

export function Groups() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: 'Voyage en Europe',
      members: 12,
      photos: 145,
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=200',
    },
    {
      id: 2,
      name: 'Amis de Tokyo',
      members: 8,
      photos: 89,
      image: 'https://images.unsplash.com/photo-1626946548234-a65fd193db41?w=200',
    },
  ]);

  const [newGroupName, setNewGroupName] = useState('');
  const [notifications, setNotifications] = useState({
    groupPosts: true,
    userPosts: false,
    locationPosts: true,
    tagPosts: false,
  });

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      setGroups([...groups, {
        id: groups.length + 1,
        name: newGroupName,
        members: 1,
        photos: 0,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
      }]);
      setNewGroupName('');
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
          <h1 className="text-xl font-semibold">Groupes & Notifications</h1>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Créer
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Créer un groupe</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>Nom du groupe</Label>
                <Input
                  placeholder="Ex: Voyage en Asie"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                />
              </div>
              <Button
                onClick={handleCreateGroup}
                disabled={!newGroupName.trim()}
                className="w-full"
              >
                Créer le groupe
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Groups Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Mes groupes ({groups.length})
          </h2>
          <div className="space-y-3">
            {groups.map(group => (
              <div
                key={group.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span>
                        <Users className="w-4 h-4 inline mr-1" />
                        {group.members} membres
                      </span>
                      <span>
                        {group.photos} photos
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Settings className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Publications de groupes
                </h3>
                <p className="text-sm text-gray-500">
                  Recevoir une notification quand un groupe publie
                </p>
              </div>
              <Switch
                checked={notifications.groupPosts}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, groupPosts: checked })
                }
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Publications d'utilisateurs suivis
                </h3>
                <p className="text-sm text-gray-500">
                  Notifier quand un utilisateur suivi publie
                </p>
              </div>
              <Switch
                checked={notifications.userPosts}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, userPosts: checked })
                }
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Photos dans des lieux suivis
                </h3>
                <p className="text-sm text-gray-500">
                  Notifier pour les publications dans vos lieux favoris
                </p>
              </div>
              <Switch
                checked={notifications.locationPosts}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, locationPosts: checked })
                }
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Photos avec tags suivis
                </h3>
                <p className="text-sm text-gray-500">
                  Notifier pour les publications avec vos tags favoris
                </p>
              </div>
              <Switch
                checked={notifications.tagPosts}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, tagPosts: checked })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
