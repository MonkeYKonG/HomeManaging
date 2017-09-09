import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListItem } from './shopList-item';

@NgModule({
  declarations: [
    ShopListItem,
  ],
  imports: [
    IonicPageModule.forChild(ShopListItem),
  ],
})
export class ShopListItemModule {}
