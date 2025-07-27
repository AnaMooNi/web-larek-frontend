import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';
import { EventEmitter } from '../base/events';

interface IBasketView {
	items: HTMLElement[];
	total: number;
	selected: string[];
}

export class Basket extends Component<IBasketView> {
	protected _basketList: HTMLElement;
	protected _totalPrice: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(container: HTMLElement, protected events: EventEmitter) {
		super(container);

		this._basketList = ensureElement<HTMLElement>('.basket__list', this.container);
		this._totalPrice = ensureElement<HTMLElement>('.basket__price', this.container);
		this._button = ensureElement<HTMLButtonElement>(
			'.basket__button',
			this.container
		);

		if (this._button) {
			this._button.addEventListener('click', () => {
				this.events.emit('order:open');
			});
		}
	}

	set items(items: HTMLElement[]) {
		this._basketList.replaceChildren(...items);
	}

	set selected(items: string[]) {
		this.setDisabled(this._button, items.length === 0);
	}

	set total(total: number) {
		this.setText(this._totalPrice, `${total} синапсов`);
	}

	render(data?: Partial<IBasketView>): HTMLElement {
		if (data) {
			if (data.items) this.items = data.items;
			if (data.total !== undefined) this.total = data.total;
			if (data.selected) this.selected = data.selected;
		}
		return this.container;
	}
}