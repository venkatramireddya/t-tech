import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
public loadWait: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadWait = true;
    }, 500);
  }

}

