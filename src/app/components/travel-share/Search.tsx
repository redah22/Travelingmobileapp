import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Search as SearchIcon, Mic, MapPin, Calendar, User, Tag, Grid3X3, Map } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Photo {
  id: number;
  author: string;
  image: string;
  location: string;
  tags: string[];
}

const mockPhotos: Photo[] = [
  {
    id: 1,
    author: 'Sophie Martin',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400',
    location: 'Tour Eiffel, Paris',
    tags: ['Monument', 'Paris', 'Architecture'],
  },
  {
    id: 2,
    author: 'Lucas Dupont',
    image: 'https://images.unsplash.com/photo-1626946548234-a65fd193db41?w=400',
    location: 'Tokyo, Japon',
    tags: ['Ville', 'Nuit', 'Urbain'],
  },
  {
    id: 3,
    author: 'Emma Bernard',
    image: 'https://images.unsplash.com/photo-1706387636596-00196e5e1504?w=400',
    location: 'Grand Canyon, USA',
    tags: ['Nature', 'Paysage', 'Montagne'],
  },
];

export function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [results, setResults] = useState<Photo[]>(mockPhotos);

  const handleSearch = () => {
    // Simulation de recherche
    if (searchQuery.trim()) {
      const filtered = mockPhotos.filter(photo =>
        photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults(mockPhotos);
    }
  };

  const handleVoiceSearch = () => {
    alert('Recherche vocale (fonctionnalité à venir - reconnaissance vocale)');
  };

  const filterCategories = [
    { icon: MapPin, label: 'Par lieu', value: 'location' },
    { icon: Calendar, label: 'Par période', value: 'date' },
    { icon: User, label: 'Par auteur', value: 'author' },
    { icon: Tag, label: 'Par tag', value: 'tag' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher des photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10 pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleVoiceSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Mic className="w-5 h-5 text-blue-600" />
            </Button>
          </div>

          <Button onClick={handleSearch} size="sm">
            Rechercher
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {filterCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm whitespace-nowrap"
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex justify-end gap-2">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewMode('grid')}
        >
          <Grid3X3 className="w-4 h-4 mr-1" />
          Grille
        </Button>
        <Button
          variant={viewMode === 'map' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewMode('map')}
        >
          <Map className="w-4 h-4 mr-1" />
          Carte
        </Button>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto p-4">
        {viewMode === 'grid' ? (
          <>
            <p className="text-gray-600 mb-4">{results.length} résultat(s) trouvé(s)</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {results.map(photo => (
                <div
                  key={photo.id}
                  onClick={() => navigate(`/photo/${photo.id}`)}
                  className="cursor-pointer group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={photo.image}
                      alt={photo.location}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <p className="font-semibold text-sm">{photo.location}</p>
                        <p className="text-xs opacity-90">{photo.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <Map className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Vue Carte
            </h3>
            <p className="text-gray-600">
              L'intégration de la carte sera disponible prochainement.
              <br />
              Affichera les photos sous forme de marqueurs géolocalisés.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
