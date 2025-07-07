import Elements from "../Elements.js";

export default class BasketCard {
  _data;
  _element;
  _onRemoveClick;

  constructor(data) {
    this._data = data;
    
  }

  get element() {
    return this._element ??= this._createElement();
  }

  get id() {
    return this._data.id;
  }

  setupRemoveClick(callback) {
    this._onRemoveClick = callback;
  }

  _createElement() {
    const cardEl = Elements.create('', 'div', 'basket-card');
    const imgWrapEl = Elements.create(cardEl, 'div', 'basket-card__img-wrap');
    Elements.create(imgWrapEl, 'img', [], {
      width: 60,
      height: 60,
      src: this._data.image,
      alt: this._data.name
    });
    Elements.create(cardEl, 'span', 'basket-card__name', { textContent: this._data.name });
    Elements.create(cardEl, 'span', 'basket-card__price', { textContent: this._data.price.new });
    const closeBtnEl = Elements.create(cardEl, 'button', 'basket-card__close', { type: 'button' });
    closeBtnEl.addEventListener('click', () => this._onRemoveClick());
    Elements.createSvg(closeBtnEl, 24, 24, 'images/sprite.svg#icon-close');

    return cardEl;
  }
}