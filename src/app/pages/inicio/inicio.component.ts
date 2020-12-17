import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  myInterval = 1506;
  activeSlideIndex = 0;

  slides = [
    {image: 'assets/img/carousel_1.png'},
    {image: 'assets/img/carousel_2.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
