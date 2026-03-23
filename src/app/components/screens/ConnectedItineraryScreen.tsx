import { Navigation2, Clock, Download, Sun, CloudRain, Thermometer, ChevronLeft, Share2 } from "lucide-react";
import { ConnectedBottomBar } from "./SharedComponents";

interface Stop {
  id: number;
  time: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  tagColor: string;
}

const STOPS: Stop[] = [
  {
    id: 1,
    time: "09:00",
    title: "Palais Bahia",
    description: "Un chef-d'œuvre de l'architecture marocaine du XIXe siècle",
    duration: "2h",
    tag: "Culture",
    tagColor: "#1E5BF5",
  },
  {
    id: 2,
    time: "12:30",
    title: "Djemaa el-Fna",
    description: "La place des spectacles et déjeuner dans les souks",
    duration: "1h30",
    tag: "Gastronomie",
    tagColor: "#FF6B35",
  },
  {
    id: 3,
    time: "16:00",
    title: "Jardins Majorelle",
    description: "L'oasis bleue de Yves Saint Laurent au cœur de Marrakech",
    duration: "1h30",
    tag: "Nature",
    tagColor: "#10B981",
  },
];

export function ConnectedItineraryScreen() {
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
      {/* Map section */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        {/* Fake map SVG */}
        <svg
          viewBox="0 0 375 200"
          style={{ width: 375, height: 200, display: "block" }}
        >
          {/* Background */}
          <rect width="375" height="200" fill="#E8F0FE" />

          {/* Larger blocks (buildings/areas) */}
          <rect x="0" y="0" width="375" height="200" fill="#EDF2FB" />

          {/* Streets horizontal */}
          <rect x="0" y="40" width="375" height="10" fill="white" opacity="0.9" />
          <rect x="0" y="90" width="375" height="8" fill="white" opacity="0.8" />
          <rect x="0" y="140" width="375" height="7" fill="white" opacity="0.7" />
          <rect x="0" y="175" width="375" height="5" fill="white" opacity="0.6" />

          {/* Streets vertical */}
          <rect x="60" y="0" width="10" height="200" fill="white" opacity="0.9" />
          <rect x="150" y="0" width="8" height="200" fill="white" opacity="0.8" />
          <rect x="260" y="0" width="7" height="200" fill="white" opacity="0.7" />
          <rect x="320" y="0" width="5" height="200" fill="white" opacity="0.6" />

          {/* Building blocks */}
          <rect x="72" y="50" width="70" height="32" rx="4" fill="#C7D7F8" opacity="0.7" />
          <rect x="72" y="100" width="70" height="32" rx="4" fill="#C7D7F8" opacity="0.6" />
          <rect x="160" y="50" width="90" height="32" rx="4" fill="#C7D7F8" opacity="0.5" />
          <rect x="160" y="100" width="90" height="32" rx="4" fill="#C7D7F8" opacity="0.65" />
          <rect x="270" y="50" width="44" height="80" rx="4" fill="#C7D7F8" opacity="0.55" />
          <rect x="10" y="50" width="42" height="32" rx="4" fill="#C7D7F8" opacity="0.6" />
          <rect x="10" y="100" width="42" height="32" rx="4" fill="#C7D7F8" opacity="0.5" />

          {/* Green parks */}
          <rect x="72" y="150" width="70" height="40" rx="8" fill="#BBF7D0" opacity="0.8" />
          <rect x="160" y="150" width="50" height="40" rx="8" fill="#BBF7D0" opacity="0.6" />

          {/* Route dashed line */}
          <path
            d="M 65 45 L 155 45 L 155 95 L 265 95 L 265 145"
            stroke="#1E5BF5"
            strokeWidth="3.5"
            fill="none"
            strokeDasharray="10,5"
            strokeLinecap="round"
          />

          {/* Stop 1 marker */}
          <circle cx="65" cy="45" r="12" fill="#1E5BF5" />
          <circle cx="65" cy="45" r="8" fill="white" />
          <circle cx="65" cy="45" r="4" fill="#1E5BF5" />
          <text x="65" y="31" textAnchor="middle" fill="#1A1A2E" fontSize="10" fontWeight="700">09:00</text>

          {/* Stop 2 marker */}
          <circle cx="155" cy="95" r="12" fill="#FF6B35" />
          <circle cx="155" cy="95" r="8" fill="white" />
          <circle cx="155" cy="95" r="4" fill="#FF6B35" />
          <text x="155" y="81" textAnchor="middle" fill="#1A1A2E" fontSize="10" fontWeight="700">12:30</text>

          {/* Stop 3 marker */}
          <circle cx="265" cy="145" r="12" fill="#10B981" />
          <circle cx="265" cy="145" r="8" fill="white" />
          <circle cx="265" cy="145" r="4" fill="#10B981" />
          <text x="265" y="131" textAnchor="middle" fill="#1A1A2E" fontSize="10" fontWeight="700">16:00</text>

          {/* You are here */}
          <circle cx="65" cy="45" r="20" fill="#1E5BF5" opacity="0.12" />
        </svg>

        {/* Map overlay controls */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 16,
            right: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: "white",
              borderRadius: 10,
              padding: "6px 12px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <ChevronLeft size={14} color="#64748B" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#64748B" }}>Retour</span>
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              backgroundColor: "white",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Share2 size={16} color="#64748B" />
          </button>
        </div>
      </div>

      {/* Destination header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E, #1E5BF5)",
          padding: "14px 16px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <div>
            <p style={{ fontSize: 20, fontWeight: 900, color: "white", margin: "0 0 2px", letterSpacing: -0.3 }}>
              Marrakech 🇲🇦
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: 0 }}>
              Lundi 23 mars 2026 · 3 arrêts · ~5h
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 14,
              padding: "6px 12px",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: 0 }}>1 200 €</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", margin: 0 }}>Budget</p>
          </div>
        </div>

        {/* Weather + badges */}
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "5px 10px",
            }}
          >
            <Sun size={13} color="#FCD34D" />
            <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>28°C</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "5px 10px",
            }}
          >
            <Thermometer size={13} color="#93C5FD" />
            <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>Ensoleillé</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(16,185,129,0.25)",
              borderRadius: 20,
              padding: "5px 10px",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "#6EE7B7" }}>✓ Généré par IA</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#64748B", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: 0.5 }}>
          Programme de la journée
        </p>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 18,
              top: 10,
              bottom: 10,
              width: 2,
              background: "linear-gradient(to bottom, #1E5BF5, #FF6B35, #10B981)",
              borderRadius: 10,
            }}
          />

          {STOPS.map((stop, index) => (
            <div
              key={stop.id}
              style={{
                display: "flex",
                gap: 14,
                marginBottom: index < STOPS.length - 1 ? 14 : 0,
              }}
            >
              {/* Circle marker */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: stop.tagColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 2px 8px ${stop.tagColor}45`,
                  border: "3px solid white",
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: "white" }}>
                  {stop.id}
                </span>
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 16,
                  padding: "12px 14px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Clock size={12} color={stop.tagColor} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: stop.tagColor }}>
                      {stop.time}
                    </span>
                    <span style={{ fontSize: 11, color: "#94A3B8" }}>· {stop.duration}</span>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: stop.tagColor,
                      backgroundColor: `${stop.tagColor}15`,
                      padding: "2px 8px",
                      borderRadius: 6,
                    }}
                  >
                    {stop.tag}
                  </span>
                </div>

                <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E", margin: "0 0 4px" }}>
                  {stop.title}
                </p>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 10px", lineHeight: 1.4 }}>
                  {stop.description}
                </p>

                {/* Y aller button */}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    backgroundColor: "#FF6B35",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(255,107,53,0.35)",
                  }}
                >
                  <Navigation2 size={13} color="white" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>Y aller · GPS</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Export button */}
        <button
          style={{
            width: "100%",
            marginTop: 18,
            padding: "14px",
            background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            boxShadow: "0 4px 14px rgba(30,91,245,0.35)",
          }}
        >
          <Download size={17} color="white" />
          <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>
            Exporter en PDF
          </span>
        </button>

        <div style={{ height: 12 }} />
      </div>

      <ConnectedBottomBar active="home" />
    </div>
  );
}