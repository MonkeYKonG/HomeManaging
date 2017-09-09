import { CommentaryItem } from './commentary-item';

export class ShopItem {
    name: string;
    quantity: string;
    isCheck: boolean;
}

export class ShopListItem {
    title: string;
    commentarys: CommentaryItem[];
    list: ShopItem[];
}
