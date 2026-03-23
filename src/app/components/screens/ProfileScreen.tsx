import { useState } from "react";
import { Settings, Grid3x3, Map, Users, Plus, ChevronRight, UserCheck } from "lucide-react";
import { ConnectedBottomBar } from "./SharedComponents";

const AVATAR_ME = "https://images.unsplash.com/photo-1699811250804-f240e347c831?w=200&q=80";
const COVER_IMAGE = "https://images.unsplash.com/photo-1578754068182-91ea7ae12471?w=400&q=80";

const GRID_PHOTOS = [
  "https://images.unsplash.com/photo-1656677476420-7159cac2366a?w=200&q=70",
  "https://images.unsplash.com/photo-1592561849308-3ab187d49881?w=200&q=70",
  "https://images.unsplash.com/photo-1681834418277-b01c30279693?w=200&q=70",
  "https://images.unsplash.com/photo-1761143084964-76da41b39460?w=200&q=70",
  "https://images.unsplash.com/photo-1727640567364-b1f039352132?w=200&q=70",
  "https://images.unsplash.com/photo-1492693859998-63ccf2ddafd2?w=200&q=70",
  "https://images.unsplash.com/photo-1653670477141-0a91c4f09408?w=200&q=70",
  "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=200&q=70",
  "https://images.unsplash.com/photo-1626946548234-a65fd193db41?w=200&q=70",
];

const GROUPS = [
  {
    id: 1,
    name: "Aventuriers Asie 🏯",
    members: 12,
    lastActivity: "Il y a 2h",
    color: "#1E5BF5",
  },
  {
    id: 2,
    name: "Road Trip Europe 🚗",
    members: 6,
    lastActivity: "Hier",
    color: "#7C3AED",
  },
  {
    id: 3,
    name: "Famille Voyage 2026",
    members: 4,
    lastActivity: "Il y a 3j",
    color: "#FF6B35",
  },
];

const ITINERARIES = [
  { id: 1, title: "Kyoto 5 jours", stops: 12, date: "Mars 2026", flag: "🇯🇵" },
  { id: 2, title: "Santorini Sunset", stops: 6, date: "Fév. 2026", flag: "🇬🇷" },
  { id: 3, title: "Marrakech Express", stops: 8, date: "Jan. 2026", flag: "🇲🇦" },
];

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<"posts" | "itineraries" | "groups">("posts");

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
      {/* Cover photo area */}
      <div style={{ position: "relative", height: 150, flexShrink: 0 }}>
        <img
          src={COVER_IMAGE}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
          }}
        />

        {/* Status bar overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px 4px",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>9:41</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
              <rect x="0" y="7" width="2.5" height="4" rx="0.5" />
              <rect x="4" y="4.5" width="2.5" height="6.5" rx="0.5" />
              <rect x="8" y="2" width="2.5" height="9" rx="0.5" />
              <rect x="12" y="0" width="2.5" height="11" rx="0.5" opacity="0.35" />
            </svg>
            <div style={{ width: 22, height: 11, border: "1.5px solid white", borderRadius: 3, position: "relative" }}>
              <div style={{ position: "absolute", left: 1, top: 1, width: "72%", height: "calc(100% - 2px)", backgroundColor: "white", borderRadius: 1 }} />
              <div style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)", width: 2.5, height: 5, backgroundColor: "white", borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Settings button */}
        <button
          style={{
            position: "absolute",
            top: 50,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Settings size={16} color="white" />
        </button>
      </div>

      {/* Profile info */}
      <div
        style={{
          backgroundColor: "white",
          padding: "0 16px 16px",
          flexShrink: 0,
        }}
      >
        {/* Avatar (overlapping cover) */}
        <div style={{ marginTop: -36, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "3.5px solid white",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={AVATAR_ME}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <button
            style={{
              padding: "8px 18px",
              border: "2px solid #1E5BF5",
              borderRadius: 12,
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Settings size={13} color="#1E5BF5" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1E5BF5" }}>
              Modifier
            </span>
          </button>
        </div>

        {/* Name + username */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <p style={{ fontSize: 18, fontWeight: 800, color: "#1A1A2E", margin: 0 }}>
              Camille Explore
            </p>
            <UserCheck size={16} color="#1E5BF5" />
          </div>
          <p style={{ fontSize: 13, color: "#64748B", margin: "2px 0 0" }}>@camille_explore</p>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.4, margin: "0 0 12px" }}>
          Passionnée de voyages 🌍 · 28 pays visités
          <br />
          📸 Photos & itinéraires sur mesure
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 0,
            backgroundColor: "#F7F9FF",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {[
            { label: "Publications", value: "124" },
            { label: "Abonnés", value: "4.2k" },
            { label: "Abonnements", value: "387" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                padding: "10px 4px",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#1A1A2E",
                  margin: "0 0 2px",
                }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: 10, color: "#64748B", margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          borderBottom: "2px solid #F1F5F9",
          flexShrink: 0,
        }}
      >
        {[
          { id: "posts", icon: Grid3x3, label: "Posts" },
          { id: "itineraries", icon: Map, label: "Itinéraires" },
          { id: "groups", icon: Users, label: "Groupes" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as typeof activeTab)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "10px 8px",
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
              borderBottom: activeTab === id ? "2.5px solid #1E5BF5" : "2.5px solid transparent",
              marginBottom: -2,
            }}
          >
            <Icon size={18} color={activeTab === id ? "#1E5BF5" : "#94A3B8"} />
            <span
              style={{
                fontSize: 11,
                fontWeight: activeTab === id ? 700 : 400,
                color: activeTab === id ? "#1E5BF5" : "#94A3B8",
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {activeTab === "posts" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {GRID_PHOTOS.map((photo, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: "1",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={photo}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {i === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      backgroundColor: "#FF6B35",
                      borderRadius: 6,
                      padding: "2px 5px",
                    }}
                  >
                    <span style={{ fontSize: 9, fontWeight: 700, color: "white" }}>NEW</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "itineraries" && (
          <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            {ITINERARIES.map((it) => (
              <div
                key={it.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: 16,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      backgroundColor: "#EEF3FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    {it.flag}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E", margin: 0 }}>
                      {it.title}
                    </p>
                    <p style={{ fontSize: 11, color: "#94A3B8", margin: "3px 0 0" }}>
                      {it.stops} arrêts · {it.date}
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} color="#C4C9D4" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "groups" && (
          <div style={{ padding: "12px 14px" }}>
            {/* Create group button */}
            <button
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "13px",
                border: "2px dashed #CBD5E1",
                borderRadius: 16,
                backgroundColor: "transparent",
                cursor: "pointer",
                marginBottom: 12,
              }}
            >
              <Plus size={16} color="#1E5BF5" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1E5BF5" }}>
                Créer un nouveau groupe
              </span>
            </button>

            {GROUPS.map((group) => (
              <div
                key={group.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: 16,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      backgroundColor: `${group.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Users size={20} color={group.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E", margin: 0 }}>
                      {group.name}
                    </p>
                    <p style={{ fontSize: 11, color: "#94A3B8", margin: "3px 0 0" }}>
                      {group.members} membres · {group.lastActivity}
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} color="#C4C9D4" />
              </div>
            ))}
          </div>
        )}

        <div style={{ height: 8 }} />
      </div>

      <ConnectedBottomBar active="profile" avatarUrl={AVATAR_ME} />
    </div>
  );
}
