import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cloud, CloudRain, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';

export function TravelPath() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState([1500]);
  const [weather, setWeather] = useState<'sunny' | 'cloudy' | 'rainy'>('sunny');

  const handleGenerate = () => {
    navigate('/itinerary', {
      state: { destination, budget: budget[0], weather }
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
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Planifiez votre voyage
          </h2>

          {/* Destination */}
          <div className="mb-6">
            <Label htmlFor="destination" className="text-gray-700 mb-2 block">
              Destination
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="Ex: Paris, Tokyo, New York..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Budget */}
          <div className="mb-6">
            <Label className="text-gray-700 mb-2 block">
              Budget: {budget[0]} €
            </Label>
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={500}
              max={5000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>500 €</span>
              <span>5000 €</span>
            </div>
          </div>

          {/* Weather */}
          <div className="mb-8">
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
                    className={`
                      p-4 rounded-xl border-2 transition-all
                      flex flex-col items-center gap-2
                      ${isSelected 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                      }
                    `}
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

          {/* Submit Button */}
          <Button
            onClick={handleGenerate}
            disabled={!destination}
            className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Générer mon parcours
          </Button>
        </div>
      </div>
    </div>
  );
}
