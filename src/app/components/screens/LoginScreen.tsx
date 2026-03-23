import { Mail, Lock, Eye, Camera, Heart, Users, ArrowLeft } from "lucide-react";
import { StatusBar } from "./SharedComponents";

export function LoginScreen() {
  return (
    <div
      style={{
        width: 375,
        height: 812,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Gradient background top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 320,
          background: "linear-gradient(160deg, #1A1A2E 0%, #1E5BF5 60%, #7C3AED 100%)",
        }}
      />

      {/* Wave separator */}
      <div
        style={{
          position: "absolute",
          top: 290,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 375 60" style={{ width: 375, height: 60, display: "block" }}>
          <path d="M0,30 Q93.75,0 187.5,30 Q281.25,60 375,30 L375,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* Top content */}
      <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
        <StatusBar light />

        {/* Back */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 20px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={18} color="rgba(255,255,255,0.7)" />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Retour</span>
        </button>

        {/* Hero */}
        <div style={{ padding: "10px 24px 0", textAlign: "center" }}>
          <div
            style={{
              width: 60,
              height: 60,
              backgroundColor: "rgba(255,255,255,0.18)",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span style={{ fontSize: 28 }}>✈️</span>
          </div>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 900,
              color: "white",
              letterSpacing: -0.5,
              margin: "0 0 6px",
            }}
          >
            Traveling
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Votre communauté de voyageurs
          </p>
        </div>
      </div>

      {/* White form section */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          backgroundColor: "white",
          marginTop: 100,
          overflowY: "auto",
          padding: "24px 24px 24px",
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#1A1A2E",
            marginBottom: 4,
            letterSpacing: -0.3,
          }}
        >
          Bienvenue ! 👋
        </h2>
        <p style={{ fontSize: 13, color: "#64748B", marginBottom: 22 }}>
          Connectez-vous pour partager vos aventures
        </p>

        {/* Email field */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#64748B", display: "block", marginBottom: 6 }}>
            Adresse email
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 14,
              border: "1.5px solid #E2E8F0",
              backgroundColor: "#F7F9FF",
            }}
          >
            <Mail size={16} color="#1E5BF5" />
            <span style={{ fontSize: 14, color: "#94A3B8" }}>exemple@email.com</span>
          </div>
        </div>

        {/* Password field */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#64748B", display: "block", marginBottom: 6 }}>
            Mot de passe
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 14,
              border: "1.5px solid #E2E8F0",
              backgroundColor: "#F7F9FF",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Lock size={16} color="#1E5BF5" />
              <span style={{ fontSize: 14, color: "#94A3B8", letterSpacing: 3 }}>••••••••</span>
            </div>
            <Eye size={16} color="#94A3B8" />
          </div>
          <div style={{ textAlign: "right", marginTop: 6 }}>
            <span style={{ fontSize: 12, color: "#1E5BF5", fontWeight: 600 }}>
              Mot de passe oublié ?
            </span>
          </div>
        </div>

        {/* Login button */}
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
            Se connecter
          </span>
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div style={{ flex: 1, height: 1, backgroundColor: "#E2E8F0" }} />
          <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>ou continuer avec</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#E2E8F0" }} />
        </div>

        {/* OAuth buttons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          {/* Google */}
          <button
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px",
              border: "1.5px solid #E2E8F0",
              borderRadius: 14,
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A2E" }}>Google</span>
          </button>

          {/* Apple */}
          <button
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px",
              border: "none",
              borderRadius: 14,
              backgroundColor: "#1A1A2E",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
              <path d="M13.178 9.567c-.022-2.295 1.874-3.408 1.96-3.463-1.07-1.562-2.73-1.775-3.32-1.797-1.412-.143-2.764.832-3.479.832-.714 0-1.818-.813-2.986-.792-1.527.022-2.942.888-3.73 2.254C.24 9.204.924 13.08 2.816 15.25c.944 1.053 2.067 2.245 3.535 2.195 1.415-.053 1.951-.908 3.664-.908 1.713 0 2.196.908 3.685.878 1.524-.025 2.485-1.076 3.42-2.133.943-1.062 1.33-2.1 1.354-2.153-.03-.013-2.596-.995-2.619-3.562h-.677z"/>
              <path d="M10.88 2.797c.782-.95 1.31-2.265 1.167-3.58-1.129.046-2.495.75-3.308 1.7-.725.833-1.36 2.18-1.193 3.462 1.26.098 2.545-.639 3.334-1.582z"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>Apple</span>
          </button>
        </div>

        {/* Benefits */}
        <div
          style={{
            backgroundColor: "#F7F9FF",
            borderRadius: 16,
            padding: "14px 16px",
            marginBottom: 18,
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, color: "#64748B", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Avec un compte gratuit
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {[
              { icon: Camera, label: "Publiez vos photos", color: "#1E5BF5" },
              { icon: Heart, label: "Likez & commentez", color: "#EC4899" },
              { icon: Users, label: "Créez des groupes", color: "#10B981" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 14,
                    backgroundColor: `${color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color={color} />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#64748B",
                    textAlign: "center",
                    maxWidth: 70,
                    lineHeight: 1.3,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Register link */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 13, color: "#64748B" }}>Pas encore de compte ? </span>
          <span style={{ fontSize: 13, color: "#1E5BF5", fontWeight: 700 }}>S'inscrire →</span>
        </div>
      </div>
    </div>
  );
}
