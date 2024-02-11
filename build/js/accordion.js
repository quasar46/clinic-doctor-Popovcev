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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgY2xhc3MgSXRjQWNjb3JkaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWwgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICAgIGFsd2F5c09wZW46IHRydWVcbiAgICAgIH07XG4gICAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWxIZWFkZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuYWNjb3JkaW9uX19oZWFkZXInKTtcbiAgICAgICAgaWYgKCFlbEhlYWRlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5hbHdheXNPcGVuKSB7XG4gICAgICAgICAgY29uc3QgZWxPcGVuSXRlbSA9IHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW1fc2hvdycpO1xuICAgICAgICAgIGlmIChlbE9wZW5JdGVtKSB7XG4gICAgICAgICAgICBlbE9wZW5JdGVtICE9PSBlbEhlYWRlci5wYXJlbnRFbGVtZW50ID8gZWxPcGVuSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpb25fX2l0ZW1fc2hvdycpIDogbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxIZWFkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpb25fX2l0ZW1fc2hvdycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWNjb3JkaW9uLTEnKS5sZW5ndGggPiAwKSB7XG4gICAgbmV3IEl0Y0FjY29yZGlvbignI2FjY29yZGlvbi0xJyk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhY2NvcmRpb24tMicpLmxlbmd0aCA+IDApIHtcbiAgICBuZXcgSXRjQWNjb3JkaW9uKCcjYWNjb3JkaW9uLTInKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2FjY29yZGlvbi0zJykubGVuZ3RoID4gMCkge1xuICAgIG5ldyBJdGNBY2NvcmRpb24oJyNhY2NvcmRpb24tMycpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWNjb3JkaW9uLTQnKS5sZW5ndGggPiAwKSB7XG4gICAgbmV3IEl0Y0FjY29yZGlvbignI2FjY29yZGlvbi00Jyk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhY2NvcmRpb24tNScpLmxlbmd0aCA+IDApIHtcbiAgICBuZXcgSXRjQWNjb3JkaW9uKCcjYWNjb3JkaW9uLTUnKTtcbiAgfVxufSlcbiJdLCJmaWxlIjoiYWNjb3JkaW9uLmpzIn0=
