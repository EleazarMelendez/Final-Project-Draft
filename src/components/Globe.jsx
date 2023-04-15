import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function GlobeApp() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 700 * 2,
      height: 700 * 2,
      phi: 4.56,
      theta: 6,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 96000,
      mapBrightness: 7.9,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [25.7617, -80.1918], size: .05 },

      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="moveup">
      <canvas
        ref={canvasRef}
        style={{ width: 700, height: 700, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
