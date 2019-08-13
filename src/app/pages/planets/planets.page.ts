import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { SelectiveLoadingStrategy } from "../../services/selectiveLoadingStrategy.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets:any;
  iconname = 'planet'
  constructor(private swapiService:SwapiService, private loader:SelectiveLoadingStrategy) { }

  ngOnInit() {
    this.loader.preloadRoute('planetsDetail');
    this.planets = this.swapiService.getSwapi('planets');
  }

}
