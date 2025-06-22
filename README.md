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
Данные пользователя 
```
interface LotCard {
	id: string;
	title: string;
    description: string;
    image: string; 
	price: number | null; 
	category: LotCategories;
}
```

## Базовый код

### Класс API
Класс доступа к веб-серверу. Обеспечивает выполнение запросав GET, POST. 
Методы:
-`get` - выполняет GET запрос
-`post` - выполняет POST запрос 

### Класс EventEmitter
Позволяет подписываться на события и уведомлять о наступлении события.
Методы:
-`on` - установить оброботчик на событие 
-`off` - снять обработчик с события
-`emit` - инициировать событие
-`trigger` - коллбек триггер, генерирующий событие при вызове

-`onAll` - Слушать все события
-`offAll` - Сбросить все обработчики

### Класс Modal
Реалезация модальных окон
Поля класса:
-_content: HTMLTemplateElement - содержимое модального окна
-_closeButton: HTMLButtonElement - закрытие модального окна
Методы: 
-`open` - открывает модального окна
-`close` - закрытие модального окна



