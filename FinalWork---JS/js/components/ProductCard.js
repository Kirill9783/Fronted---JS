import Elements from "../Elements.js";
import Main from '../Main.js';

export default class ProductCard {
  _data;
  _element;
  _isSmall;

  constructor(data, isSmall = false) {
    this._data = data;
    this._isSmall = isSmall;
  }

  get element() {
    return this._element ??= this._createElement();
  }

  _createElement() {
    const cardEl = Elements.create('', 'div', 'product-card');
    if (this._isSmall) {
      cardEl.classList.add('product-card--small');
    }
    const cardVisualEl = Elements.create(cardEl, 'div', 'product-card__visual');
    Elements.create(cardVisualEl, 'img', 'product-card__img', {
      width: 290,
      height: this._isSmall ? 344 : 436,
      src: this._data.image,
      alt: this._data.name
    });

    const moreEl = Elements.create(cardVisualEl, 'div', 'product-card__more');
    const basketLinkEl = Elements.create(moreEl, 'a', ['product-card__link', 'btn', 'btn--icon']);
    basketLinkEl.addEventListener('click', () => this._addToBasket());
    Elements.create(basketLinkEl, 'span', 'btn__text', { textContent: 'В корзину'});
    Elements.createSvg(basketLinkEl, 24, 24, 'images/sprite.svg#icon-basket');
    const infoLinkEl = Elements.create(moreEl, 'a', ['product-card__link', 'btn', 'btn--secondary']);
    Elements.create(infoLinkEl, 'span', 'btn__text', { textContent: 'Подробнее'});

    const cardInfoEl = Elements.create(cardEl, 'div', 'product-card__info');
    Elements.create(cardInfoEl, 'h2', 'product-card__title', { textContent: this._data.name });
    const oldEl = Elements.create(cardInfoEl, 'span', 'product-card__old');
    Elements.create(oldEl, 'span', 'product-card__old-number', { textContent: this._data.price.old });
    Elements.create(oldEl, 'span', 'product-card__old-add', { textContent: ' ₽' });
    const priceEl = Elements.create(cardInfoEl, 'span', 'product-card__price');
    Elements.create(priceEl, 'span', 'product-card__price-number', { textContent: this._data.price.new });
    Elements.create(priceEl, 'span', 'product-card__price-add', { textContent: ' ₽' });
    
    // tooltip
    const tooltipEl = Elements.create(cardInfoEl, 'div', ['product-card__tooltip', 'tooltip']);
    const tooltipBtnEl = Elements.create(tooltipEl, 'button', 'tooltip__btn', { ariaLabel: 'Показать подсказку'});
    Elements.createSvg(tooltipBtnEl, 5, 10, 'images/sprite.svg#icon-i');
    this._createTooltip(tooltipBtnEl);

    return cardEl;
  }

  _createTooltip(btnEl) {
    const tooltipContentEl = Elements.create('', 'div', 'tooltip__content');
    Elements.create(tooltipContentEl, 'span', 'tooltip__text', { textContent: 'Наличие товара по городам:' });
    const tooltipListEl = Elements.create(tooltipContentEl, 'ul', 'tooltip__list');
    const cities = this._data.availability;
    for (let city in cities) {
      const itemEl = Elements.create(tooltipListEl, 'li', 'tooltip__item');
      const textEl = Elements.create(itemEl, 'span', 'tooltip__text', {textContent: `${ProductCard.getCityName(city)}: `});
      Elements.create(textEl, 'span', 'tooltip__count', { textContent: cities[city] });
    }

    tippy(btnEl, {
      content: tooltipContentEl.innerHTML,
      allowHTML: true
    });
  }

  _addToBasket() {
    Main.instance.basket.addProduct(this._data);
  }

  static getCityName(city) {
    const cityNames = {
      moscow: 'Москва',
      orenburg: 'Оренбург',
      saintPetersburg: 'Санкт-Петербург'
    }
    return cityNames[city];
  }
}