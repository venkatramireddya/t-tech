import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    TranslateModule.forChild({})
  ]
})
export class ContactUsModule { }
