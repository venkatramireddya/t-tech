import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './careers-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    TranslateModule.forChild({})
  ]
})
export class CareersModule { }
