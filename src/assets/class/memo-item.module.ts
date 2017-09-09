import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoItem } from './memo-item';

@NgModule({
  declarations: [
    MemoItem,
  ],
  imports: [
    IonicPageModule.forChild(MemoItem),
  ],
})
export class MemoItemModule {}
