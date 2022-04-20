import React, {useRef, useState, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapBox.css'


mapboxgl.accessToken = 'pk.eyJ1Ijoia2FsZXJhbXBlbnRoYWwiLCJhIjoiY2wyN292a3drMDFqbjNlcGhyZ2w5MGp6dyJ9.OCieKLLc-7HCnF33BTEUwg';


const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-98.5);
  const [lat, setLat] = useState(39.8);
  const [zoom, setZoom] = useState(3);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

    useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });
  
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapBox