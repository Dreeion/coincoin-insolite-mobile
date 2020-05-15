import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CGUPageRoutingModule } from './cgu-routing.module';

import { CGUPage } from './cgu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CGUPageRoutingModule,
    TranslateModule
  ],
  declarations: [CGUPage]
})
export class CGUPageModule {}
