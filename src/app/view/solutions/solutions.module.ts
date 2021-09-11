import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './solutions.component';
import { SolutionsRoutingModule } from './solutions-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    TranslateModule.forChild({})
  ]
})
export class SolutionsModule { }
