import { CommentaryItem } from './commentary-item'

import { Component } from '@angular/core';

@Component({
    selector: 'memo',
    templateUrl: 'memo-item.html'
})
export class MemoItem {
    title: string = "debug";
    author: string;
    date: string;
    text: string;
}
