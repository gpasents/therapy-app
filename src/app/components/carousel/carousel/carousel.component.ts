import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [NgbCarouselModule],
  standalone: true,
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  images = ['../../../../assets/images/banner-book.jpg']
}