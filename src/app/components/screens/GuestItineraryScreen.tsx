import { useState } from "react";
import { MapPin, Sun, Cloud, CloudRain, Lock, ChevronRight, Navigation } from "lucide-react";
import { StatusBar, GuestBottomBar } from "./SharedComponents";

export function GuestItineraryScreen() {
  const [destination, setDestination] = useState("Kyoto, Japon");
  const [budget, setBudget] = useState(68); // percentage 0-100
  const [weather, setWeather] = useState<"sun" | "cloud" | "rain">("sun");

  const budgetValue = Math.round(500 + (budget / 100) * 4500);

  const sampleStops = [
    { time: "09:00", title: "Temple Fushimi Inari", tag: "Culture" },
    { time: "13:00", title: "Déjeuner Gion District", tag: "Gastronomie" },
    { time: "16:00", title: "Parc Maruyama", tag: "Nature" },
  ];

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
          padding: "10px 20px 14px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #7C3AED, #1E5BF5)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Navigation size={18} color="white" />
          </div>
          <div>
            <p style={{ fontSize: 17, fontWeight: 800, color: "#1A1A2E", letterSpacing: -0.3 }}>
              TravelPath
            </p>
            <p style={{ fontSize: 11, color: "#94A3B8" }}>Planifiez votre aventure</p>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px" }}>

        {/* Form card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: "18px 16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            marginBottom: 14,
          }}
        >
          {/* Destination */}
          <p style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Destination
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#F7F9FF",
              borderRadius: 12,
              padding: "10px 14px",
              border: "1.5px solid #EEF3FF",
              marginBottom: 18,
            }}
          >
            <MapPin size={16} color="#1E5BF5" />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                flex: 1,
                fontSize: 14,
                fontWeight: 600,
                color: "#1A1A2E",
                background: "none",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          {/* Budget slider */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
                Budget
              </p>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#1E5BF5" }}>
                {budgetValue.toLocaleString("fr")} €
              </span>
            </div>
            <div
              style={{
                position: "relative",
                height: 6,
                backgroundColor: "#EEF3FF",
                borderRadius: 10,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${budget}%`,
                  background: "linear-gradient(to right, #1E5BF5, #7C3AED)",
                  borderRadius: 10,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: `${budget}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 18,
                  height: 18,
                  backgroundColor: "white",
                  border: "3px solid #1E5BF5",
                  borderRadius: "50%",
                  boxShadow: "0 2px 6px rgba(30,91,245,0.3)",
                }}
              />
              <input
                type="range"
                min={0}
                max={100}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0,
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>500 €</span>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>5 000 €</span>
            </div>
          </div>

          {/* Weather */}
          <p style={{ fontSize: 12, fontWeight: 700, color: "#64748B", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Météo souhaitée
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { id: "sun", icon: Sun, label: "Ensoleillé", color: "#F59E0B" },
              { id: "cloud", icon: Cloud, label: "Nuageux", color: "#64748B" },
              { id: "rain", icon: CloudRain, label: "Pluvieux", color: "#3B82F6" },
            ].map(({ id, icon: Icon, label, color }) => (
              <button
                key={id}
                onClick={() => setWeather(id as typeof weather)}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  padding: "12px 8px",
                  borderRadius: 14,
                  border: `2px solid ${weather === id ? "#1E5BF5" : "#F1F5F9"}`,
                  backgroundColor: weather === id ? "#EEF3FF" : "#F7F9FF",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <Icon size={22} color={weather === id ? "#1E5BF5" : color} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: weather === id ? 700 : 400,
                    color: weather === id ? "#1E5BF5" : "#64748B",
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            marginBottom: 16,
            boxShadow: "0 4px 14px rgba(30,91,245,0.35)",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>
            ✨ Générer mon itinéraire
          </span>
        </button>

        {/* Preview card - locked */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              padding: "14px 16px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#1A1A2E" }}>
                Exemple de parcours
              </p>
              <p style={{ fontSize: 11, color: "#94A3B8" }}>Kyoto · 3 arrêts · 1 journée</p>
            </div>
            <div
              style={{
                backgroundColor: "#FFF3EE",
                padding: "5px 10px",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Lock size={10} color="#FF6B35" />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#FF6B35" }}>Aperçu</span>
            </div>
          </div>

          {/* Blurred stops */}
          <div style={{ padding: "0 16px 14px", filter: "blur(0px)" }}>
            {sampleStops.map((stop, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: i < sampleStops.length - 1 ? "1px solid #F7F9FF" : "none",
                  opacity: i === 0 ? 1 : i === 1 ? 0.6 : 0.3,
                  filter: i > 0 ? "blur(2px)" : "none",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    backgroundColor: "#EEF3FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#1E5BF5" }}>
                    {stop.time}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1A2E" }}>{stop.title}</p>
                  <span
                    style={{
                      fontSize: 10,
                      color: "#1E5BF5",
                      backgroundColor: "#EEF3FF",
                      padding: "2px 7px",
                      borderRadius: 6,
                      fontWeight: 600,
                    }}
                  >
                    {stop.tag}
                  </span>
                </div>
                <ChevronRight size={14} color="#C4C9D4" />
              </div>
            ))}
          </div>

          {/* CTA unlock */}
          <div
            style={{
              backgroundColor: "#F7F9FF",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 12, color: "#64748B" }}>
              Connectez-vous pour voir l'itinéraire complet
            </p>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "#1E5BF5",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>Accéder</span>
            </button>
          </div>
        </div>
      </div>

      <GuestBottomBar active="itinerary" />
    </div>
  );
}
