import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    this.animate();
  }

  onChange(visible : boolean) {
    if(visible) this.animate();
  }

  animate() {
    let textWrapper: any = document.querySelector('.c4');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.c4 .el',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el: any, i: any) => 100 * i
      }).add({
        targets: '.c4',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100
      });
    }

  ngOnInit(): void {

  }



}
