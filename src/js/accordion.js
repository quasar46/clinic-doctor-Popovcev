document.addEventListener('DOMContentLoaded', function () {
  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
          }
        }
        elHeader.parentElement.classList.toggle('accordion__item_show');
      });
    }
  }
  if (document.querySelectorAll('#accordion-1').length > 0) {
    new ItcAccordion('#accordion-1');
  }
  if (document.querySelectorAll('#accordion-2').length > 0) {
    new ItcAccordion('#accordion-2');
  }
  if (document.querySelectorAll('#accordion-3').length > 0) {
    new ItcAccordion('#accordion-3');
  }
  if (document.querySelectorAll('#accordion-4').length > 0) {
    new ItcAccordion('#accordion-4');
  }
  if (document.querySelectorAll('#accordion-5').length > 0) {
    new ItcAccordion('#accordion-5');
  }
})
