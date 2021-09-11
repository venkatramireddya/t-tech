import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TranslateModule.forChild({})
  ]
})
export class ClientsModule { }
