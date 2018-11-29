import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';

export class ItemsService {
    itemsChanged = new Subject<Item[]>();

    private items: Item[] = [
        new Item(0)
    ];

    constructor(private itemService: ItemsService) {}

    getItems() {
        return this.items.slice();
    }

    getItem(index: number) {
        return this.items[index];
    }

    addItemsToList(item: Item) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    updateItem(index: number, item: Item) {
        this.items[index] = item;
        this.itemsChanged.next(this.items.slice());
    }

    onDelete(index: number) {
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    }
}
