import { CommentaryItem } from './commentary-item';

import { Component } from '@angular/core';

export class ShopItem {
    name: string = "item name";
    quantity: string = "quantity";
    isCheck: boolean = false;
}

export class ShopListItem {
    title: string = "title";
    commentarys: CommentaryItem[];
    list: ShopItem[];
}
