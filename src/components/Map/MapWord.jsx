import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import {showDataOnMap} from '../../util';
import './map.css';
function MapWord({countries , casesType ="cases" , center , zoom}) {
    return (
      <div className="map">
        <Map center={center} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {showDataOnMap(countries, casesType)}
        </Map>
      </div>
    );
}

export default MapWord;