import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  currentIndex = 0;
  images = [
    { src: 'anuncio.png'},
    { src: 'petshoppromo.png'},
    { src: 'imagempethshop.png'},
  ];
  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  backSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


}
