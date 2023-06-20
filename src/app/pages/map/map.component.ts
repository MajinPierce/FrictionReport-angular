import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { circle, latLng, marker, tileLayer } from 'leaflet';
import { MapArea } from 'src/app/models/map-area.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'friction-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  areas: Array<MapArea> = [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
    ],
    zoom: 8,
    center: latLng(35.2356, -85.2265)
  };

  areaLayer: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getMapData().subscribe((data) => {
      this.areas = data;
      this.areas.forEach(area => {
        area.sendex = this.calculateSendex(area);
        let popup = L.popup({
          autoClose: false,
          closeOnClick: false
        }).setContent(`<a href="${this.apiService.siteUrl}${area.name}">${area.fullName}: ${area.sendex.toString()}</a>`)
        this.areaLayer.push(
          circle([area.latitude, area.longitude], {radius: 3000})
          .bindPopup(popup)
        );
    })
  })
}

  calculateSendex(area: MapArea): number {
    let sendex = Math.round(2 * area.current.dewPoint + area.current.humidity - area.current.temperature);
    return sendex;
  }

}
