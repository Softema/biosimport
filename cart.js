// BiosImport – Cart page
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.indexOf('/kosik') === -1) return;

    var style = document.createElement('style');
    style.textContent = `

      /* ══ PRÁZDNÝ KOŠÍK ══ */

      /* Skrýt tlačítko Hledat a sekci "Zkuste vyhledávání" */
      .js-try-search-button,
      .col-md-6:has(.js-try-search-button) {
        display: none !important;
      }

      /* Skrýt Jára Cimrman celý blok */
      [data-testid="contactbox"],
      .box.box-sm.box-bg-default:has([data-testid="contactbox"]),
      h4:has(+ .box [data-testid="contactbox"]) {
        display: none !important;
      }

      /* Nadpis prázdného košíku */
      .cart-inner.cart-empty .h1.cart-heading {
        font-size: 1.8em !important;
        font-weight: 900 !important;
        color: #1a1a1a !important;
        letter-spacing: -0.02em !important;
        margin-bottom: 8px !important;
      }

      /* Sekce v prázdném košíku */
      .cart-inner.cart-empty .empty-cart-boxes {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 24px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes .col-md-6 {
        flex: 1 1 200px !important;
        min-width: 180px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes h3 {
        font-size: 11px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        color: #bbb !important;
        margin-bottom: 14px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 0 8px !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 8px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul li a {
        display: flex !important;
        align-items: center !important;
        padding: 15px 18px !important;
        background: #fff !important;
        border: 1.5px solid #f0f0f0 !important;
        border-radius: 12px !important;
        text-decoration: none !important;
        font-weight: 700 !important;
        color: #1a1a1a !important;
        font-size: 0.96em !important;
        transition: all 0.2s !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul li a:hover {
        border-color: #f5a623 !important;
        background: #fffcf5 !important;
        transform: translateX(4px) !important;
        color: #1a1a1a !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul li a::after {
        content: '→' !important;
        margin-left: auto !important;
        color: #f5a623 !important;
        font-size: 1.1em !important;
      }

      /* ══ TABULKA S PRODUKTEM ══ */

      .cart-table {
        width: 100% !important;
        border-collapse: collapse !important;
      }

      .cart-table .cart-table-header td {
        padding: 8px 12px 14px !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        letter-spacing: 0.1em !important;
        text-transform: uppercase !important;
        color: #bbb !important;
        border-bottom: 1.5px solid #f0f0f0 !important;
        border-top: none !important;
      }

      .cart-table tr.removeable {
        border-bottom: 1px solid #f5f5f5 !important;
        transition: background 0.15s !important;
      }

      .cart-table tr.removeable:hover {
        background: #fffcf5 !important;
      }

      .cart-table tr.removeable td {
        padding: 18px 12px !important;
        vertical-align: middle !important;
        border: none !important;
      }

      /* Obrázek produktu */
      .cart-table .cart-p-image img {
        width: 72px !important;
        height: 72px !important;
        object-fit: cover !important;
        border-radius: 10px !important;
        border: 1px solid #f0f0f0 !important;
      }

      /* Název produktu */
      .cart-table .p-name a.main-link {
        font-weight: 700 !important;
        color: #1a1a1a !important;
        text-decoration: none !important;
        font-size: 0.97em !important;
        line-height: 1.4 !important;
        transition: color 0.15s !important;
      }
      .cart-table .p-name a.main-link:hover { color: #f5a623 !important; }

      /* Počet – odebrat stínování */
      .cart-table .p-quantity input,
      .cart-table .p-quantity input[type="text"],
      .cart-table .p-quantity input[type="number"],
      .p-quantity input,
      .amount-spinner input,
      .amount-container input,
      input.amount,
      input.js-item-amount {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        outline: none !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        border: 1.5px solid #e0e0e0 !important;
        outline: none !important;
        border-radius: 8px !important;
        text-align: center !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: #1a1a1a !important;
        background: #fafafa !important;
        width: 46px !important;
        height: 36px !important;
        padding: 0 !important;
      }

      .cart-table .p-quantity .btn-amount {
        background: #f5f5f5 !important;
        border: 1.5px solid #e0e0e0 !important;
        border-radius: 8px !important;
        width: 32px !important;
        height: 36px !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #555 !important;
        cursor: pointer !important;
        transition: all 0.15s !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: none !important;
      }

      .cart-table .p-quantity .btn-amount:hover {
        background: #f5a623 !important;
        border-color: #f5a623 !important;
        color: #1a1a1a !important;
      }

      /* Smazat – crosshair nahradit trash ikonou */
      .cart-table button.remove-item {
        background: none !important;
        border: none !important;
        cursor: pointer !important;
        padding: 6px !important;
        border-radius: 6px !important;
        color: #ccc !important;
        transition: all 0.15s !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 32px !important;
        height: 32px !important;
        position: relative !important;
      }

      .cart-table button.remove-item::before {
        content: '' !important;
        display: block !important;
        width: 14px !important;
        height: 16px !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cccccc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6'/%3E%3Cpath d='M10 11v6M14 11v6'/%3E%3Cpath d='M9 6V4h6v2'/%3E%3C/svg%3E") !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }

      .cart-table button.remove-item:hover {
        background: #ffeaea !important;
      }

      .cart-table button.remove-item:hover::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e53935' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6'/%3E%3Cpath d='M10 11v6M14 11v6'/%3E%3Cpath d='M9 6V4h6v2'/%3E%3C/svg%3E") !important;
      }

      /* Skrýt výchozí obsah remove-item (sr-only text) */
      .cart-table button.remove-item .sr-only {
        display: none !important;
      }

      /* ══ CELKOVÁ CENA ══ */
      .price-wrapper {
        background: #fff !important;
        border-radius: 14px !important;
        border: 1.5px solid #f0f0f0 !important;
        padding: 24px !important;
        margin-bottom: 16px !important;
      }

      .price-wrapper .price-label.price-primary {
        display: block !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        color: #aaa !important;
        margin-bottom: 6px !important;
      }

      .price-wrapper .price.price-primary {
        display: block !important;
        font-size: 2.2em !important;
        font-weight: 900 !important;
        color: #1a1a1a !important;
        letter-spacing: -0.03em !important;
      }

      /* Doprava zdarma */
      .extra.delivery {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        background: #e8f5e9 !important;
        color: #2e7d32 !important;
        padding: 8px 16px !important;
        border-radius: 20px !important;
        font-size: 0.85em !important;
        font-weight: 700 !important;
        margin-top: 16px !important;
      }
      .extra.delivery strong { color: #2e7d32 !important; }

      /* ══ TLAČÍTKA VEDLE SEBE ══ */
      .next-step.next-step--cart {
        display: flex !important;
        flex-direction: row !important;
        gap: 10px !important;
        flex-wrap: wrap !important;
      }

      .next-step--cart a.next-step-back {
        flex: 1 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 13px 16px !important;
        background: #fff !important;
        border: 1.5px solid #e0e0e0 !important;
        border-radius: 10px !important;
        color: #555 !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-decoration: none !important;
        text-transform: none !important;
        letter-spacing: 0 !important;
        transition: all 0.2s !important;
        white-space: nowrap !important;
      }
      .next-step--cart a.next-step-back:hover {
        border-color: #ccc !important;
        color: #1a1a1a !important;
        background: #f8f8f8 !important;
      }

      .next-step--cart a.next-step-forward,
      .next-step--cart a.btn-conversion {
        flex: 2 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 13px 16px !important;
        background: #f5a623 !important;
        border: none !important;
        border-radius: 10px !important;
        color: #1a1a1a !important;
        font-weight: 800 !important;
        font-size: 13px !important;
        text-decoration: none !important;
        text-transform: uppercase !important;
        letter-spacing: 0.06em !important;
        transition: all 0.2s !important;
        box-shadow: 0 4px 14px rgba(245,166,35,0.25) !important;
        white-space: nowrap !important;
      }
      .next-step--cart a.next-step-forward:hover,
      .next-step--cart a.btn-conversion:hover {
        background: #d4891a !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 6px 18px rgba(245,166,35,0.4) !important;
        color: #1a1a1a !important;
      }


      /* Stínování počítadla – odebrat úplně (Shoptet specifické selektory) */
      .p-quantity .amount-spinner,
      .p-quantity .amount-spinner input,
      .p-quantity input.item-amount,
      .cart-table input[type="text"],
      .cart-table input[type="number"],
      .p-quantity .form-control {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        outline: none !important;
        border-radius: 8px !important;
        border: 1.5px solid #e0e0e0 !important;
        background: #fafafa !important;
      }

      .p-quantity .amount-spinner {
        box-shadow: none !important;
        border: none !important;
        background: transparent !important;
      }
      @media (max-width: 500px) {
        .next-step.next-step--cart { flex-direction: column !important; }
        .next-step--cart a.next-step-back,
        .next-step--cart a.next-step-forward { flex: none !important; width: 100% !important; }
      }
    `;
    document.head.appendChild(style);

    // ══ SKRYTÍ JÁRA CIMRMAN (záloha pro starší prohlížeče bez :has()) ══
    function hideJara() {
      var cb = document.querySelector('[data-testid="contactbox"]');
      if (cb) {
        var box = cb.closest('.box.box-sm');
        if (box) {
          var h4 = box.previousElementSibling;
          if (h4 && h4.tagName === 'H4') h4.style.display = 'none';
          box.style.display = 'none';
        }
      }
      // Skrýt tlačítko Hledat v košíku
      var searchBtn = document.querySelector('.js-try-search-button');
      if (searchBtn) {
        var col = searchBtn.closest('.col-md-6');
        if (col) col.style.display = 'none';
      }
    }
    hideJara();
    setTimeout(hideJara, 500);

    // ══ PRÁZDNÝ KOŠÍK – přidat nové sekce ══
    var emptyBoxes = document.querySelector('.empty-cart-boxes');
    if (emptyBoxes) {
      // Změnit první sloupec na col-md-4
      var firstCol = emptyBoxes.querySelector('.col-md-6');
      if (firstCol) firstCol.className = 'col-md-4';
      // Přidat sekci "Zjistěte více o nás"
      var colOnas = document.createElement('div');
      colOnas.className = 'col-md-4';
      colOnas.innerHTML = `
        <h3>Zjistěte více o nás</h3>
        <ul>
          <li><a href="/o-nas/">O nás</a></li>
          <li><a href="/pobocky/">Pobočky</a></li>
        </ul>
      `;

      // Přidat sekci "Kontaktujte nás"
      var colKontakt = document.createElement('div');
      colKontakt.className = 'col-md-4';
      colKontakt.innerHTML = `
        <h3>Kontaktujte nás</h3>
        <ul>
          <li><a href="/kontakt/">Kontakt</a></li>
        </ul>
      `;

      emptyBoxes.appendChild(colOnas);
      emptyBoxes.appendChild(colKontakt);
    }

  });
})();
