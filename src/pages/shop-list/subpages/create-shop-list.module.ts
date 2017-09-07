import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShopListPage } from './create-shop-list';

@NgModule({
  declarations: [
    CreateShopListPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateShopListPage),
  ],
})
export class CreateShopListPageModule {}
