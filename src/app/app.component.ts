import { Component, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-tech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  public readonly listOfLinks: any = [
    { name: 'HEADER_NAV_HOME_LINK', link: '/home' },
    { name: 'HEADER_NAV_SERVICES_LINK', link: '/services' },
    { name: 'HEADER_NAV_SOLUTIONS_LINK', link: '/solutions' },
    { name: 'HEADER_NAV_CAREERS_LINK', link: '/careers' },
    { name: 'HEADER_NAV_CLIENTS_LINK', link: '/clients' },
    { name: 'HEADER_NAV_ABOUT_LINK', link: '/about' },
    { name: 'HEADER_NAV_CONTACT_US_LINK', link: '/contactUs' }
  ];

  @HostListener('window:resize', ['$event'])
  resizeScreen(event) {
    if ( this.sidenav &&  event['srcElement']['innerWidth'] > 880 ) {
      this.sidenav.close();
    }
  }

  public close(nav): void {
    this.sidenav.close();
  }

  public toggleSideNavigation(e): void {
    this.sidenav.toggle();
  }

  public constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('tech-help', this.domSanitizer.bypassSecurityTrustResourceUrl('')
    );
  }
}
