import { CommentaryItem } from './commentary-item';

import { Component } from '@angular/core';

export class ShopItem {
    name: string;
    quantity: string;
    isCheck: boolean;
}

export class ShopListItem {
    title: string;
    //commentarys: CommentaryItem[];
    items: ShopItem[];
}
