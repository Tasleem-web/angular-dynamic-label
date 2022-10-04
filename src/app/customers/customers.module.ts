import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { SharedModule } from '../shared/shared.module';
import { LabelPipePipe } from '../shared/pipes/label.pipe';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ModalComponent,
    ButtonComponent,
    LabelPipePipe,
    PersonalDetailsComponent,
  ],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
