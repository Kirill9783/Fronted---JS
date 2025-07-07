export default class MainMenu {
  _mainMenuEl;
  _openButtonEl;
  _closeButtonEl;
  
  constructor() {
    this._mainMenuEl = document.querySelector('.main-menu');
    this._openButtonEl = document.querySelector('.header__catalog-btn');
    this._closeButtonEl = this._mainMenuEl.querySelector('.main-menu__close');
    this._subscribeEvents();
  }

  show() {
    this._mainMenuEl.classList.add('main-menu--active');
  }

  hide() {
    this._mainMenuEl.classList.remove('main-menu--active');
  }

  _subscribeEvents() {
    this._openButtonEl.addEventListener('click', this.show.bind(this));
    this._closeButtonEl.addEventListener('click', this.hide.bind(this));
  }
}