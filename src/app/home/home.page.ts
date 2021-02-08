import { Component, OnInit } from '@angular/core';
import L from 'leaflet/dist/leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: any = [];
  userlatitude;
  userlongitude;
  constructor() {
    this.userlatitude = 8.98344521;
    this.userlongitude = -79.52981026;
  }

  ngOnInit() {
    this.pruebaLoadMap();
  }
  pruebaLoadMap() {
    setTimeout(() => {
      const markerGroup = L.featureGroup();
      const marker = L.marker([this.userlatitude, this.userlongitude]);
      this.map = L.map('map_id').setView([this.userlatitude, this.userlongitude], 14);
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© Open Street Map',
        zoom: 14,
        maxZoom: 18,
        minZoom: 4,
        minResolution: 4891.96981025128,
        maxResolution: 39135.75848201024,
        doubleClickZoom: true,
        center: [this.userlatitude, this.userlongitude]
      }).addTo(this.map);
      const yourOtherCustomIconInstance = new L.Icon({
        iconUrl: 'assets/icon/map/navigation.png',
        iconSize: [38, 38],
        iconAnchor: [22, 40],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      });
      const greenIcon = new L.Icon({
        iconUrl: 'assets/icon/map/marker.png',
        iconSize: [38, 38],
        iconAnchor: [22, 40],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      });

      L.Routing.control({
        waypoints: [
          L.latLng(8.98891278, -79.52000505),
          L.latLng(this.userlatitude, this.userlongitude)
        ],
        language: 'es',
        show: false,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: 'green', opacity: 1, weight: 5 }]
        },

        createMarker(i, wp, nWps) {
          if (i === 0) {
            return L.marker(wp.latLng, {
              icon: yourOtherCustomIconInstance // here pass the custom marker icon instance
            });
          } else {
            return L.marker(wp.latLng, {
              icon: greenIcon
            });
          }
        }

      }).addTo(this.map);
      if (this.userlatitude != null && this.map != null) {
       // this.cond_spinner = false;
      }
    }, 800);
  }

}
