import { ICard } from '../../types';
import { IEvents } from '../base/events';

export class CartModel {
	protected items: ICard[] = [];

	constructor(protected events: IEvents) {}

	addToCart(item: ICard): void {

        if (item.price === null) return;

		if (!this.items.some((existing) => existing.id === item.id)) {
			this.items.push(item);
			this.events.emit('cart:changed');
		}
	}

	removeFromCart(id: string): void {
		this.items = this.items.filter((item) => item.id !== id);
		this.events.emit('cart:changed');
	}

	clearCart(): void {
		this.items = [];
		this.events.emit('cart:changed');
	}

	getItems(): ICard[] {
		return this.items;
	}

	totalPrice(): number {
    return this.items.reduce((total, item) => {
        const price = Number(item.price) || 0;
        return total + price;
    }, 0);
}

	getItemCount(): number {
		return this.items.length;
	}

	hasItem(id: string): boolean {
		return this.items.some((item) => item.id === id);
	}
}