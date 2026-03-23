import { useState } from "react";
import { MapPin, X, ChevronDown, Type, Tag, Globe, Users, Lock, Sparkles, Mic } from "lucide-react";
import { StatusBar } from "./SharedComponents";

const PUBLISH_IMAGE = "https://images.unsplash.com/photo-1681834418277-b01c30279693?w=400&q=80";
const AVATAR_ME = "https://images.unsplash.com/photo-1699811250804-f240e347c831?w=80&q=80";

export function PublishScreen() {
  const [caption, setCaption] = useState(
    "Les aurores boréales en Islande, un moment magique que je n'oublierai jamais ✨🌌"
  );
  const [activeAnnotation, setActiveAnnotation] = useState<"text" | "audio" | "ai" | null>("text");
  const [visibility, setVisibility] = useState<"public" | "friends" | "private">("public");
  const tags = ["#islande", "#auroreboreale", "#voyage", "#nature"];

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
          padding: "4px 16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #F1F5F9",
          flexShrink: 0,
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <X size={20} color="#64748B" />
          <span style={{ fontSize: 14, color: "#64748B" }}>Annuler</span>
        </button>
        <span style={{ fontSize: 16, fontWeight: 800, color: "#1A1A2E" }}>
          Nouvelle publication
        </span>
        <button
          style={{
            padding: "8px 16px",
            background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(30,91,245,0.3)",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Partager</span>
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto" }}>

        {/* Photo + caption row */}
        <div
          style={{
            backgroundColor: "white",
            padding: "14px 16px",
            display: "flex",
            gap: 12,
            borderBottom: "6px solid #F7F9FF",
          }}
        >
          {/* Thumbnail */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <img
              src={PUBLISH_IMAGE}
              alt=""
              style={{
                width: 90,
                height: 90,
                objectFit: "cover",
                borderRadius: 14,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -6,
                right: -6,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "#1E5BF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid white",
              }}
            >
              <span style={{ fontSize: 12, color: "white", fontWeight: 700 }}>1</span>
            </div>
          </div>

          {/* Caption input */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <img
                src={AVATAR_ME}
                alt=""
                style={{ width: 26, height: 26, borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>
                @camille_explore
              </span>
            </div>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={3}
              style={{
                width: "100%",
                fontSize: 13,
                color: "#1A1A2E",
                border: "none",
                outline: "none",
                resize: "none",
                backgroundColor: "transparent",
                lineHeight: 1.5,
              }}
            />
            <span style={{ fontSize: 11, color: "#94A3B8" }}>
              {caption.length}/2200
            </span>
          </div>
        </div>

        {/* Full photo preview */}
        <div style={{ position: "relative" }}>
          <img
            src={PUBLISH_IMAGE}
            alt=""
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)",
            }}
          />

          {/* Annotation tools overlay */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {[
              { id: "text", icon: Type, label: "Texte" },
              { id: "audio", icon: Mic, label: "Audio" },
              { id: "ai", icon: Sparkles, label: "IA" },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveAnnotation(id as typeof activeAnnotation)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor:
                    activeAnnotation === id
                      ? "#1E5BF5"
                      : "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <Icon
                  size={15}
                  color={activeAnnotation === id ? "white" : "#1A1A2E"}
                />
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    color: activeAnnotation === id ? "white" : "#1A1A2E",
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* AI suggestion chip */}
          {activeAnnotation === "ai" && (
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                right: 60,
                backgroundColor: "rgba(124,58,237,0.9)",
                borderRadius: 12,
                padding: "8px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 600, color: "white", margin: "0 0 4px" }}>
                ✨ Suggestion IA
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.4 }}>
                "Islande, 21 mars 2026 — Aurore boréale 
                au-dessus du lac Þingvallavatn"
              </p>
            </div>
          )}
        </div>

        {/* Location */}
        <div
          style={{
            backgroundColor: "white",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #F7F9FF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#FFF3EE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MapPin size={18} color="#FF6B35" />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E", margin: 0 }}>
                Islande du Sud
              </p>
              <p style={{ fontSize: 11, color: "#94A3B8", margin: 0 }}>
                📍 63.8589° N, 18.6356° O
              </p>
            </div>
          </div>
          <ChevronDown size={16} color="#94A3B8" />
        </div>

        {/* Tags */}
        <div
          style={{
            backgroundColor: "white",
            padding: "14px 16px",
            borderBottom: "1px solid #F7F9FF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <Tag size={16} color="#1E5BF5" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>
              Tags & Hashtags
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#EEF3FF",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1E5BF5",
                }}
              >
                {tag}
              </span>
            ))}
            <span
              style={{
                padding: "5px 10px",
                backgroundColor: "#F7F9FF",
                borderRadius: 20,
                fontSize: 12,
                color: "#94A3B8",
                border: "1px dashed #CBD5E1",
              }}
            >
              + Ajouter
            </span>
          </div>
        </div>

        {/* Visibility */}
        <div
          style={{
            backgroundColor: "white",
            padding: "14px 16px",
            borderBottom: "1px solid #F7F9FF",
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>
            Visibilité
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { id: "public", icon: Globe, label: "Public" },
              { id: "friends", icon: Users, label: "Amis" },
              { id: "private", icon: Lock, label: "Privé" },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setVisibility(id as typeof visibility)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px 8px",
                  borderRadius: 12,
                  border: `2px solid ${visibility === id ? "#1E5BF5" : "#F1F5F9"}`,
                  backgroundColor: visibility === id ? "#EEF3FF" : "#F7F9FF",
                  cursor: "pointer",
                }}
              >
                <Icon size={14} color={visibility === id ? "#1E5BF5" : "#94A3B8"} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: visibility === id ? 700 : 400,
                    color: visibility === id ? "#1E5BF5" : "#64748B",
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Share button */}
        <div style={{ padding: "16px" }}>
          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
              borderRadius: 16,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(30,91,245,0.4)",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>
              🚀 Partager avec la communauté
            </span>
          </button>
        </div>

        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}
