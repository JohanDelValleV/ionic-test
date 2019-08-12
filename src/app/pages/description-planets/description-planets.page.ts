import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../services/swapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  constructor(private swapiService:SwapiService, private route:ActivatedRoute) { }
  planets:any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      
      this.planets = this.swapiService.getSwapi(`planets/${id}`).subscribe(data => {
        this.planets=data;
      })
    })
  }

}
