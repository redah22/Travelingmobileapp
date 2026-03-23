import { useState } from "react";
import { X } from "lucide-react";

interface MobileFrameProps {
  children: React.ReactNode;
  title: string;
  stepNumber?: number;
}

const SCALE = 240 / 375;

export function MobileFrame({ children, title, stepNumber }: MobileFrameProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        {stepNumber !== undefined && (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: "#1E5BF5", fontSize: 11, fontWeight: 700 }}
          >
            {stepNumber}
          </div>
        )}
        <button
          onClick={() => setExpanded(true)}
          className="focus:outline-none group"
          title="Cliquer pour agrandir"
        >
          <div
            className="relative bg-[#1A1A2E] shadow-2xl group-hover:scale-[1.02] transition-transform duration-200"
            style={{
              width: 260,
              height: 562,
              borderRadius: 44,
              padding: 10,
            }}
          >
            {/* Side buttons */}
            <div className="absolute" style={{ right: -3, top: 90, width: 3, height: 32, backgroundColor: "#111", borderRadius: "0 4px 4px 0" }} />
            <div className="absolute" style={{ left: -3, top: 78, width: 3, height: 24, backgroundColor: "#111", borderRadius: "4px 0 0 4px" }} />
            <div className="absolute" style={{ left: -3, top: 108, width: 3, height: 24, backgroundColor: "#111", borderRadius: "4px 0 0 4px" }} />

            {/* Screen area */}
            <div className="w-full h-full overflow-hidden bg-white relative" style={{ borderRadius: 35 }}>
              {/* Dynamic island */}
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#1A1A2E] z-30"
                style={{ width: 80, height: 20, borderRadius: 12 }}
              />
              {/* Scaled content */}
              <div style={{ width: 240, height: 542, overflow: "hidden" }}>
                <div
                  style={{
                    width: 375,
                    height: 812,
                    transform: `scale(${SCALE})`,
                    transformOrigin: "top left",
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
            {/* Home indicator */}
            <div
              className="absolute bg-white opacity-25 rounded-full"
              style={{ bottom: 14, left: "50%", transform: "translateX(-50%)", width: 60, height: 3 }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              style={{ borderRadius: 44, backgroundColor: "rgba(30, 91, 245, 0.08)" }}
            >
              <div className="bg-[#1E5BF5] text-white px-3 py-1.5 rounded-full" style={{ fontSize: 11, fontWeight: 600 }}>
                Agrandir
              </div>
            </div>
          </div>
        </button>
        <p className="text-center text-[#374151]" style={{ fontSize: 12, fontWeight: 600, maxWidth: 200 }}>
          {title}
        </p>
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setExpanded(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setExpanded(false)}
              className="absolute flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              style={{ top: -44, right: 0, fontSize: 14 }}
            >
              <span>Fermer</span>
              <X size={18} />
            </button>
            <div style={{ width: 375, height: 812, borderRadius: 44, overflow: "hidden" }} className="shadow-2xl">
              {children}
            </div>
            <p className="text-center text-gray-400 mt-3" style={{ fontSize: 13 }}>
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
