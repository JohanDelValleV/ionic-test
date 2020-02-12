import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() swapi;
  @Input() icon;
  @Input() color;

  id: string;
  path: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  showItem(item) {
    let urlElement = item['url'].split('/');
    this.id = urlElement[urlElement.length - 2];
    this.path = urlElement[urlElement.length - 3];
    this.router.navigateByUrl(`${this.path}/${this.id}`);
  }
}
