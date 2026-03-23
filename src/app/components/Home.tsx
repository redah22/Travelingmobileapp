import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileFrame } from "./MobileFrame";
import { GuestFeedScreen } from "./GuestFeedScreen";
import { GuestItineraryScreen } from "./screens/GuestItineraryScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ConnectedFeedScreen } from "./screens/ConnectedFeedScreen";
import { PublishScreen } from "./screens/PublishScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ConnectedItineraryScreen } from "./screens/ConnectedItineraryScreen";

// ── Row section label ────────────────────────────────────────────────────────
function RowLabel({
  number,
  title,
  subtitle,
  badge,
  badgeColor,
  badgeBg,
}: {
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#1E5BF5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 900, color: "white" }}>{number}</span>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#1A1A2E",
                letterSpacing: -0.4,
                margin: 0,
              }}
            >
              {title}
            </h2>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: badgeColor,
                backgroundColor: badgeBg,
                padding: "3px 10px",
                borderRadius: 20,
              }}
            >
              {badge}
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#64748B", margin: "2px 0 0" }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function Home() {
  const navigate = useNavigate();
  const [showDevNav, setShowDevNav] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0F4FF",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          background: "linear-gradient(160deg, #0F0E1A 0%, #1A1A2E 40%, #1E3A8A 80%, #1E5BF5 100%)",
          padding: "60px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,91,245,0.3), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, position: "relative" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 18,
              background: "linear-gradient(135deg, #1E5BF5, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(30,91,245,0.4)",
            }}
          >
            <span style={{ fontSize: 26 }}>✈️</span>
          </div>
          <div>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "white",
                letterSpacing: -0.8,
                margin: 0,
                lineHeight: 1,
              }}
            >
              Traveling
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", margin: "4px 0 0" }}>
              Application mobile de voyage
            </p>
          </div>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.3,
            margin: "0 0 12px",
            maxWidth: 520,
            position: "relative",
          }}
        >
          Deux expériences,{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            un seul voyage
          </span>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 500,
            lineHeight: 1.6,
            margin: "0 0 28px",
            position: "relative",
          }}
        >
          Découvrez les maquettes UI complètes de Traveling — une rangée pour le
          parcours invité (lecture), une rangée pour le parcours connecté (mode complet).
          Cliquez sur chaque écran pour l'agrandir.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "relative" }}>
          {["React", "React Router", "Mobile-first", "Glassmorphism", "IA intégrée"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "4px 12px",
                borderRadius: 20,
                backdropFilter: "blur(6px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: "48px 40px 60px", maxWidth: 1400, margin: "0 auto" }}>

        {/* ────── ROW 1 : GUEST FLOW ────── */}
        <RowLabel
          number="1"
          title="Parcours Invité — Mode Découverte"
          subtitle="Consultation lecture seule · Bannière CTA · Interaction désactivée"
          badge="Non connecté"
          badgeColor="#64748B"
          badgeBg="#E2E8F0"
        />

        {/* Guest flow description chips */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {[
            { label: "Flux en lecture seule", color: "#64748B", bg: "#F1F5F9" },
            { label: "Boutons grisés", color: "#64748B", bg: "#F1F5F9" },
            { label: "Bannière connexion", color: "#1E5BF5", bg: "#EEF3FF" },
            { label: "Aperçu itinéraire verrouillé", color: "#FF6B35", bg: "#FFF3EE" },
            { label: "Login email / Google / Apple", color: "#10B981", bg: "#ECFDF5" },
          ].map(({ label, color, bg }) => (
            <span
              key={label}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color,
                backgroundColor: bg,
                padding: "4px 12px",
                borderRadius: 20,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Guest frames row */}
        <div
          style={{
            display: "flex",
            gap: 32,
            overflowX: "auto",
            paddingBottom: 24,
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E1 transparent",
          }}
        >
          <MobileFrame title="Flux de photos (invité)" stepNumber={1}>
            <GuestFeedScreen />
          </MobileFrame>

          <MobileFrame title="Planificateur TravelPath" stepNumber={2}>
            <GuestItineraryScreen />
          </MobileFrame>

          <MobileFrame title="Connexion / Inscription" stepNumber={3}>
            <LoginScreen />
          </MobileFrame>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(to right, transparent, #CBD5E1, transparent)",
            margin: "48px 0",
          }}
        />

        {/* ────── ROW 2 : CONNECTED FLOW ────── */}
        <RowLabel
          number="2"
          title="Parcours Connecté — Mode Complet"
          subtitle="Interactions actives · Publication · Profil & Groupes · Itinéraire GPS"
          badge="Connecté ●"
          badgeColor="#10B981"
          badgeBg="#ECFDF5"
        />

        {/* Connected flow description chips */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {[
            { label: "Like / Commentaire actifs", color: "#EC4899", bg: "#FDF2F8" },
            { label: "S'abonner à un voyage", color: "#1E5BF5", bg: "#EEF3FF" },
            { label: "Bouton Y aller GPS", color: "#FF6B35", bg: "#FFF3EE" },
            { label: "Publication + Annotation", color: "#7C3AED", bg: "#F5F3FF" },
            { label: "Profil & Groupes privés", color: "#10B981", bg: "#ECFDF5" },
            { label: "Itinéraire carte + PDF", color: "#1E5BF5", bg: "#EEF3FF" },
          ].map(({ label, color, bg }) => (
            <span
              key={label}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color,
                backgroundColor: bg,
                padding: "4px 12px",
                borderRadius: 20,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Connected frames row */}
        <div
          style={{
            display: "flex",
            gap: 32,
            overflowX: "auto",
            paddingBottom: 24,
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E1 transparent",
          }}
        >
          <MobileFrame title="Flux interactif (connecté)" stepNumber={1}>
            <ConnectedFeedScreen />
          </MobileFrame>

          <MobileFrame title="Publication & Annotation IA" stepNumber={2}>
            <PublishScreen />
          </MobileFrame>

          <MobileFrame title="Profil & Groupes privés" stepNumber={3}>
            <ProfileScreen />
          </MobileFrame>

          <MobileFrame title="Itinéraire GPS + Export PDF" stepNumber={4}>
            <ConnectedItineraryScreen />
          </MobileFrame>
        </div>

        {/* ── Comparison table ── */}
        <div
          style={{
            marginTop: 56,
            backgroundColor: "white",
            borderRadius: 24,
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: 20,
              letterSpacing: -0.3,
            }}
          >
            Comparaison des deux expériences
          </h3>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#64748B",
                      borderBottom: "2px solid #F1F5F9",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    Fonctionnalité
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "10px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#64748B",
                      borderBottom: "2px solid #F1F5F9",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    Invité
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "10px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#1E5BF5",
                      borderBottom: "2px solid #F1F5F9",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      backgroundColor: "#F7F9FF",
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    Connecté ✦
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Consulter le flux de photos", "✓", "✓"],
                  ["Rechercher & filtrer", "✓", "✓"],
                  ["Générer un itinéraire", "Aperçu", "✓ Complet"],
                  ["Liker une publication", "✗", "✓"],
                  ["Commenter une publication", "✗", "✓"],
                  ["Suivre un voyageur", "✗", "✓"],
                  ["Publier une photo", "✗", "✓"],
                  ["Annoter (Texte + IA)", "✗", "✓"],
                  ["Y aller (GPS)", "✗", "✓"],
                  ["Profil personnel", "✗", "✓"],
                  ["Créer des groupes privés", "✗", "✓"],
                  ["Exporter itinéraire PDF", "✗", "✓"],
                ].map(([feature, guest, connected], i) => (
                  <tr
                    key={i}
                    style={{ backgroundColor: i % 2 === 0 ? "white" : "#F7F9FF" }}
                  >
                    <td
                      style={{
                        padding: "10px 16px",
                        fontSize: 13,
                        color: "#374151",
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "10px 16px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: guest === "✗" ? "#CBD5E1" : guest === "✓" ? "#10B981" : "#FF6B35",
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      {guest}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "10px 16px",
                        fontSize: 13,
                        fontWeight: 700,
                        color: connected.startsWith("✓") ? "#10B981" : "#CBD5E1",
                        borderBottom: "1px solid #F1F5F9",
                        backgroundColor: "#F7F9FF",
                      }}
                    >
                      {connected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Dev nav (collapsible) ── */}
        <div style={{ marginTop: 48 }}>
          <button
            onClick={() => setShowDevNav(!showDevNav)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              backgroundColor: "white",
              border: "1.5px solid #E2E8F0",
              borderRadius: 12,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              color: "#64748B",
            }}
          >
            <span>{showDevNav ? "▲" : "▼"}</span> Navigation développeur (routes actives)
          </button>

          {showDevNav && (
            <div
              style={{
                marginTop: 12,
                backgroundColor: "white",
                borderRadius: 16,
                padding: "20px",
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {[
                { label: "TravelShare (route)", path: "/travel-share", color: "#1E5BF5" },
                { label: "TravelPath (route)", path: "/travel-path", color: "#7C3AED" },
                { label: "Itinéraire (route)", path: "/itinerary", color: "#FF6B35" },
              ].map(({ label, path, color }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  style={{
                    padding: "10px 18px",
                    backgroundColor: `${color}12`,
                    border: `1.5px solid ${color}30`,
                    borderRadius: 12,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    color,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: "#1E5BF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 14 }}>✈</span>
            </div>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#1A1A2E" }}>Traveling</span>
          </div>
          <p style={{ fontSize: 12, color: "#94A3B8" }}>
            Application mobile de voyage · React + React Router · 2026
          </p>
        </div>
      </div>
    </div>
  );
}
