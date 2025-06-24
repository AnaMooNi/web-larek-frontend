# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Данные и типы данных
Данные карточки
```
type LotCategories =
    'софт-скилс'
	'другое'
	'дополнительное'
	'кнопка'
	'хард-скил';  
```
```
interface LotCard {
	id: string; //Id лота
	title: string; //заголовок лота
    description: string; //описание лота
    image: string; //картинка лота
	price: number | null; //цена лота
	category: LotCategories; //кактегория лота
}
```
Данные пользователя 
```
interface OrderForm {
    payment: string; 
	address: string;
	email: string;
	phone: string;
}
```

## Базовый код

### Класс `API`
Класс доступа к веб-серверу. Обеспечивает выполнение запросав GET, POST\

Методы:
- `get` - выполняет GET запрос
- `post` - выполняет POST запрос 

### Класс `Component`
Класс является дженериком и родителем всех компонентов слоя представления. Реализует базовые элементы работы с элементами, такие как переключение классов, установка текста у элемента и т.д.\

### Класс `Form`
Класс для базовых форм\
Поля:
- _submit: HTMLButtonElement - кнопка отправки формы
- _errors: HTMLElement - контейнер для ошибок 

Методы: 
- `render` - метод рендеринга формы
- `set errors` - сеттер для установки сообщений об ошибках
- `set valid` - сеттер для установки валидности формы

### Класс `EventEmitter`
Позволяет подписываться на события и уведомлять о наступлении события\
Методы:
- `on` - установить оброботчик на событие 
- `off` - снять обработчик с события
- `emit` - инициировать событие
- `trigger` - коллбек триггер, генерирующий событие при вызове

- `onAll` - Слушать все события
- `offAll` - Сбросить все обработчики

## Компоненты представления
Классы представления отвечают за отображение внутри контейнера (DOM-элемент) передаваемых в них данных\


### Класс `Modal`
Реалезация модальных окон\
Поля класса:
- _content: HTMLTemplateElement - содержимое модального окна
- _closeButton: HTMLButtonElement - закрытие модального окна

Методы: 
- `open` - открывает модального окна
- `close` - закрытие модального окна

### Класс `Page`
Класс представления, отображает главную страницу\
Поля класса:
- _catalog: HTMLElement - контейнер для товаров
- buttonCart: HTMLButtonElement - кнопка корзины
- _counter: HTMLSpanElement - счетчик товаров в корзине

Методы:
- `counter` - отображение количества товаров в корзине
- `catalog` - элемент отображения всех доступных карточек

### Класс `Card `
Класс с информацией карточки товара\
Поля класса:
- _id: HTMLSpanElement - ID лота
- _title: HTMLTitleElement - заголовок лота
- _description: HTMLParagraphElement - описание лота
- _image: HTMLImageElement - картинка лота
- _price: HTMLSpanElement - цена лота
- _category: HTMLSpanElement - категория лота

Методы:
- `id :string` - устанавливает ID лота
- `title :string` - устанавливает заголовок лота
- `description :string` - устанавливает описание лота
- `image :string` - устанавливает картинку лота
- `price :number` - устанавливает цену лота
- `category :string` - устанавливает категорию лота

### Класс `Basket`
Класс корзины товаров.\
Поля:
- button: HTMLButtonElement - кнопка оформления. `button` вызывает событие `order_payment:open`
- basketList: HTMLElement - список товаров
- totalPrice: HTMLElement - общая стоимость корзины

Методы:
- `render` - отображает список товаров
- `deleteBtn` - кнопка удаления товара
- `totalPrice` - общяя стоимость товаров

### Класс `OrderForm`
Класс формы оформления заказа\
Поля:
- address :HTMLInputElement - поле ввода адресса
- email :HTMLInputElement — поле ввода email
- phone :HTMLInputElement — поле ввода номера телефона
- payButton :HTMLButtonElement — кнопка оплаты

Методы:
- `set address` - адрес дооставки
- `set email` - email пользователя
- `set phone` - номер телефона пользователя
- `set payment` - способ оплаты

### Класс `OrderSuccess`
Класс окна успешной покупки\
Поля: 
- title :HTMLTitleElement - сообщение об успешной покупке
- totalPrice :HTMLElement - стоимость заказа
- closeButton :HTMLButtonElement - кнопка закрытия окна 

Методы:
- `set total` - отоброженеи стоимости заказа

## Слой данных

### Класс `DeliveryForm`
Кдасс с данными пользователя для оформления заказа\
Поля:
- address :HTMLInputElement - адрес доставки
- payment :HTMLInputElement - способ оплаты

### Класс `ContactsForm`
Класс с контактоной информацией пользователя\
Поля:
- phone :HTMLInputElement  - телефон для связи
- email :HTMLInputElement  - почта для связи

Методы для `DeliveryForm` и `ContactsForm`:
- `validate` - проверяет корректность введённых данных пользователя
- `setOrderData` - устанавливает контактные данные
- `setOrderData` - устанавливает контактные данные
- `resetForm()` - очищает поля формы

### Класс `Cart`
Класс для хранения данных корзины товаров\
Поля:
- cards: ICard[] - массив товаров в корзине

Методы:
- `addToCart(card: ICard) :void` - добавляеттовар в корзину
- `removeFromCart(id: string) :void` - удаляет товар из корзины
- `clearCart() :void` - очищает всю корзину 
- `totalPrice() :number` - сумма всех заказов








