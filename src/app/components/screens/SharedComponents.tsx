import { Map, UserPlus, Search, Bell, User } from "lucide-react";

export function StatusBar({ light = false, bg = "transparent" }: { light?: boolean; bg?: string }) {
  const color = light ? "white" : "#1A1A2E";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px 4px",
        backgroundColor: bg,
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 700, color }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <svg width="16" height="11" viewBox="0 0 16 11" fill={color}>
          <rect x="0" y="7" width="2.5" height="4" rx="0.5" />
          <rect x="4" y="4.5" width="2.5" height="6.5" rx="0.5" />
          <rect x="8" y="2" width="2.5" height="9" rx="0.5" />
          <rect x="12" y="0" width="2.5" height="11" rx="0.5" opacity="0.35" />
        </svg>
        <div
          style={{
            width: 22,
            height: 11,
            border: `1.5px solid ${color}`,
            borderRadius: 3,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: "72%",
              height: "calc(100% - 2px)",
              backgroundColor: color,
              borderRadius: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -4,
              top: "50%",
              transform: "translateY(-50%)",
              width: 2.5,
              height: 5,
              backgroundColor: color,
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function GuestBottomBar({ active }: { active: "home" | "itinerary" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderTop: "1px solid #F1F5F9",
        height: 64,
        padding: "0 16px",
        flexShrink: 0,
      }}
    >
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            width: 22,
            height: 22,
            fill: active === "home" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span
          style={{
            fontSize: 10,
            fontWeight: active === "home" ? 600 : 400,
            color: active === "home" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Accueil
        </span>
      </button>

      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Map
          size={22}
          color={active === "itinerary" ? "#1E5BF5" : "#94A3B8"}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: active === "itinerary" ? 600 : 400,
            color: active === "itinerary" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Itinéraires
        </span>
      </button>

      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          backgroundColor: "#1E5BF5",
          padding: "8px 16px",
          borderRadius: 16,
          border: "none",
          cursor: "pointer",
        }}
      >
        <UserPlus size={18} color="white" />
        <span style={{ fontSize: 10, fontWeight: 600, color: "white" }}>
          Connexion
        </span>
      </button>
    </div>
  );
}

export function ConnectedBottomBar({
  active,
  avatarUrl,
}: {
  active: "home" | "search" | "publish" | "notifs" | "profile";
  avatarUrl?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderTop: "1px solid #F1F5F9",
        height: 64,
        padding: "0 8px",
        flexShrink: 0,
      }}
    >
      {/* Home */}
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            width: 22,
            height: 22,
            fill: active === "home" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span
          style={{
            fontSize: 9,
            fontWeight: active === "home" ? 600 : 400,
            color: active === "home" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Accueil
        </span>
      </button>

      {/* Search */}
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Search size={21} color={active === "search" ? "#1E5BF5" : "#94A3B8"} />
        <span
          style={{
            fontSize: 9,
            color: active === "search" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Explorer
        </span>
      </button>

      {/* FAB Publish */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
          borderRadius: "50%",
          boxShadow: "0 4px 14px rgba(30,91,245,0.45)",
          marginBottom: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 28,
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          +
        </span>
      </button>

      {/* Notifs */}
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          position: "relative",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Bell size={21} color={active === "notifs" ? "#1E5BF5" : "#94A3B8"} />
        <div
          style={{
            position: "absolute",
            top: -1,
            right: -1,
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "#FF6B35",
            border: "1.5px solid white",
          }}
        />
        <span
          style={{
            fontSize: 9,
            color: active === "notifs" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Notifs
        </span>
      </button>

      {/* Profile */}
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              objectFit: "cover",
              border: active === "profile" ? "2px solid #1E5BF5" : "2px solid #E2E8F0",
            }}
          />
        ) : (
          <User size={21} color={active === "profile" ? "#1E5BF5" : "#94A3B8"} />
        )}
        <span
          style={{
            fontSize: 9,
            fontWeight: active === "profile" ? 600 : 400,
            color: active === "profile" ? "#1E5BF5" : "#94A3B8",
          }}
        >
          Profil
        </span>
      </button>
    </div>
  );
}
