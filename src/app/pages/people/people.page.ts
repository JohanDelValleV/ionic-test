import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../../services/swapi.service";
import { SelectiveLoadingStrategy } from "../../services/selectiveLoadingStrategy.service";

@Component({
  selector: "app-people",
  templateUrl: "./people.page.html",
  styleUrls: ["./people.page.scss"]
})
export class PeoplePage implements OnInit {
  people: any;
  iconname = "people";
  color = "#0CD1E8";
  constructor(private swapiService: SwapiService, private loader: SelectiveLoadingStrategy) {}

  ngOnInit() {
    this.loader.preloadRoute('peopleDetail')
    this.people = this.swapiService.getSwapi('people');
  }
}
