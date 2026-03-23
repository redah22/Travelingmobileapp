import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, MapPin, Clock, Download, Share2, Bookmark, Image as ImageIcon, Video, Cloud, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Stop {
  id: number;
  time: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  cost: number;
  image: string;
  tips: string;
}

export function ItineraryDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { destination = 'Paris', selectedOption } = location.state || {};
  const [saved, setSaved] = useState(false);

  // Mock detailed itinerary
  const stops: Stop[] = [
    {
      id: 1,
      time: '09:00',
      title: 'Tour Eiffel',
      description: 'Visite du monument emblématique de Paris. Montée au sommet pour une vue panoramique.',
      duration: '2h',
      type: 'Culture',
      cost: 26,
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600',
      tips: 'Réservez vos billets en ligne pour éviter la queue. Montée recommandée : 2ème étage.',
    },
    {
      id: 2,
      time: '11:30',
      title: 'Café des Deux Moulins',
      description: 'Pause café dans le célèbre café du film "Le Fabuleux Destin d\'Amélie Poulain".',
      duration: '45min',
      type: 'Restauration',
      cost: 12,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
      tips: 'Essayez la crème brûlée, spécialité de la maison.',
    },
    {
      id: 3,
      time: '13:00',
      title: 'Musée du Louvre',
      description: 'Découverte des chefs-d\'œuvre du plus grand musée du monde.',
      duration: '3h',
      type: 'Culture',
      cost: 17,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600',
      tips: 'Concentrez-vous sur les ailes Denon et Sully. La Joconde attire beaucoup de monde.',
    },
    {
      id: 4,
      time: '17:00',
      title: 'Jardin des Tuileries',
      description: 'Promenade relaxante dans les jardins historiques.',
      duration: '1h',
      type: 'Nature',
      cost: 0,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',
      tips: 'Parfait pour une pause après le musée. Gratuit.',
    },
    {
      id: 5,
      time: '19:00',
      title: 'Restaurant Le Jules Verne',
      description: 'Dîner gastronomique dans la Tour Eiffel avec vue spectaculaire.',
      duration: '2h',
      type: 'Restauration',
      cost: 185,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
      tips: 'Réservation obligatoire plusieurs semaines à l\'avance.',
    },
  ];

  const totalCost = stops.reduce((sum, stop) => sum + stop.cost, 0);
  const totalDuration = stops.reduce((sum, stop) => {
    const hours = parseInt(stop.duration);
    return sum + (isNaN(hours) ? 0 : hours);
  }, 0);

  const handleDownloadPDF = () => {
    alert('Génération du PDF en cours...\n\nVotre itinéraire sera téléchargé avec:\n- Carte du parcours\n- Détails des étapes\n- Photos et informations pratiques\n- Budget récapitulatif');
  };

  const handleShare = () => {
    alert('Partager cet itinéraire avec vos amis ou sur TravelShare !');
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  // Weather simulation
  const weather = {
    temp: '18°C',
    condition: 'Ensoleillé',
    icon: Sun,
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
            <h1 className="text-xl font-semibold">Détails du parcours</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
            >
              <Bookmark className={`w-5 h-5 ${saved ? 'fill-purple-600 text-purple-600' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">{destination}</h2>
          <div className="flex items-center gap-4 text-purple-100">
            <span>{totalCost} €</span>
            <span>•</span>
            <span>{totalDuration}h</span>
            <span>•</span>
            <span>{stops.length} étapes</span>
          </div>
          
          {/* Weather */}
          <div className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 w-fit">
            <weather.icon className="w-5 h-5" />
            <span className="text-sm">{weather.condition} - {weather.temp}</span>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Carte interactive du parcours</p>
              <p className="text-xs text-gray-400 mt-1">
                (Intégration à venir)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-6">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="gallery">Galerie</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200" />

              {stops.map((stop, index) => (
                <div key={stop.id} className="relative pl-16 pb-8 last:pb-0">
                  {/* Circle marker */}
                  <div className="absolute left-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Image */}
                    <img
                      src={stop.image}
                      alt={stop.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* Details */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-purple-600">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{stop.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{stop.duration}</span>
                          <span>{stop.cost} €</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {stop.title}
                      </h3>
                      
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                          {stop.type}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {stop.description}
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                        <p className="text-sm text-blue-800">
                          <strong>💡 Astuce:</strong> {stop.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            {/* Photo Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {stops.map(stop => (
                <div key={stop.id} className="relative group">
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <p className="font-semibold text-sm">{stop.title}</p>
                      <p className="text-xs opacity-90">{stop.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Résumé du parcours</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{totalCost} €</div>
              <div className="text-sm text-gray-500">Coût total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{totalDuration}h</div>
              <div className="text-sm text-gray-500">Durée totale</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{stops.length}</div>
              <div className="text-sm text-gray-500">Étapes</div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-6 space-y-3">
          <Button
            onClick={handleDownloadPDF}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Exporter en PDF
          </Button>
          
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full h-12"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Partager sur TravelShare
          </Button>
        </div>
      </div>
    </div>
  );
}
