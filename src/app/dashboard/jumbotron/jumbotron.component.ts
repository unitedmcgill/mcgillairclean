import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    selector : 'app-jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {

  title = 'app works!';
  public myInterval:number = 8000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    // Set the images for the jumbotron
    this.slides.push({
        image: `assets/img/carousel/1.jpg`,
        text: ``
      },
      {
        image: `assets/img/carousel/2.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/3.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/4.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/5.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/6.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/7.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/8.jpg`,
        text:`` 
      });

    // for (let i = 0; i < 4; i++) {
    //   this.addSlide();
    // }
  }

  // public addSlide():void {
  //   let newWidth = 600 + this.slides.length + 1;
  //   this.slides.push({
  //     image: `//placekitten.com/${newWidth}/300`,
  //     text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
  //     ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
  //   });
  // }

  // public removeSlide(index:number):void {
  //   this.slides.splice(index, 1);
  // }  

    ngOnInit(): void {
        
    }
}
