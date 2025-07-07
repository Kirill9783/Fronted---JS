import BasketCard from "./BasketCard.js";
import Elements from "../Elements.js";

export default class Basket {
  _basketCountEl;
  _basketEl;
  _basketListEl;
  _basketEmptyEl;
  _basketCards = [];

  constructor() {
    const basketBtnEl = document.querySelector('#basket-btn');
    this._basketCountEl = basketBtnEl.querySelector('#basket-count');
    this._basketEl = document.querySelector('.basket');
    this._basketListEl = this._basketEl.querySelector('.basket__list');
    this._basketEmptyEl = this._basketEl.querySelector('.basket__empty-block');

    basketBtnEl.addEventListener('click', () => this._toggle());
  }

  addProduct(data) {
    const listItemEl = Elements.create(this._basketListEl, 'li');
    const card = new BasketCard(data);
    card.setupRemoveClick(() => {
      listItemEl.remove();
      this._basketCards = this._basketCards.filter(e => e != card);
      this._refreshCount();
    });
    this._basketCards.push(card);
    listItemEl.append(card.element);
    this._refreshCount();
  }

  _toggle() {
    this._basketEl.classList.toggle('basket--active');
  }

  _refreshCount() {
    const count = this._basketCards.length;
    this._basketCountEl.textContent = count;
    this._basketEmptyEl.style.display = count > 0 ? 'none' : '';
  }
}