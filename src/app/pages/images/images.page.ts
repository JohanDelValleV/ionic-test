import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss']
})
export class ImagesPage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.lazyLoad();
  }

  lazyLoad() {
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };
    const observable = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Image ${entry.target} is in the viewport!`);
          this.preloadImage(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach(img => {
      observable.observe(img);
    });
  }

  preloadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) { return; }
    image.src = src;
  }
}
