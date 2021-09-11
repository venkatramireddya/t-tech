import { Component, OnInit, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-tech-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) userMenu;
  @Output() sideNavigation = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public openSideNavigation(): void {
    this.sideNavigation.emit();
  }
}
