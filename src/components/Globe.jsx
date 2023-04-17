import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function GlobeApp() 
{ const canvasRef = useRef() 
  const locationToAngles = (lat, long) => { return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180] } 
  const focusRef = useRef([0, 0]) 
  useEffect(() => { 
    let width = 0; 
    let phi = 0
    let currentPhi = phi += 5; 
    let currentTheta = 0; 
    const doublePi = Math.PI * 2; 
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth) 
    window.addEventListener('resize', onResize); 
    onResize(); 
   
    const globe = createGlobe(canvasRef.current, 
      { devicePixelRatio: 2, 
        width: width * 2, 
        height: width * 2, 
        phi: 4.56, 
        theta: 6,
        dark: 1, 
        diffuse: 1.2, 
        mapSamples: 96000, 
        mapBrightness: 7.9, 
        baseColor: [1, 1, 1], 
        markerColor: [114 / 255, 191 / 255, 229 / 255], 
        glowColor: [1.2, 1.2, 1.2], 
        markers: [ 
        { location: [-34.6037, -58.3816], size: 0.03}, 
        { location: [-16.4897, -68.1193], size: 0.03}, 
        { location: [-33.4489, -70.6693], size: 0.03}, 
        { location: [-4.7110, -74.0721], size: 0.03}, 
        { location: [9.9281, -84.0907], size: 0.03},
        { location: [23.1136, -82.3666], size: 0.03},
        { location: [18.4861, -69.9312], size: 0.03}, 
        { location: [0.1807, -78.4678], size: 0.03}, 
        { location: [13.6929, -89.2182], size: 0.03}, 
        { location: [14.6349, -90.5069], size: 0.03},
        { location: [14.0650, -87.1715], size: 0.03}, 
        { location: [19.4326, -99.1332], size: 0.03}, 
        { location: [12.1150, -86.2362], size: 0.03}, 
        { location: [30.1588, -85.6602], size: 0.03}, 
        { location: [-12.0464, -77.0428], size: 0.03},
        { location: [18.4671, -66.1185], size: 0.03}, 
        { location: [-34.9055, -56.185], size: 0.03}, 
        { location: [-10.4806, -66.9036], size: 0.03}, 
       ], 
        onRender: (state) => 
        { state.phi = currentPhi  
          state.theta = currentTheta 
          const [focusPhi, focusTheta] = focusRef.current 
          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi 
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi 
          if (distPositive < distNegative) { currentPhi += distPositive * 0.08 } 
          else { currentPhi -= distNegative * 0.08 } 
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08 
          state.width = width * 2 
          state.height = width * 2 } }) 
          
          setTimeout(() => canvasRef.current.style.opacity = '1') 
          
          return () => globe.destroy() }, []) 
          
          return (
          
          <div className="moveup" style={{ 
            width: '100%', 
          maxWidth: 950, 
          aspectRatio: 1,  
          position: 'relative', }}>

          <canvas ref={canvasRef} style={{ width: '100%', 
          height: '100%',
          contain: 'layout paint size', 
          opacity: 0, 
          transition: 'opacity 1s ease', }} /> 
          
          <div className="flex flex-col md:flex-row justify-center items-center control-buttons" style={{ gap: '.5rem' }}> 
          Rotate to: 
          <button onClick={() => { focusRef.current = locationToAngles(37.78, -122.412) }} />📍 San Francisco 
          <button onClick={() => { focusRef.current = locationToAngles(52.52, 13.405) }} />📍 Berlin 
          <button onClick={() => { focusRef.current = locationToAngles(35.676, 139.65) }} />📍 Tokyo 
          <button onClick={() => { focusRef.current = locationToAngles(-34.60, -58.38) }} />📍 Buenos Aires
          </div>
          </div>
 )
}
