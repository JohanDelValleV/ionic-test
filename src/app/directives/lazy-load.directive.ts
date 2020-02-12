import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  @Input('appLazyLoad') imagePath: string;
  constructor() { }

  ngOnInit() {
    this.lazyLoad();
  }

  lazyLoad() {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.preloadImage(entry.target);
        }
      });
    });
    const imgs = document.querySelectorAll('[appLazyLoad]');
    imgs.forEach(img => {
      observable.observe(img);
    });
  }

  preloadImage(image) {
    const src = image.getAttribute('appLazyLoad');
    if (!src) { return; }
    image.src = src;
    image.removeAttribute('appLazyLoad');
  }

}
