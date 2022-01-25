import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
      
  // }(): void {
    anime.timeline({loop: false})
  .add({
    targets: '.c2 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el: any, i: any) => 800 * i
  }).add({
    targets: '.c2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }

}

// export class AppComponent implements AfterViewInit  {
  
//   ngAfterViewInit(): void {