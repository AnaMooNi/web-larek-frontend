import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';
import { IEvents } from '../base/events';
import { IOrderForm } from '../../types';

export class OrderSecond extends Component<IOrderForm> {
	protected _email: HTMLInputElement;
	protected _phone: HTMLInputElement;
	protected _payButton: HTMLButtonElement;
	protected _errors: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._email = ensureElement<HTMLInputElement>(
			'input[name="email"]',
			container
		);
		this._phone = ensureElement<HTMLInputElement>(
			'input[name="phone"]',
			container
		);
		this._payButton = ensureElement<HTMLButtonElement>(
			'button[type="submit"]',
			container
		);
		this._errors = ensureElement<HTMLElement>('.form__errors', container);
		this._errors.textContent = ''; 

		this._email.addEventListener('input', () => {
			this.events.emit('contacts.email:change', {
				email: this._email.value,
			});
		});

		this._phone.addEventListener('input', () => {
			this.events.emit('contacts.phone:change', {
				phone: this._phone.value,
			});
		});

		container.addEventListener('submit', (e) => {
			e.preventDefault();
			this.events.emit('contacts:submit');
		});
	}

	set email(value: string) {
		this._email.value = value;
	}

	set phone(value: string) {
		this._phone.value = value;
	}

	set valid(value: boolean) {
		this.setDisabled(this._payButton, !value);
	}

	set errors(value: string) {
		if (
			this._errors &&
			(value || this._email.value || this._phone.value)
		) {
			this._errors.textContent = value;
		} else {
			this._errors.textContent = '';
		}
	}

	render(data: Partial<IOrderForm>): HTMLElement {
		super.render(data);

		this.valid = false;
		this.errors = '';

		if (data.email) {
			this.email = data.email;
		}

		if (data.phone) {
			this.phone = data.phone;
		}

		return this.container;
	}
}