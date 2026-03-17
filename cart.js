// BiosImport – Cart page styling
// Targets: /kosik/
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path.indexOf('/kosik') === -1) return;

    var style = document.createElement('style');
    style.textContent = `

      /* ── PRÁZDNÝ KOŠÍK ── */
      .cart-inner.cart-empty .h1.cart-heading {
        font-size: 1.8em !important;
        font-weight: 900 !important;
        color: #1a1a1a !important;
        margin-bottom: 8px !important;
        letter-spacing: -0.02em !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes {
        margin-top: 32px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes h3 {
        font-size: 1em !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.08em !important;
        color: #aaa !important;
        margin-bottom: 16px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }

      .cart-inner.cart-empty .empty-cart-boxes ul li a {
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        padding: 16px 20px !important;
        background: #fff !important;
        border: 1.5px solid #f0f0f0 !important;
        border-radius: 12px !important;
        text-decoration: none !important;
        font-weight: 700 !important;
        color: #1a1a1a !important;
        font-size: 0.97em !important;
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

      /* ── TABULKA S PRODUKTY ── */
      .cart-inner .cart-table {
        width: 100% !important;
        border-collapse: collapse !important;
      }

      /* Hlavička tabulky */
      .cart-table .cart-table-header td {
        padding: 8px 12px 12px !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        letter-spacing: 0.1em !important;
        text-transform: uppercase !important;
        color: #bbb !important;
        border-bottom: 1px solid #f0f0f0 !important;
        border-top: none !important;
      }

      /* Řádek produktu */
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

      /* Obrázek */
      .cart-table .cart-p-image img {
        width: 72px !important;
        height: 72px !important;
        object-fit: cover !important;
        border-radius: 10px !important;
        border: 1px solid #f0f0f0 !important;
      }

      /* Název */
      .cart-table .p-name a.main-link {
        font-weight: 700 !important;
        color: #1a1a1a !important;
        text-decoration: none !important;
        font-size: 0.97em !important;
        line-height: 1.4 !important;
        transition: color 0.15s !important;
      }

      .cart-table .p-name a.main-link:hover {
        color: #f5a623 !important;
      }

      /* Dostupnost */
      .cart-table .p-availability {
        font-size: 0.82em !important;
        font-weight: 600 !important;
      }

      /* Počet – wrapper */
      .cart-table .p-quantity {
        white-space: nowrap !important;
      }

      .cart-table .p-quantity input[type="text"],
      .cart-table .p-quantity input[type="number"] {
        width: 46px !important;
        height: 36px !important;
        border: 1.5px solid #e0e0e0 !important;
        border-radius: 8px !important;
        text-align: center !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: #1a1a1a !important;
        background: #fafafa !important;
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
        line-height: 1 !important;
      }

      .cart-table .p-quantity .btn-amount:hover {
        background: #f5a623 !important;
        border-color: #f5a623 !important;
        color: #1a1a1a !important;
      }

      /* Cena */
      .cart-table .p-price,
      .cart-table .p-total {
        font-weight: 700 !important;
        color: #1a1a1a !important;
        font-size: 0.97em !important;
      }

      /* Smazat – tlačítko delete */
      .cart-table .delete-cart-item button,
      .cart-table .delete-cart-item input[type="submit"] {
        background: none !important;
        border: none !important;
        color: #ddd !important;
        font-size: 20px !important;
        cursor: pointer !important;
        padding: 4px 8px !important;
        border-radius: 6px !important;
        transition: all 0.15s !important;
        line-height: 1 !important;
      }

      .cart-table .delete-cart-item button:hover,
      .cart-table .delete-cart-item input[type="submit"]:hover {
        color: #e53935 !important;
        background: #ffeaea !important;
      }

      /* ── DOPRAVA ZDARMA ── */
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

      .extra.delivery strong {
        color: #2e7d32 !important;
        font-weight: 700 !important;
      }

      /* ── CELKOVÁ CENA ── */
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

      /* ── TLAČÍTKA ── */
      .next-step.next-step--cart {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }

      /* Zpět do obchodu */
      .next-step--cart a.next-step-back {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 13px 20px !important;
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
      }

      .next-step--cart a.next-step-back:hover {
        border-color: #ccc !important;
        color: #1a1a1a !important;
        background: #f8f8f8 !important;
      }

      /* Pokračovat */
      .next-step--cart a.next-step-forward,
      .next-step--cart a.btn-conversion {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 15px 20px !important;
        background: #f5a623 !important;
        border: none !important;
        border-radius: 10px !important;
        color: #1a1a1a !important;
        font-weight: 800 !important;
        font-size: 14px !important;
        text-decoration: none !important;
        text-transform: uppercase !important;
        letter-spacing: 0.06em !important;
        transition: all 0.2s !important;
        box-shadow: 0 4px 16px rgba(245,166,35,0.25) !important;
      }

      .next-step--cart a.next-step-forward:hover,
      .next-step--cart a.btn-conversion:hover {
        background: #d4891a !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(245,166,35,0.4) !important;
        color: #1a1a1a !important;
      }

      /* ── RESPONZIVITA ── */
      @media (max-width: 768px) {
        .cart-table .cart-table-header { display: none !important; }

        .cart-table tr.removeable {
          display: grid !important;
          grid-template-columns: 80px 1fr auto !important;
          grid-template-rows: auto auto !important;
          gap: 4px 12px !important;
          padding: 16px 0 !important;
        }

        .cart-table tr.removeable td {
          padding: 4px 8px !important;
        }

        .price-wrapper .price.price-primary {
          font-size: 1.7em !important;
        }
      }
    `;
    document.head.appendChild(style);

    // ── SKRYTÍ JÁRA CIMRMAN ──
    // Najde jakýkoliv element obsahující jen telefonní číslo nebo jméno
    function hideContactJunk() {
      var all = document.querySelectorAll('p, span, div, li');
      all.forEach(function(el) {
        if (el.children.length > 0) return;
        var t = el.textContent.trim();
        if (/cimrman/i.test(t) || /^\+?[\d\s\-\.]{9,15}$/.test(t)) {
          var parent = el.parentElement;
          if (parent) parent.style.display = 'none';
        }
      });
    }
    hideContactJunk();
    setTimeout(hideContactJunk, 600);

  });
})();
