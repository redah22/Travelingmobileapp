import { useState } from "react";
import { Heart, MessageCircle, Share2, MapPin, Navigation2, Search, MoreHorizontal, Mic, Flag, Bell, SlidersHorizontal } from "lucide-react";
import { StatusBar, ConnectedBottomBar } from "./SharedComponents";

const AVATAR_ME = "https://images.unsplash.com/photo-1699811250804-f240e347c831?w=80&q=80";
const AVATAR_1 = "https://images.unsplash.com/photo-1585675444601-25e0f56bc7c1?w=80&q=80";
const AVATAR_2 = "https://images.unsplash.com/photo-1760341682621-8cf8b97e4cbb?w=80&q=80";
const AVATAR_3 = "https://images.unsplash.com/photo-1692571825592-f1618a10ab77?w=80&q=80";

const INITIAL_POSTS = [
  {
    id: 1,
    user: "sophie_voyage",
    avatar: AVATAR_2,
    location: "Santorin, Grèce",
    image: "https://images.unsplash.com/photo-1656677476420-7159cac2366a?w=400&q=80",
    caption: "Les couchers de soleil à Oia sont incomparables 🌅 #Santorini #Grèce",
    likes: 412,
    comments: 38,
    timeAgo: "1h",
    isLiked: true,
    isSaved: false,
  },
  {
    id: 2,
    user: "pierre_travel",
    avatar: AVATAR_1,
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1592561849308-3ab187d49881?w=400&q=80",
    caption: "La magie de la Tour Eiffel au coucher du soleil ✨ #Paris #France",
    likes: 287,
    comments: 21,
    timeAgo: "3h",
    isLiked: false,
    isSaved: true,
  },
  {
    id: 3,
    user: "alex_rando",
    avatar: AVATAR_3,
    location: "Marrakech, Maroc",
    image: "https://images.unsplash.com/photo-1727640567364-b1f039352132?w=400&q=80",
    caption: "Perdu dans les ruelles de la médina 🧭 #Maroc #Voyage",
    likes: 198,
    comments: 15,
    timeAgo: "5h",
    isLiked: false,
    isSaved: false,
  },
];

