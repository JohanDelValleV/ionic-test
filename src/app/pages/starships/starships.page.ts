import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../services/swapi.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  starships: any;
  iconname ='jet';
  constructor(private swapiService:SwapiService) { }

  ngOnInit() {
    this.starships = this.swapiService.getSwapi('starships');
  }

}
