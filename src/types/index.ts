//Категории карточек
type LotCategories =
    'софт-скилс'
	'другое'
	'дополнительное'
	'кнопка'
	'хард-скил';

//Интерфейс лота
interface LotCard {
	id: string; //Id лота
	title: string; //заголовок лота
    description: string; //описание лота
    image: string; //картинка лота
	price: number | null; //цена лота
	category: LotCategories; //кактегория лота
}

//Данный заказчика
interface OrderForm {
    payment: string; 
	address: string;
	email: string;
	phone: string;
}