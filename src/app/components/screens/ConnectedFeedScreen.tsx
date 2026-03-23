import { useState } from "react";
import { Heart, MessageCircle, Share2, MapPin, Navigation2, Search, MoreHorizontal } from "lucide-react";
import { StatusBar, ConnectedBottomBar } from "./SharedComponents";

const AVATAR_ME = "https://images.unsplash.com/photo-1699811250804-f240e347c831?w=80&q=80";
const AVATAR_1 = "https://images.unsplash.com/photo-1585675444601-25e0f56bc7c1?w=80&q=80";
const AVATAR_2 = "https://images.unsplash.com/photo-1760341682621-8cf8b97e4cbb?w=80&q=80";
const AVATAR_3 = "https://images.unsplash.com/photo-1692571825592-f1618a10ab77?w=80&q=80";

const STORIES = [
  { id: "me", label: "Moi", avatar: AVATAR_ME, isMe: true },
  { id: "1", label: "pierre_t", avatar: AVATAR_1, isMe: false, active: true },
  { id: "2", label: "sophie_v", avatar: AVATAR_2, isMe: false, active: true },
  { id: "3", label: "alex_rnd", avatar: AVATAR_3, isMe: false, active: false },
  { id: "4", label: "marie_b", avatar: "", isMe: false, active: true },
];

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
  const [activeStory, setActiveStory] = useState<string | null>(null);

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
        </div>
      </div>

      {/* Stories */}
      <div
        style={{
          backgroundColor: "white",
          padding: "12px 0 14px 16px",
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollbarWidth: "none",
          borderBottom: "1px solid #F1F5F9",
          flexShrink: 0,
        }}
      >
        {STORIES.map((story) => (
          <button
            key={story.id}
            onClick={() => setActiveStory(story.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                padding: 2.5,
                background:
                  story.isMe
                    ? "#E2E8F0"
                    : story.active
                    ? "linear-gradient(45deg, #FF6B35, #1E5BF5, #7C3AED)"
                    : "#E2E8F0",
              }}
            >
              {story.isMe ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "#EEF3FF",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1 }}>+</span>
                </div>
              ) : story.avatar ? (
                <img
                  src={story.avatar}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid white",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 18, color: "white" }}>
                    {story.label[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <span
              style={{
                fontSize: 10,
                color: "#1A1A2E",
                fontWeight: story.isMe ? 700 : 400,
                maxWidth: 54,
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {story.label}
            </span>
          </button>
        ))}
        <div style={{ width: 8, flexShrink: 0 }} />
      </div>

      {/* Feed */}
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
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>{post.timeAgo}</span>
                <MoreHorizontal size={18} color="#94A3B8" />
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

      <ConnectedBottomBar active="home" avatarUrl={AVATAR_ME} />
    </div>
  );
}
