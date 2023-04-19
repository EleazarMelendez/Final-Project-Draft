import React, { useRef } from 'react';

export default function CountryButtons({focusRef}) {
  const locationToAngles = (lat, long) => {return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];};

  return (
    <div className="btn-cont">
      <div className="typing-demo">
    <span>Select a country:</span>
      </div>
      <div className="btn-cont">
   
        <a 
        class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-34.6037, -58.3816) }}>
          Argentina
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-16.4897, -68.1193) }}>
          Bolivia
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-33.4489, -70.6693) }}>
          Chile
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-4.7110, -74.0721) }}>
          Colombia
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(9.9281, -84.0907) }}>
          Costa Rica
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(23.1136, -82.3666) }}>
          Cuba
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(18.4861, -69.9312) }}>
          Dominican Republic
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-0.1807, -78.4678) }}>
          Ecuador
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <a class="btn" href="#" onClick={() => { focusRef.current = locationToAngles(13.6929, -89.2182) }}>
          El Salvador
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(14.6349, -90.5069) }}>
          Guatemala
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(14.0650, -87.1715) }}>
          Honduras
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(19.4326, -99.1332) }}>
          Mexico
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(12.1150, -86.2362) }}>
          Nicaragua
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(8.9943, -79.5188) }}>
          Panama
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-12.0464, -77.0428) }}>
          Peru
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(18.4671, -66.1185) }}>
          Puerto Rico
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(-34.9055, -56.185) }}>
          Uruguay
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>

        <a className="btn" href="#" onClick={() => { focusRef.current = locationToAngles(10.4806, -66.9036) }}>
          Venezuela
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>
      </div>
    </div>
  );
}
