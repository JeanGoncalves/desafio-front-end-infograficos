import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public lat: number = 51.521356;
  public lng: number = -0.157307;
  public zoom: number = 16;
  public iconMarker: string = '/assets/images/iconMarker.png';

  constructor() { }

  ngOnInit() {
  }

}
