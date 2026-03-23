import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart, MessageCircle, ArrowLeft, Plus } from 'lucide-react';
import { Button } from './ui/button';

interface Post {
  id: number;
  author: string;
  date: string;
  image: string;
  location: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: 'Sophie Martin',
    date: '15 mars 2026',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3Mzk1MTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Tour Eiffel, Paris',
    likes: 245,
    comments: 18,
    isLiked: false,
  },
  {
    id: 2,
    author: 'Lucas Dupont',
    date: '14 mars 2026',
    image: 'https://images.unsplash.com/photo-1626946548234-a65fd193db41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMG5pZ2h0fGVufDF8fHx8MTc3Mzk4NzUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Tokyo, Japon',
    likes: 312,
    comments: 25,
    isLiked: false,
  },
  {
    id: 3,
    author: 'Emma Bernard',
    date: '13 mars 2026',
    image: 'https://images.unsplash.com/photo-1706387636596-00196e5e1504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGNhbnlvbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQwMTgxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Grand Canyon, USA',
    likes: 189,
    comments: 12,
    isLiked: false,
  },
  {
    id: 4,
    author: 'Alexandre Petit',
    date: '12 mars 2026',
    image: 'https://images.unsplash.com/photo-1656504862966-2f0d002bae4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzczOTMzODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Santorin, Grèce',
    likes: 421,
    comments: 34,
    isLiked: true,
  },
  {
    id: 5,
    author: 'Chloé Dubois',
    date: '11 mars 2026',
    image: 'https://images.unsplash.com/photo-1654605316301-2bcdcfbeb956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNodSUyMHBpY2NodSUyMG1vdW50YWlufGVufDF8fHx8MTc3NDAxODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Machu Picchu, Pérou',
    likes: 567,
    comments: 45,
    isLiked: false,
  },
  {
    id: 6,
    author: 'Thomas Leroy',
    date: '10 mars 2026',
    image: 'https://images.unsplash.com/photo-1532203414596-86933a7d7fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW5pY2UlMjBpdGFseSUyMGNhbmFsfGVufDF8fHx8MTc3Mzk0MjI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'Venise, Italie',
    likes: 298,
    comments: 21,
    isLiked: false,
  },
];

export function TravelShare() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">TravelShare</h1>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bg-white mb-2 border-b border-gray-200">
            {/* Post Header */}
            <div className="px-4 py-3 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </div>

            {/* Post Image */}
            <img
              src={post.image}
              alt={post.location}
              className="w-full aspect-square object-cover"
            />

            {/* Post Actions */}
            <div className="px-4 py-3">
              <div className="flex items-center gap-4 mb-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 ${post.isLiked ? 'text-red-500' : 'text-gray-700'}`}
                >
                  <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{post.comments}</span>
                </Button>
              </div>

              <div className="font-semibold text-sm">{post.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <Button
        onClick={() => alert('Publier une photo (fonctionnalité à venir)')}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center"
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
}