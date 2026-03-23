import { useNavigate } from 'react-router';
import { Plane, Share2, Route, User } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';

export function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center px-6">
      {/* User info / Login button */}
      <div className="absolute top-6 right-6">
        {isAuthenticated ? (
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-colors"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium">{user?.name}</span>
          </button>
        ) : (
          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            <User className="w-4 h-4 mr-2" />
            Connexion
          </Button>
        )}
      </div>

      {/* Logo and Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <Plane className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-5xl text-white font-bold mb-2">Traveling</h1>
        <p className="text-blue-100 text-lg">Explorez et planifiez vos voyages</p>
        {!isAuthenticated && (
          <p className="text-blue-200 text-sm mt-2">
            ✨ Créez un compte pour une expérience complète
          </p>
        )}
      </div>

      {/* Main Buttons */}
      <div className="w-full max-w-md space-y-4">
        <div
          onClick={() => navigate('/travel-share')}
          className="group cursor-pointer"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">TravelShare</h2>
                <p className="text-blue-600 text-sm font-medium">Partagez vos voyages</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Découvrez et partagez des photos de voyages du monde entier. Recherchez, explorez et connectez-vous avec d'autres voyageurs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                📸 Photos
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                👥 Groupes
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                🔍 Recherche
              </span>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate('/travel-path')}
          className="group cursor-pointer"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3">
                <Route className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">TravelPath</h2>
                <p className="text-purple-600 text-sm font-medium">Planifiez votre parcours</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Créez des itinéraires personnalisés avec des suggestions intelligentes adaptées à votre budget, durée et préférences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                🗺️ Itinéraires
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                💰 Budget
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                📄 Export PDF
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-blue-100 text-sm">
          {isAuthenticated 
            ? `Bienvenue ${user?.name} ! Profitez de toutes les fonctionnalités.`
            : 'Une application complète pour vos aventures'}
        </p>
      </div>
    </div>
  );
}