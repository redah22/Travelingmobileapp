import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, MapPin, Clock, Download } from 'lucide-react';
import { Button } from './ui/button';

interface Stop {
  id: number;
  time: string;
  title: string;
  description: string;
  duration: string;
}

export function Itinerary() {
  const navigate = useNavigate();
  const location = useLocation();
  const { destination = 'Paris', budget = 1500, weather = 'sunny' } = location.state || {};

  // Mock itinerary data based on destination
  const stops: Stop[] = [
    {
      id: 1,
      time: '09:00',
      title: `Centre historique de ${destination}`,
      description: 'Visite guidée des monuments emblématiques et des quartiers historiques',
      duration: '3h',
    },
    {
      id: 2,
      time: '13:00',
      title: 'Déjeuner gastronomique',
      description: 'Restaurant local recommandé avec spécialités régionales',
      duration: '1h30',
    },
    {
      id: 3,
      time: '16:00',
      title: 'Musée ou attraction culturelle',
      description: 'Découverte de l\'art et de la culture locale',
      duration: '2h',
    },
  ];

  const handleDownloadPDF = () => {
    alert('Téléchargement du PDF en cours... (Fonctionnalité de démonstration)');
  };

  // Google Maps Static API URL (using a placeholder)
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(destination)}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(destination)}&key=YOUR_API_KEY_HERE`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/travel-path')}
          className="mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Votre itinéraire</h1>
      </div>

      <div className="max-w-2xl mx-auto pb-8">
        {/* Destination Info */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-6">
          <h2 className="text-3xl font-bold mb-2">{destination}</h2>
          <div className="flex items-center gap-4 text-purple-100">
            <span>Budget: {budget} €</span>
            <span>•</span>
            <span>20 mars 2026</span>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white border-b border-gray-200">
          <div className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Carte de {destination}</p>
              <p className="text-xs text-gray-400 mt-1">
                (Intégration Google Maps à venir)
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white px-6 py-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Programme de la journée
          </h3>

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
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{stop.time}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{stop.duration}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {stop.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {stop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="px-6 pt-4">
          <Button
            onClick={handleDownloadPDF}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Exporter en PDF
          </Button>
        </div>
      </div>
    </div>
  );
}