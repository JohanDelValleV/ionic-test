import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../../services/swapi.service";
import { SelectiveLoadingStrategy } from "../../services/selectiveLoadingStrategy.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  starships: any;
  iconname ='jet';
  color='#7044FF';
  constructor(private swapiService:SwapiService, private loader:SelectiveLoadingStrategy) { }

  ngOnInit() {
    this.loader.preloadRoute('starshipsDetail');
    this.starships = this.swapiService.getSwapi('starships');
  }

}