export function ConnectedFeedScreen() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [reportedPost, setReportedPost] = useState<number | null>(null);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("Tout");

  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  return (
    <div
      style={{
        width: 375,
        height: 812,
        backgroundColor: "#F7F9FF",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <StatusBar bg="white" />

      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          padding: "6px 20px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 34,
              height: 34,
              backgroundColor: "#1E5BF5",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 16 }}>✈</span>
          </div>
          <span
            style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", letterSpacing: -0.5 }}
          >
            Traveling
          </span>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#10B981",
              marginLeft: 2,
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Search + Mic */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#EEF3FF",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Search size={17} color="#1E5BF5" />
            </button>
            <button
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#FFF3EE",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Mic size={17} color="#FF6B35" />
            </button>
          </div>
          <img
            src={AVATAR_ME}
            alt="me"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2.5px solid #1E5BF5",
            }}
          />
          {/* Bell */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: showNotifications ? "#EEF3FF" : "#F7F9FF",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Bell size={17} color="#1A1A2E" />
            </button>
            <div
              style={{
                position: "absolute",
                top: 6,
                right: 6,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#EF4444",
                border: "2px solid white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 16,
            right: 16,
            backgroundColor: "white",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
            zIndex: 30,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E" }}>Notifications</span>
            <span style={{ fontSize: 11, color: "#1E5BF5", fontWeight: 600 }}>Tout marquer lu</span>
          </div>
          {[
            { avatar: AVATAR_2, text: "sophie_voyage a publié une nouvelle photo à Santorin", time: "2 min", unread: true },
            { avatar: AVATAR_1, text: "pierre_travel a aimé votre publication", time: "15 min", unread: true },
            { avatar: AVATAR_3, text: "alex_rando vous suit maintenant", time: "1h", unread: false },
            { avatar: AVATAR_1, text: "Nouvelle photo dans le groupe \"Europe 2026\"", time: "3h", unread: false },
          ].map((notif, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                backgroundColor: notif.unread ? "#F0F5FF" : "white",
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              <img src={notif.avatar} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, color: "#1A1A2E", margin: 0, lineHeight: 1.4 }}>{notif.text}</p>
                <span style={{ fontSize: 10, color: "#94A3B8" }}>{notif.time}</span>
              </div>
              {notif.unread && <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1E5BF5", flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      )}

      {/* Filter chips */}
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 6,
          flexShrink: 0,
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <div style={{ display: "flex", gap: 8, paddingLeft: 16, overflowX: "auto" }}>
          {["Tout", "Nature", "Culture", "Gastronomie", "Par auteur", "Autour de moi", "Similaire"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                border: activeFilter === f ? "none" : "1.5px solid #E2E8F0",
                backgroundColor: activeFilter === f ? "#1E5BF5" : "white",
                color: activeFilter === f ? "white" : "#64748B",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.15s",
              }}
            >
              {f}
            </button>
          ))}
          <div style={{ width: 16, flexShrink: 0 }} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "white",
              marginBottom: 8,
            }}
          >
            {/* Post header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    padding: 2,
                    background: "linear-gradient(45deg, #FF6B35, #1E5BF5)",
                  }}
                >
                  <img
                    src={post.avatar}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid white",
                    }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>
                    @{post.user}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <MapPin size={10} color="#FF6B35" />
                    <span style={{ fontSize: 11, color: "#64748B" }}>{post.location}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>{post.timeAgo}</span>
                <button
                  onClick={() => setOpenMenuId(openMenuId === post.id ? null : post.id)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <MoreHorizontal size={18} color="#94A3B8" />
                </button>
                {openMenuId === post.id && (
                  <div
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 0,
                      backgroundColor: "white",
                      borderRadius: 12,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                      padding: "8px 0",
                      zIndex: 10,
                      minWidth: 150,
                    }}
                  >
                    <button
                      onClick={() => { setReportedPost(post.id); setOpenMenuId(null); }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        width: "100%",
                        padding: "8px 14px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#EF4444",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      <Flag size={14} />
                      Signaler un abus
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src={post.image}
                alt=""
                style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent 60%)",
                }}
              />
              {/* Y aller badge */}
              <button
                style={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "7px 12px",
                  backgroundColor: "#FF6B35",
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(255,107,53,0.5)",
                }}
              >
                <Navigation2 size={13} color="white" />
                <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>Y aller</span>
              </button>
            </div>

            {/* Caption */}
            <div style={{ padding: "8px 16px 4px" }}>
              <p style={{ fontSize: 13, color: "#1A1A2E", lineHeight: 1.4 }}>{post.caption}</p>
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px 14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                {/* Like */}
                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Heart
                    size={22}
                    color={post.isLiked ? "#EC4899" : "#64748B"}
                    fill={post.isLiked ? "#EC4899" : "none"}
                    style={{ transition: "all 0.15s" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: post.isLiked ? "#EC4899" : "#64748B",
                    }}
                  >
                    {post.likes}
                  </span>
                </button>

                {/* Comment */}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <MessageCircle size={22} color="#64748B" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#64748B" }}>
                    {post.comments}
                  </span>
                </button>

                {/* Share */}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Share2 size={22} color="#64748B" />
                </button>
              </div>

              {/* Subscribe */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "5px 12px",
                  borderRadius: 20,
                  border: "1.5px solid #1E5BF5",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "#1E5BF5" }}>
                  + Suivre
                </span>
              </button>
            </div>
          </div>
        ))}
        <div style={{ height: 8 }} />
      </div>

      {/* Report Toast */}
      {reportedPost !== null && (
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 20,
            right: 20,
            backgroundColor: "#EF4444",
            borderRadius: 12,
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            zIndex: 20,
            boxShadow: "0 4px 16px rgba(239,68,68,0.3)",
          }}
        >
          <Flag size={16} color="white" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>Signalement envoyé — Merci !</span>
        </div>
      )}

      <ConnectedBottomBar active="home" avatarUrl={AVATAR_ME} />
    </div>
  );
}
