import createGlobe from "cobe";
import { useEffect, useRef } from "react";


export default function SpinningGlobe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 300 * 2,
      height: 300 * 2,
      phi: 4.56,
      theta: 6,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 96000,
      mapBrightness: 7.9,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1.2, 1.2, 1.2],
      markers: [ ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.004;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="container-main">
      <canvas
        ref={canvasRef}
        style={{ width: 300, height: 300, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}