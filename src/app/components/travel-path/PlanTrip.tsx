import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cloud, CloudRain, Sun, MapPin, Plus, X, Zap, Users as UsersIcon, Thermometer } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';

const activityTypes = [
  { id: 'restaurant', label: 'Restauration', icon: '🍽️' },
  { id: 'leisure', label: 'Loisirs', icon: '🎡' },
  { id: 'discovery', label: 'Découverte', icon: '🗺️' },
  { id: 'culture', label: 'Culture', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
];

const effortLevels = [
  { value: 0, label: 'Faible', desc: 'Adapté PMR, enfants' },
  { value: 1, label: 'Modéré', desc: 'Marche normale' },
  { value: 2, label: 'Élevé', desc: 'Sportif' },
];

const weatherTolerances = [
  { id: 'cold', label: 'Froid', icon: '❄️' },
  { id: 'heat', label: 'Chaleur', icon: '🔥' },
  { id: 'humidity', label: 'Humidité', icon: '💧' },
];

export function PlanTrip() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState([1500]);
  const [duration, setDuration] = useState([1]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(['discovery', 'culture']);
  const [effortLevel, setEffortLevel] = useState(1);
  const [weatherTolerance, setWeatherTolerance] = useState<string[]>([]);
  const [mustVisit, setMustVisit] = useState<string[]>([]);
  const [newPlace, setNewPlace] = useState('');

  const handleActivityToggle = (activityId: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const handleWeatherToggle = (tolerance: string) => {
    setWeatherTolerance(prev =>
      prev.includes(tolerance)
        ? prev.filter(t => t !== tolerance)
        : [...prev, tolerance]
    );
  };

  const handleAddPlace = () => {
    if (newPlace.trim()) {
      setMustVisit([...mustVisit, newPlace]);
      setNewPlace('');
    }
  };

  const handleRemovePlace = (index: number) => {
    setMustVisit(mustVisit.filter((_, i) => i !== index));
  };

  const handleGenerate = () => {
    navigate('/itinerary-options', {
      state: {
        destination,
        budget: budget[0],
        duration: duration[0],
        activities: selectedActivities,
        effortLevel,
        weatherTolerance,
        mustVisit,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 px-4 py-3 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="mr-3 text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold text-white">Planifier mon voyage</h1>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-8 pb-24">
        <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-6">
          {/* Destination */}
          <div>
            <Label htmlFor="destination" className="text-gray-700 mb-2 block flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Destination *
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="Ex: Paris, Tokyo, New York..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* Activities */}
          <div>
            <Label className="text-gray-700 mb-3 block">
              Activités souhaitées *
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {activityTypes.map(activity => (
                <button
                  key={activity.id}
                  onClick={() => handleActivityToggle(activity.id)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    selectedActivities.includes(activity.id)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{activity.icon}</div>
                  <div className={`text-sm font-medium ${
                    selectedActivities.includes(activity.id)
                      ? 'text-purple-700'
                      : 'text-gray-700'
                  }`}>
                    {activity.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Must-visit places */}
          <div>
            <Label className="text-gray-700 mb-2 block">
              Lieux à visiter impérativement
            </Label>
            <div className="flex gap-2 mb-2">
              <Input
                type="text"
                placeholder="Ajouter un lieu..."
                value={newPlace}
                onChange={(e) => setNewPlace(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddPlace()}
              />
              <Button onClick={handleAddPlace} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {mustVisit.map((place, index) => (
                <div
                  key={index}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {place}
                  <button onClick={() => handleRemovePlace(index)}>
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <Label className="text-gray-700 mb-2 block">
              Budget maximum: {budget[0]} €
            </Label>
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={500}
              max={5000}
              step={100}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>500 €</span>
              <span>5000 €</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <Label className="text-gray-700 mb-2 block">
              Durée: {duration[0]} jour{duration[0] > 1 ? 's' : ''}
            </Label>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={1}
              max={14}
              step={1}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 jour</span>
              <span>14 jours</span>
            </div>
          </div>

          {/* Effort Level */}
          <div>
            <Label className="text-gray-700 mb-3 block flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Niveau d'effort accepté
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {effortLevels.map(level => (
                <button
                  key={level.value}
                  onClick={() => setEffortLevel(level.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    effortLevel === level.value
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`text-sm font-semibold mb-1 ${
                    effortLevel === level.value
                      ? 'text-purple-700'
                      : 'text-gray-700'
                  }`}>
                    {level.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {level.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Weather Tolerance */}
          <div>
            <Label className="text-gray-700 mb-3 block flex items-center gap-2">
              <Thermometer className="w-4 h-4" />
              Sensibilité météo (optionnel)
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {weatherTolerances.map(weather => (
                <button
                  key={weather.id}
                  onClick={() => handleWeatherToggle(weather.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    weatherTolerance.includes(weather.id)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{weather.icon}</div>
                  <div className={`text-sm font-medium ${
                    weatherTolerance.includes(weather.id)
                      ? 'text-purple-700'
                      : 'text-gray-700'
                  }`}>
                    {weather.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleGenerate}
            disabled={!destination || selectedActivities.length === 0}
            className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Générer mes parcours
          </Button>
        </div>
      </div>
    </div>
  );
}
