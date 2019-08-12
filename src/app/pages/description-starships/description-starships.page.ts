import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../services/swapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-description-starships',
  templateUrl: './description-starships.page.html',
  styleUrls: ['./description-starships.page.scss'],
})
export class DescriptionStarshipsPage implements OnInit {

  constructor(private swapiService:SwapiService, private route:ActivatedRoute) { }
  starships: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')

      this.starships = this.swapiService.getSwapi(`starships/${id}`).subscribe(data => {
        this.starships = data;
      })
    })
  }

}
