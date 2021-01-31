import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'TaskerForest';

  gradient: string = '#808080'


  constructor(
    private render: Renderer2,
    private el: ElementRef
    
    ){}

  ngAfterViewInit(){
    this.render.setStyle(this.el.nativeElement.ownerDocument.body, 'background-color', this.gradient)
  }
}
