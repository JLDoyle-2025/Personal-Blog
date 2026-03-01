(function () {
  'use strict';

  var activeType = 'all';
  var activeCat  = 'all';

  var grid      = document.getElementById('review-grid');
  var cards     = Array.from(grid.querySelectorAll('.review-card'));
  var countSpan = document.getElementById('visible-count');
  var noResults = document.getElementById('no-results');

  function applyFilters() {
    var visibleCount = 0;

    cards.forEach(function (card) {
      var cardType = card.dataset.type;
      var cardCat  = card.dataset.category;

      var typeMatch = activeType === 'all' || cardType === activeType;
      var catMatch  = activeCat  === 'all' || cardCat  === activeCat;

      if (typeMatch && catMatch) {
        card.removeAttribute('hidden');
        visibleCount++;
      } else {
        card.setAttribute('hidden', '');
      }
    });

    countSpan.textContent = visibleCount;
    noResults.hidden = visibleCount > 0;
  }

  function setActiveButton(group, clicked) {
    group.forEach(function (btn) {
      var isActive = btn === clicked;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  var typeButtons = Array.from(document.querySelectorAll('[data-filter-type]'));
  typeButtons.forEach(function (btn) {
    btn.setAttribute('aria-pressed', btn.dataset.filterType === 'all' ? 'true' : 'false');
    btn.addEventListener('click', function () {
      activeType = btn.dataset.filterType;
      setActiveButton(typeButtons, btn);
      applyFilters();
    });
  });

  var catButtons = Array.from(document.querySelectorAll('[data-filter-cat]'));
  catButtons.forEach(function (btn) {
    btn.setAttribute('aria-pressed', btn.dataset.filterCat === 'all' ? 'true' : 'false');
    btn.addEventListener('click', function () {
      activeCat = btn.dataset.filterCat;
      setActiveButton(catButtons, btn);
      applyFilters();
    });
  });

})();
