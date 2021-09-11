import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServiceRoutingModule } from './service-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    TranslateModule.forChild({})
  ]
})
export class ServicesModule { }
