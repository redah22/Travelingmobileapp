import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Heart, MessageCircle, MapPin, Calendar, Navigation, Flag, Share2, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useAuth } from '../../contexts/AuthContext';

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

export function PhotoDetail() {
  const navigate = useNavigate();
  const { photoId } = useParams();
  const { isAuthenticated } = useAuth();
  
  // Mock photo data
  const photo = {
    id: Number(photoId),
    author: 'Sophie Martin',
    date: '15 mars 2026',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3Mzk1MTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Tour Eiffel, Paris',
    coordinates: { lat: 48.8584, lng: 2.2945 },
    description: 'Vue magnifique sur la Tour Eiffel au coucher du soleil. Un moment magique capturé lors de ma visite à Paris.',
    tags: ['Paris', 'Monument', 'Coucher de soleil', 'Architecture'],
    likes: 245,
    isLiked: false,
    howToGetThere: 'Métro ligne 6, station Bir-Hakeim ou ligne 9, station Trocadéro. Bus 82, 42, 87.',
  };

  const [isLiked, setIsLiked] = useState(photo.isLiked);
  const [likes, setLikes] = useState(photo.likes);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Lucas Dupont', text: 'Magnifique photo ! J\'adore la lumière.', date: '15 mars 2026' },
    { id: 2, author: 'Emma Bernard', text: 'Je dois absolument y aller !', date: '16 mars 2026' },
  ]);

  const handleLike = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: 'Vous',
        text: newComment,
        date: new Date().toLocaleDateString('fr-FR'),
      }]);
      setNewComment('');
    }
  };

  const handleGetDirections = () => {
    // Ouvrir Google Maps
    const url = `https://www.google.com/maps/dir/?api=1&destination=${photo.coordinates.lat},${photo.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleReport = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    alert('Photo signalée. Notre équipe va examiner le contenu.');
  };

  const handleShare = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    alert('Partager avec un groupe (fonctionnalité à venir)');
  };

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
          <h1 className="text-xl font-semibold">Photo</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReport}
        >
          <Flag className="w-5 h-5" />
        </Button>
      </div>

      <div className="max-w-2xl mx-auto pb-8">
        {/* Photo */}
        <img
          src={photo.image}
          alt={photo.location}
          className="w-full aspect-square object-cover"
        />

        {/* Actions */}
        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-700'}`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-700"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{comments.length}</span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-gray-700"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Author */}
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
              {photo.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold">{photo.author}</div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {photo.date}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-800 mb-3">{photo.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {photo.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
              <p className="text-gray-600">{photo.location}</p>
              <p className="text-sm text-gray-500">
                Coordonnées: {photo.coordinates.lat.toFixed(4)}, {photo.coordinates.lng.toFixed(4)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Navigation className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Comment y aller</h3>
              <p className="text-gray-600 text-sm">{photo.howToGetThere}</p>
            </div>
          </div>

          <Button
            onClick={handleGetDirections}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Obtenir l'itinéraire
          </Button>
        </div>

        {/* Comments */}
        <div className="bg-white px-6 py-4">
          <h3 className="font-semibold text-gray-900 mb-4">
            Commentaires ({comments.length})
          </h3>

          {/* Comment list */}
          <div className="space-y-4 mb-4">
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {comment.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add comment */}
          {isAuthenticated ? (
            <div className="flex gap-2">
              <Textarea
                placeholder="Ajouter un commentaire..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1"
                rows={2}
              />
              <Button
                onClick={handleComment}
                disabled={!newComment.trim()}
                className="self-end"
              >
                Publier
              </Button>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-blue-800 mb-2">
                Connectez-vous pour commenter
              </p>
              <Button
                onClick={() => navigate('/login')}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Se connecter
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
