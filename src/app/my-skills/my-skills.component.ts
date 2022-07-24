import { Component, OnInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  animate(){
    let textWrapper: any = document.querySelector('.c1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.c1 .el',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el: any, i: any) => 100 * i
  }).add({
    targets: '.c1',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  });
  }
}
