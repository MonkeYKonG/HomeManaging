import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListDescriptionPage } from './shop-list-description';

@NgModule({
  declarations: [
    ShopListDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopListDescriptionPage),
  ],
})
export class ShopListDescriptionPageModule {}
