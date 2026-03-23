import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Upload, MapPin, Calendar, Mic, Tag, Globe, Users, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useAuth } from '../../contexts/AuthContext';

export function PublishPhoto() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [visibility, setVisibility] = useState<'public' | 'group' | 'private'>('public');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <Lock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Connexion requise
          </h2>
          <p className="text-gray-600 mb-6">
            Vous devez être connecté pour publier des photos
          </p>
          <Button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Se connecter
          </Button>
        </div>
      </div>
    );
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVoiceAnnotation = () => {
    alert('Annotation vocale activée (fonctionnalité à venir - reconnaissance vocale)');
  };

  const handleAIAnnotation = () => {
    // Simulation d'annotation IA
    setTags('Paris, Monument, Architecture, Tour Eiffel');
    setLocation('Tour Eiffel, Paris, France');
    alert('Tags et localisation générés automatiquement par IA !');
  };

  const handlePublish = () => {
    if (!selectedImage || !description || !location) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }
    alert(`Photo publiée avec succès !\nVisibilité: ${visibility}`);
    navigate('/travel-share');
  };

  const visibilityOptions = [
    { value: 'public', label: 'Public', icon: Globe, desc: 'Visible par tous' },
    { value: 'group', label: 'Groupe', icon: Users, desc: 'Visible par votre groupe' },
    { value: 'private', label: 'Privé', icon: Lock, desc: 'Visible uniquement par vous' },
  ];

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
          <h1 className="text-xl font-semibold">Publier une photo</h1>
        </div>
        <Button onClick={handlePublish} className="bg-blue-600 hover:bg-blue-700">
          Publier
        </Button>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Image Upload */}
        <div>
          <Label className="text-gray-700 mb-2 block">Photo *</Label>
          {selectedImage ? (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <Button
                variant="secondary"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2"
              >
                Changer
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-gray-600">Cliquez pour sélectionner une photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* AI Annotation */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            🤖 Annotation assistée par IA
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Laissez l'IA analyser votre photo et générer automatiquement les tags et la localisation
          </p>
          <Button
            onClick={handleAIAnnotation}
            variant="outline"
            className="w-full"
          >
            Générer avec l'IA
          </Button>
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-gray-700">Description *</Label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVoiceAnnotation}
              className="text-blue-600"
            >
              <Mic className="w-4 h-4 mr-1" />
              Vocal
            </Button>
          </div>
          <Textarea
            placeholder="Décrivez votre photo..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Location */}
        <div>
          <Label className="text-gray-700 mb-2 block">
            <MapPin className="w-4 h-4 inline mr-1" />
            Localisation *
          </Label>
          <Input
            type="text"
            placeholder="Ex: Tour Eiffel, Paris, France"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div>
          <Label className="text-gray-700 mb-2 block">
            <Tag className="w-4 h-4 inline mr-1" />
            Tags (séparés par des virgules)
          </Label>
          <Input
            type="text"
            placeholder="Ex: Paris, Monument, Architecture"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        {/* Visibility */}
        <div>
          <Label className="text-gray-700 mb-2 block">Visibilité</Label>
          <div className="grid grid-cols-3 gap-3">
            {visibilityOptions.map(option => {
              const Icon = option.icon;
              const isSelected = visibility === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => setVisibility(option.value as any)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div className={`text-sm font-semibold ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}>
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {option.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Date */}
        <div>
          <Label className="text-gray-700 mb-2 block">
            <Calendar className="w-4 h-4 inline mr-1" />
            Date de la photo
          </Label>
          <Input
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>
    </div>
  );
}
