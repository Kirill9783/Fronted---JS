import ProductCardsBuilder from "./ProductCardsBuilder.js";
import Elements from "../Elements.js";

export default class Catalog {
  _rootEl;
  _listEl;
  _filters = new Set();
  _onlyAvailableProducts = false;
  _sortType = '';
  _currentPage = 0;

  static _pageSize = 9;

  constructor() {
    this._rootEl = document.querySelector('.catalog');
    this._listEl = this._rootEl.querySelector('.catalog__list');
    this._setupFilterEvents();
    this._setupSortingEvents();
    ProductCardsBuilder.loadAllData(() => {
      this._refreshProductCards();
      this._refreshFilterCounters();
    });
  }

  _refreshProductCards() {
    this._clearProductCards();

    const cardsBuilder = new ProductCardsBuilder()
    .applyFilters(this._filters, this._onlyAvailableProducts)
    .applySort(this._sortType);

    const pagesCount = Math.ceil(cardsBuilder.count() / Catalog._pageSize);
    this._setPageCount(pagesCount);

    const currentPageCards = cardsBuilder
    .getPage(this._currentPage, Catalog._pageSize)
    .buildCards();

    currentPageCards.forEach(productCard => {
      const itemEl = Elements.create(this._listEl, 'li', 'catalog__item');
      itemEl.append(productCard.element);
    });
  }

  _clearProductCards() {
    this._listEl.innerHTML = '';
  }

  _setupFilterEvents() {
    const checkboxListEl = this._rootEl.querySelector('.catalog-form__list-col');
    const checkboxEls = checkboxListEl.querySelectorAll('.custom-checkbox__field');
  
    checkboxEls.forEach(el => el.addEventListener('change', (e) => {
      if (e.currentTarget.checked) {
        this._filters.add(e.currentTarget.value);
      } else {
        this._filters.delete(e.currentTarget.value);
      }
      this._currentPage = 0;
      this._refreshProductCards();
    }));
  
    const resetBtn = this._rootEl.querySelector('.catalog-form__reset');
    resetBtn.addEventListener('click', () => {
      checkboxEls.forEach(el => el.checked = false);
      this._filters.clear();
      this._refreshProductCards();
    });
  
    const radioEls = this._rootEl.querySelectorAll('.custom-radio__field[name="status"]');
    radioEls.forEach(el => el.addEventListener('change', (e) => {
      this._onlyAvailableProducts = e.currentTarget.value == 'instock';
      this._refreshProductCards();
      this._refreshFilterCounters();
    }));
  }

  _setupSortingEvents() {
    const selectEl = this._rootEl.querySelector('.catalog__sort-select');
    this._sortType = selectEl.value;
    selectEl.addEventListener('change', (e) => {
      this._sortType = e.currentTarget.value;
      this._currentPage = 0;
      this._refreshProductCards();
    });
  }

  _refreshFilterCounters() {
    const checkboxListEl = this._rootEl.querySelector('.catalog-form__list-col');
    const checkboxEls = checkboxListEl.querySelectorAll('.custom-checkbox');
    checkboxEls.forEach(e => this._refreshFilterCounter(e));
  }

  _refreshFilterCounter(checkboxEl) {
    const type = checkboxEl.querySelector('.custom-checkbox__field').value;
    const filters = new Set([type]);
    const count = new ProductCardsBuilder()
    .applyFilters(filters, this._onlyAvailableProducts)
    .count();
    checkboxEl.querySelector('.custom-checkbox__count').textContent = count;
  }

  _setPageCount(count) {
    const navigationEl = this._rootEl.querySelector('.catalog__pagination');
    navigationEl.innerHTML = '';
    if (count < 2) {
      return;
    }

    for (let i = 0; i < count; i++) {
      const itemEl = Elements.create(navigationEl, 'li', 'catalog__pagination-item');
      const btnEl = Elements.create(itemEl, 'button', 'catalog__pagination-link', { type: 'button', textContent: i + 1 });
      btnEl.disabled = i === this._currentPage;
      btnEl.addEventListener('click', () => {
        this._currentPage = i;
        this._refreshProductCards();
      });
    }
  }

}