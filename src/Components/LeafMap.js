import React, { useEffect, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import {Popup} from 'react-leaflet/Popup'
import './LeafMap.css'
import Button from '@mui/material/Button';

const URL = `http://localhost:8000/places/`


const LeafMap = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then(res => setData(res))
  }, [])



  return (
    <div>
      <MapContainer center={[38.8283, -95.5795]} zoom={4.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(point => {
          return <Marker key={point.id} position={[point.geolocation[0], point.geolocation[1]]}>
              <Popup>
                <div className="pop-up">
                  <h4>{point.title}</h4>
                  <img style={{height: 150}} src={point.image} alt="" />
                  <p>{point.description}</p>
                  <Button variant="contained">Delete</Button>
                </div>
              </Popup>
            </Marker>
        } )}
      </MapContainer>
    </div>
  )
}

export default LeafMap