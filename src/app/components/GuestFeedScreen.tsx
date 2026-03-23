import { Heart, MessageCircle, Share2, Search, MapPin, Lock, UserPlus, Map } from "lucide-react";

const POSTS = [
  {
    id: 1,
    user: "sophie_voyage",
    avatar: "https://images.unsplash.com/photo-1760341682621-8cf8b97e4cbb?w=60&q=80",
    location: "Bali, Indonésie",
    image: "https://images.unsplash.com/photo-1576475706812-822620fc23ba?w=400&q=80",
    caption: "Les rizières de Tegallalang au lever du soleil 🌾✨",
    likes: 248,
    comments: 34,
    timeAgo: "2h",
  },
  {
    id: 2,
    user: "pierre_travel",
    avatar: "https://images.unsplash.com/photo-1585675444601-25e0f56bc7c1?w=60&q=80",
    location: "Kyoto, Japon",
    image: "https://images.unsplash.com/photo-1712244876693-a89f6172178e?w=400&q=80",
    caption: "Les cerisiers en fleurs du Maruyama Park 🌸",
    likes: 412,
    comments: 56,
    timeAgo: "5h",
  },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-white" style={{ padding: "12px 20px 4px" }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>9:41</span>
      <div className="flex items-center gap-1.5">
        <div style={{ width: 14, height: 10, border: "1.5px solid #1A1A2E", borderRadius: 2, position: "relative" }}>
          <div style={{ position: "absolute", left: 1, top: 1, width: "65%", height: "calc(100% - 2px)", backgroundColor: "#1A1A2E", borderRadius: 1 }} />
          <div style={{ position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", width: 2, height: 5, backgroundColor: "#1A1A2E", borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

function GuestBottomBar({ active }: { active: "home" | "itinerary" }) {
  return (
    <div className="flex items-center justify-around bg-white border-t border-gray-100" style={{ height: 60, padding: "0 16px" }}>
      <button className="flex flex-col items-center gap-0.5">
        <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: active === "home" ? "#1E5BF5" : "#94A3B8" }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span style={{ fontSize: 10, fontWeight: active === "home" ? 600 : 400, color: active === "home" ? "#1E5BF5" : "#94A3B8" }}>Accueil</span>
      </button>
      <button className="flex flex-col items-center gap-0.5">
        <Map size={22} color={active === "itinerary" ? "#1E5BF5" : "#94A3B8"} />
        <span style={{ fontSize: 10, fontWeight: active === "itinerary" ? 600 : 400, color: active === "itinerary" ? "#1E5BF5" : "#94A3B8" }}>Itinéraires</span>
      </button>
      <button className="flex flex-col items-center gap-0.5 rounded-2xl" style={{ backgroundColor: "#1E5BF5", padding: "8px 16px" }}>
        <UserPlus size={18} color="white" />
        <span style={{ fontSize: 10, fontWeight: 600, color: "white" }}>Connexion</span>
      </button>
    </div>
  );
}

export function GuestFeedScreen() {
  return (
    <div style={{ width: 375, height: 812, backgroundColor: "#F7F9FF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between bg-white shadow-sm" style={{ padding: "10px 20px" }}>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center" style={{ width: 34, height: 34, backgroundColor: "#1E5BF5", borderRadius: 10 }}>
            <span style={{ color: "white", fontSize: 16 }}>✈</span>
          </div>
          <span style={{ fontSize: 19, fontWeight: 800, color: "#1A1A2E", letterSpacing: -0.5 }}>Traveling</span>
        </div>
        <button className="flex items-center justify-center" style={{ width: 36, height: 36, backgroundColor: "#EEF3FF", borderRadius: 10 }}>
          <Search size={18} color="#1E5BF5" />
        </button>
      </div>

      {/* CTA Banner */}
      <div className="mx-4 mt-3 flex items-center justify-between shadow-md" style={{ backgroundColor: "#1E5BF5", borderRadius: 18, padding: "12px 16px" }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: "white" }}>Rejoignez la communauté ✨</p>
          <p style={{ fontSize: 11, color: "#93C5FD", marginTop: 2 }}>Partagez vos plus belles aventures</p>
        </div>
        <button className="bg-white" style={{ padding: "6px 12px", borderRadius: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1E5BF5" }}>Connexion</span>
        </button>
      </div>

      {/* Feed */}
      <div style={{ flex: 1, overflowY: "auto", paddingTop: 12, paddingBottom: 8, display: "flex", flexDirection: "column", gap: 14 }}>
        {POSTS.map((post) => (
          <div key={post.id} className="bg-white mx-4 shadow-sm" style={{ borderRadius: 20, overflow: "hidden" }}>
            {/* Post header */}
            <div className="flex items-center justify-between" style={{ padding: "12px 16px" }}>
              <div className="flex items-center gap-2.5">
                <img src={post.avatar} alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid #EEF3FF" }} />
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>@{post.user}</p>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} color="#FF6B35" />
                    <span style={{ fontSize: 11, color: "#64748B" }}>{post.location}</span>
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>{post.timeAgo}</span>
            </div>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <img src={post.image} alt="" style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)" }} />
            </div>

            {/* Caption */}
            <div style={{ padding: "8px 16px 4px" }}>
              <p style={{ fontSize: 12, color: "#1A1A2E" }}>{post.caption}</p>
            </div>

            {/* Actions (greyed out - guest mode) */}
            <div className="flex items-center justify-between" style={{ padding: "8px 16px 12px" }}>
              <div className="flex items-center gap-4" style={{ opacity: 0.35 }}>
                <div className="flex items-center gap-1.5">
                  <Heart size={18} color="#94A3B8" />
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle size={18} color="#94A3B8" />
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>{post.comments}</span>
                </div>
                <Share2 size={18} color="#94A3B8" />
              </div>
              <div className="flex items-center gap-1" style={{ opacity: 0.4, backgroundColor: "#F1F5F9", padding: "5px 10px", borderRadius: 8 }}>
                <Lock size={10} color="#94A3B8" />
                <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Y aller</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GuestBottomBar active="home" />
    </div>
  );
}
