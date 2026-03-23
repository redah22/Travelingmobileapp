import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Clock, Wallet, Zap, Heart, RefreshCw, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ItineraryOption {
  id: number;
  name: string;
  type: 'economic' | 'balanced' | 'comfort';
  description: string;
  budget: number;
  duration: string;
  effort: string;
  stops: number;
  highlights: string[];
  image: string;
  liked: boolean;
}

export function ItineraryOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = location.state || {};
  
  const [options, setOptions] = useState<ItineraryOption[]>([
    {
      id: 1,
      name: 'Parcours Économique',
      type: 'economic',
      description: 'Optimisé pour le budget avec les essentiels',
      budget: Math.round((params.budget || 1500) * 0.7),
      duration: '6h30',
      effort: 'Modéré',
      stops: 5,
      highlights: ['Monuments gratuits', 'Restaurants locaux', 'Transports en commun'],
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
      liked: false,
    },
    {
      id: 2,
      name: 'Parcours Équilibré',
      type: 'balanced',
      description: 'Le meilleur rapport qualité-prix',
      budget: params.budget || 1500,
      duration: '8h',
      effort: 'Modéré',
      stops: 7,
      highlights: ['Sites populaires', 'Bon restaurant', 'Mix transport'],
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400',
      liked: false,
    },
    {
      id: 3,
      name: 'Parcours Confort',
      type: 'comfort',
      description: 'Expérience premium sans compromis',
      budget: Math.round((params.budget || 1500) * 1.3),
      duration: '9h30',
      effort: 'Faible',
      stops: 9,
      highlights: ['Sites exclusifs', 'Restaurant gastronomique', 'VTC privé'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
      liked: false,
    },
  ]);

  const handleLike = (optionId: number) => {
    setOptions(options.map(opt =>
      opt.id === optionId ? { ...opt, liked: !opt.liked } : opt
    ));
  };

  const handleRegenerate = () => {
    alert('Régénération des parcours avec de nouveaux critères...');
    // Simulation de régénération
  };

  const handleSelectOption = (option: ItineraryOption) => {
    navigate('/itinerary-detail', {
      state: {
        ...params,
        selectedOption: option,
      },
    });
  };

  const typeColors = {
    economic: 'bg-green-100 text-green-700 border-green-300',
    balanced: 'bg-blue-100 text-blue-700 border-blue-300',
    comfort: 'bg-purple-100 text-purple-700 border-purple-300',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold">Vos parcours</h1>
              <p className="text-sm text-gray-500">{params.destination || 'Paris'}</p>
            </div>
          </div>
          
          <Button
            onClick={handleRegenerate}
            variant="outline"
            size="sm"
          >
            <RefreshCw className="w-4 h-4 mr-1" />
            Régénérer
          </Button>
        </div>
      </div>

      {/* Trip Info */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {params.destination || 'Paris'}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {params.duration || 1} jour{(params.duration || 1) > 1 ? 's' : ''}
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Budget: {params.budget || 1500} €
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="max-w-2xl mx-auto p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {options.length} parcours générés pour vous
        </h2>

        {options.map(option => (
          <div
            key={option.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className={`${typeColors[option.type]} border`}>
                  {option.name}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleLike(option.id)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white"
              >
                <Heart className={`w-5 h-5 ${option.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </Button>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-gray-600 mb-4">{option.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="text-center">
                  <Wallet className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{option.budget} €</div>
                  <div className="text-xs text-gray-500">Budget</div>
                </div>
                <div className="text-center">
                  <Clock className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{option.duration}</div>
                  <div className="text-xs text-gray-500">Durée</div>
                </div>
                <div className="text-center">
                  <Zap className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{option.effort}</div>
                  <div className="text-xs text-gray-500">Effort</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{option.stops}</div>
                  <div className="text-xs text-gray-500">Arrêts</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Points forts:</div>
                <div className="flex flex-wrap gap-2">
                  {option.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <Button
                onClick={() => handleSelectOption(option)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Voir les détails
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
