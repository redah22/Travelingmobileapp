import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cloud, CloudRain, Sun, Clock, Zap, Utensils, Gamepad2, Compass, Landmark } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';

const ACTIVITY_TYPES = [
  { value: 'culture', label: 'Culture', icon: Landmark, color: 'blue' },
  { value: 'gastronomie', label: 'Gastronomie', icon: Utensils, color: 'orange' },
  { value: 'loisirs', label: 'Loisirs', icon: Gamepad2, color: 'green' },
  { value: 'decouverte', label: 'Découverte', icon: Compass, color: 'purple' },
];

const EFFORT_LEVELS = [
  { value: 'easy', label: '🧓 Calme', desc: 'Personnes âgées, enfants' },
  { value: 'medium', label: '🚶 Modéré', desc: 'Rythme normal' },
  { value: 'hard', label: '🏃 Intense', desc: 'Sportifs' },
];

export function TravelPath() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState([1500]);
  const [duration, setDuration] = useState([1]);
  const [weather, setWeather] = useState<'sunny' | 'cloudy' | 'rainy'>('sunny');
  const [effort, setEffort] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [activities, setActivities] = useState<string[]>(['culture']);

  const toggleActivity = (val: string) => {
    setActivities(prev =>
      prev.includes(val) ? prev.filter(a => a !== val) : [...prev, val]
    );
  };

  const handleGenerate = () => {
    navigate('/itinerary', {
      state: { destination, budget: budget[0], weather, effort, activities, duration: duration[0] }
    });
  };

  const weatherOptions = [
    { value: 'sunny', label: 'Ensoleillé', icon: Sun, color: 'text-yellow-500' },
    { value: 'cloudy', label: 'Nuageux', icon: Cloud, color: 'text-gray-500' },
    { value: 'rainy', label: 'Pluvieux', icon: CloudRain, color: 'text-blue-500' },
  ] as const;

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
        <h1 className="text-xl font-semibold text-white">TravelPath</h1>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Planifiez votre voyage
          </h2>

          {/* Destination */}
          <div>
            <Label htmlFor="destination" className="text-gray-700 mb-2 block">
              Destination
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="Ex: Paris, Tokyo, New York..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* Activity Types */}
          <div>
            <Label className="text-gray-700 mb-3 block">
              Types d'activités souhaitées
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {ACTIVITY_TYPES.map(({ value, label, icon: Icon }) => {
                const isSelected = activities.includes(value);
                return (
                  <button
                    key={value}
                    onClick={() => toggleActivity(value)}
                    className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget */}
          <div>
            <Label className="text-gray-700 mb-2 block">
              Budget: <span className="font-bold text-purple-600">{budget[0]} €</span>
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
              <Clock className="w-4 h-4 inline mr-1" />
              Durée: <span className="font-bold text-purple-600">{duration[0]} jour{duration[0] > 1 ? 's' : ''}</span>
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
              <span>2 semaines</span>
            </div>
          </div>

          {/* Effort Level */}
          <div>
            <Label className="text-gray-700 mb-3 block">
              <Zap className="w-4 h-4 inline mr-1" />
              Niveau d'effort
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {EFFORT_LEVELS.map(({ value, label, desc }) => {
                const isSelected = effort === value;
                return (
                  <button
                    key={value}
                    onClick={() => setEffort(value as typeof effort)}
                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg">{label.split(' ')[0]}</span>
                    <span className={`text-xs font-semibold ${isSelected ? 'text-purple-600' : 'text-gray-600'}`}>
                      {label.split(' ')[1]}
                    </span>
                    <span className="text-xs text-gray-400 text-center leading-tight">{desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weather */}
          <div>
            <Label className="text-gray-700 mb-3 block">
              Météo préférée
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {weatherOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = weather === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setWeather(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${isSelected ? 'text-purple-600' : option.color}`} />
                    <span className={`text-sm ${isSelected ? 'font-semibold text-purple-600' : 'text-gray-600'}`}>
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <Button
            onClick={handleGenerate}
            disabled={!destination || activities.length === 0}
            className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Générer mon parcours
          </Button>
        </div>
      </div>
    </div>
  );
}
