export default class Location {
  _cityBtnEl;
  _cityNameEl;

  constructor() {
    this._cityBtnEl = document.querySelector('.location__city');
    this._cityNameEl = this._cityBtnEl.querySelector('.location__city-name');
    this._subscribeEvents();
  }

  toggleActive() {
    this._cityBtnEl.classList.toggle('location__city--active');
  }

  _subscribeEvents() {
    this._cityBtnEl.addEventListener('click', this.toggleActive.bind(this));

    const sublinks = document.querySelectorAll('.location__sublink');
    sublinks.forEach(e => e.addEventListener('click', this._onSublinkClick.bind(this)));
  }

  _onSublinkClick(e) {
    this._cityNameEl.textContent = e.currentTarget.textContent;
    this.toggleActive();
  }
}