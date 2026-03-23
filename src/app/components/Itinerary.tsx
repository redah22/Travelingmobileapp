import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, MapPin, Clock, Download, Heart, Bookmark, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface Stop {
  id: number;
  time: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  tagColor: string;
}

const PLANS: Record<string, { label: string; emoji: string; color: string; bg: string; stops: Stop[] }> = {
  economique: {
    label: 'Économique',
    emoji: '💰',
    color: 'text-green-700',
    bg: 'bg-green-50 border-green-400',
    stops: [
      { id: 1, time: '09:00', title: 'Visite du centre historique', description: 'Exploration des quartiers anciens à pied, monuments gratuits', duration: '3h', tag: 'Culture', tagColor: '#1E5BF5' },
      { id: 2, time: '13:00', title: 'Marché local', description: 'Déjeuner au marché avec des spécialités locales abordables', duration: '1h', tag: 'Gastronomie', tagColor: '#FF6B35' },
      { id: 3, time: '15:00', title: 'Parcs et espaces verts', description: 'Promenade dans les parcs publics, entrée gratuite', duration: '2h', tag: 'Loisirs', tagColor: '#10B981' },
    ],
  },
  equilibre: {
    label: 'Équilibré',
    emoji: '⚖️',
    color: 'text-purple-700',
    bg: 'bg-purple-50 border-purple-400',
    stops: [
      { id: 1, time: '09:00', title: 'Musée principal de la ville', description: 'Découverte de l\'histoire et de la culture locale en profondeur', duration: '2h30', tag: 'Culture', tagColor: '#1E5BF5' },
      { id: 2, time: '12:30', title: 'Restaurant gastronomique', description: 'Déjeuner dans un restaurant local bien noté', duration: '1h30', tag: 'Gastronomie', tagColor: '#FF6B35' },
      { id: 3, time: '15:00', title: 'Monument emblématique', description: 'Visite du monument ou site touristique le plus célèbre', duration: '2h', tag: 'Découverte', tagColor: '#7C3AED' },
      { id: 4, time: '18:00', title: 'Quartier animé', description: 'Balade, shopping et vie locale en soirée', duration: '2h', tag: 'Loisirs', tagColor: '#10B981' },
    ],
  },
  confort: {
    label: 'Confort',
    emoji: '⭐',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50 border-yellow-400',
    stops: [
      { id: 1, time: '10:00', title: 'Visite privée & guidée', description: 'Tournée privée des sites principaux avec guide expert', duration: '3h', tag: 'Culture', tagColor: '#1E5BF5' },
      { id: 2, time: '13:30', title: 'Restaurant étoilé', description: 'Déjeuner gastronomique dans un établissement haut de gamme', duration: '2h', tag: 'Gastronomie', tagColor: '#FF6B35' },
      { id: 3, time: '16:00', title: 'Spa & détente', description: 'Moment de relaxation dans un spa de luxe', duration: '2h', tag: 'Loisirs', tagColor: '#10B981' },
      { id: 4, time: '19:00', title: 'Dîner panoramique', description: 'Dîner avec vue exceptionnelle sur la ville', duration: '2h', tag: 'Gastronomie', tagColor: '#FF6B35' },
    ],
  },
};

export function Itinerary() {
  const navigate = useNavigate();
  const location = useLocation();
  const { destination = 'Paris', budget = 1500 } = location.state || {};

  const [selectedPlan, setSelectedPlan] = useState<'economique' | 'equilibre' | 'confort'>('equilibre');
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const plan = PLANS[selectedPlan];

  const handleDownloadPDF = () => {
    alert('Téléchargement du PDF en cours... (Fonctionnalité de démonstration)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
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
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setIsLiked(!isLiked)}>
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsSaved(!isSaved)}>
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-blue-500 text-blue-500' : 'text-gray-500'}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
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

        {/* Plan selector — 3 options */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Choisissez votre formule
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {(Object.entries(PLANS) as [string, typeof PLANS['economique']][]).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key as typeof selectedPlan)}
                className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                  selectedPlan === key ? p.bg + ' border-current' : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className={`text-xs font-bold ${selectedPlan === key ? p.color : 'text-gray-600'}`}>
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-white border-b border-gray-200">
          <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Carte de {destination}</p>
              <p className="text-xs text-gray-400 mt-1">(Intégration Google Maps à venir)</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white px-6 py-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Programme — Formule {plan.label} {plan.emoji}
          </h3>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200" />

            {plan.stops.map((stop) => (
              <div key={stop.id} className="relative pl-16 pb-8 last:pb-0">
                <div
                  className="absolute left-3 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center"
                  style={{ backgroundColor: stop.tagColor }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{stop.time}</span>
                      <span className="text-gray-400">• {stop.duration}</span>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ color: stop.tagColor, backgroundColor: `${stop.tagColor}18` }}
                    >
                      {stop.tag}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{stop.title}</h4>
                  <p className="text-sm text-gray-600">{stop.description}</p>
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