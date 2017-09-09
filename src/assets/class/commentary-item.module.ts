import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentaryItem } from './commentary-item';

@NgModule({
  declarations: [
    CommentaryItem,
  ],
  imports: [
    IonicPageModule.forChild(CommentaryItem),
  ],
})
export class CommentaryItemModule {}
