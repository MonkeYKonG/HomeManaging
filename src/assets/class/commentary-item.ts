import { Component } from '@angular/core';

@Component({
    selector: 'commentary',
    templateUrl: 'commentary-item.html'
})
export class CommentaryItem {
    title: string;
    author: string;
    date: string;
    text: string;

    constructor() { }
}
