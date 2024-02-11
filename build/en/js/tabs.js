const showTab = (elTabBtn) => {
	const elTab = elTabBtn.closest('.tab');
	if (elTabBtn.classList.contains('tab-btn-active')) {
		return;
	}
	const targetId = elTabBtn.dataset.targetId;
	const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
	if (elTabPane) {
		const elTabBtnActive = elTab.querySelector('.tab-btn-active');
		elTabBtnActive.classList.remove('tab-btn-active');
		const elTabPaneShow = elTab.querySelector('.tab-pane-show');
		elTabPaneShow.classList.remove('tab-pane-show');
		elTabBtn.classList.add('tab-btn-active');
		elTabPane.classList.add('tab-pane-show');
	}
}

document.addEventListener('click', (e) => {
	if (e.target && !e.target.closest('.tab-btn')) {
		return;
	}
	const elTabBtn = e.target.closest('.tab-btn');
	showTab(elTabBtn);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dUYWIgPSAoZWxUYWJCdG4pID0+IHtcblx0Y29uc3QgZWxUYWIgPSBlbFRhYkJ0bi5jbG9zZXN0KCcudGFiJyk7XG5cdGlmIChlbFRhYkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi1idG4tYWN0aXZlJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGFyZ2V0SWQgPSBlbFRhYkJ0bi5kYXRhc2V0LnRhcmdldElkO1xuXHRjb25zdCBlbFRhYlBhbmUgPSBlbFRhYi5xdWVyeVNlbGVjdG9yKGAudGFiLXBhbmVbZGF0YS1pZD1cIiR7dGFyZ2V0SWR9XCJdYCk7XG5cdGlmIChlbFRhYlBhbmUpIHtcblx0XHRjb25zdCBlbFRhYkJ0bkFjdGl2ZSA9IGVsVGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWItYnRuLWFjdGl2ZScpO1xuXHRcdGVsVGFiQnRuQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1idG4tYWN0aXZlJyk7XG5cdFx0Y29uc3QgZWxUYWJQYW5lU2hvdyA9IGVsVGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWItcGFuZS1zaG93Jyk7XG5cdFx0ZWxUYWJQYW5lU2hvdy5jbGFzc0xpc3QucmVtb3ZlKCd0YWItcGFuZS1zaG93Jyk7XG5cdFx0ZWxUYWJCdG4uY2xhc3NMaXN0LmFkZCgndGFiLWJ0bi1hY3RpdmUnKTtcblx0XHRlbFRhYlBhbmUuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUtc2hvdycpO1xuXHR9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0ICYmICFlLnRhcmdldC5jbG9zZXN0KCcudGFiLWJ0bicpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGVsVGFiQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhYi1idG4nKTtcblx0c2hvd1RhYihlbFRhYkJ0bik7XG59KTsiXSwiZmlsZSI6InRhYnMuanMifQ==
