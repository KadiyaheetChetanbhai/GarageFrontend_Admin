import React from "react";

export function RingLoader({
  size = 23.4,
  width = 23.4,
  height = 23.4,
  containerHeight,
}) {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: containerHeight ? `${containerHeight}px` : undefined,
      }}
    >
      <svg
        width={`${size || width}px`}
        height={`${size || height}px`}
        stroke="#000"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transformOrigin: "center",
          animation: "spinner_zKoa 2s linear infinite",
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            animation: "spinner_YpZS 1.5s ease-in-out infinite",
          }}
        />
        <style>{`
        @keyframes spinner_zKoa {
          100% { transform: rotate(360deg); }
        }
        @keyframes spinner_YpZS {
          0% { stroke-dasharray: 0 150; stroke-dashoffset: 0; }
          47.5% { stroke-dasharray: 42 150; stroke-dashoffset: -16; }
          95%, 100% { stroke-dasharray: 42 150; stroke-dashoffset: -59; }
        }
      `}</style>
      </svg>
    </div>
  );
}
