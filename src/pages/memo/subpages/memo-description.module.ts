import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoDescriptionPage } from './memo-description';

@NgModule({
  declarations: [
    MemoDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(MemoDescriptionPage),
  ],
})
export class MemoDescriptionPageModule {}
