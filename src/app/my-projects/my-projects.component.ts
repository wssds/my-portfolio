import { Component, OnInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animate(){
    let textWrapper: any = document.querySelector('.c3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.c3 .el',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el: any, i: any) => 100 * i
  }).add({
    targets: '.c3',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  });
  
  }
}
