export default class Faq {
  _rootEl;
  _activeAccordionEl = null;

  constructor() {
    this._rootEl = document.querySelector('.faq');
    this._setupAccordion();
  }

  _setupAccordion() {
    const buttonEls = this._rootEl.querySelectorAll('.accordion__btn');
    buttonEls.forEach(buttonEl =>
      buttonEl.addEventListener('click', () => this._onAccordionClick(buttonEl)));
  }

  _onAccordionClick(accordionEl) {
    this._activeAccordionEl?.classList.remove('accordion__btn--active');
    if (this._activeAccordionEl == accordionEl) {
      this._activeAccordionEl = null;
      return;
    }

    accordionEl.classList.add('accordion__btn--active');
    this._activeAccordionEl = accordionEl;
  }
  
}