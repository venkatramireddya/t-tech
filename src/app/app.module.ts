import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ActivatedRoute } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { version } from '../environments/config';
import { HomeModule } from './view/home/home.module';
import { ServicesModule } from './view/services/services.module';
import { SolutionsModule } from './view/solutions/solutions.module';
import { AboutModule } from './view/about/about.module';
import { CareersModule } from './view/careers/careers.module';
import { ContactUsModule } from './view/contact-us/contact-us.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from './view/home/home-routing.module';
import { AboutRoutingModule } from './view/about/about-routing.module';
import { CareersRoutingModule } from './view/careers/careers-routing.module';
import { ClientsRoutingModule } from './view/clients/clients-routing.module';
import { ContactUsRoutingModule } from './view/contact-us/contact-us-routing.module';
import { ServiceRoutingModule } from './view/services/service-routing.module';
import { SolutionsRoutingModule } from './view/solutions/solutions-routing.module';
import { InactivityModelComponent } from './shared/inactivity-model/inactivity-model.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './view/login/login.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http, 'assets/i18n/', `.json?v=${version}`
  );
}

@NgModule({
  declarations: [
    AppComponent,
    InactivityModelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    HomeModule,
    ServicesModule,
    SolutionsModule,
    AboutModule,
    CareersModule,
    ContactUsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    HomeRoutingModule,
    AboutRoutingModule,
    CareersRoutingModule,
    ClientsRoutingModule,
    ContactUsRoutingModule,
    ServiceRoutingModule,
    SolutionsRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(route: ActivatedRoute, translateService: TranslateService) {
    translateService.setDefaultLang('en-US');
    translateService.use('en-US');
  }

}
