// BiosImport – Cart page customization
// Cílí na: /kosik/

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (!path.includes('/kosik') && !path.includes('/cart')) return;

    // =============================================
    // CSS
    // =============================================
    var style = document.createElement('style');
    style.textContent = `
      /* === CELKOVÁ STRÁNKA === */
      .page-cart { font-family: inherit; }

      /* === PROGRESS BAR === */
      .order-process,
      .cart-steps,
      [class*="order-process"],
      [class*="cart-step"] {
        background: #fff !important;
        border-radius: 12px !important;
        padding: 20px 32px !important;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
        margin-bottom: 24px !important;
      }

      /* === PRÁZDNÝ KOŠÍK === */
      .cart-empty,
      .empty-cart,
      [class*="cart-empty"] {
        text-align: center !important;
        padding: 80px 20px !important;
      }

      /* Skrytí Jára Cimrman a tel. čísla v košíku */
      .cart-contact-info,
      .cart-user-info,
      [class*="cart-contact"],
      [class*="user-info"] {
        display: none !important;
      }

      /* === TABULKA KOŠÍKU === */
      .table-cart,
      table.cart,
      .cart-table {
        border-radius: 12px !important;
        overflow: hidden !important;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
        border: none !important;
        width: 100% !important;
      }

      .table-cart thead th,
      table.cart thead th {
        background: #f8f8f8 !important;
        color: #888 !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.08em !important;
        padding: 14px 16px !important;
        border: none !important;
      }

      .table-cart tbody tr,
      table.cart tbody tr {
        border-bottom: 1px solid #f0f0f0 !important;
        transition: background 0.15s !important;
      }

      .table-cart tbody tr:hover,
      table.cart tbody tr:hover {
        background: #fffbf3 !important;
      }

      .table-cart tbody td,
      table.cart tbody td {
        padding: 20px 16px !important;
        border: none !important;
        vertical-align: middle !important;
      }

      /* Obrázek produktu */
      .table-cart .product-image img,
      .cart-item-image img {
        border-radius: 8px !important;
        width: 72px !important;
        height: 72px !important;
        object-fit: cover !important;
      }

      /* Název produktu */
      .table-cart .product-name a,
      .cart-item-name a {
        font-weight: 700 !important;
        color: #1a1a1a !important;
        font-size: 1em !important;
        text-decoration: none !important;
      }

      .table-cart .product-name a:hover,
      .cart-item-name a:hover {
        color: #f5a623 !important;
      }

      /* Cena */
      .table-cart .price-final,
      .cart-item-price {
        font-weight: 700 !important;
        color: #1a1a1a !important;
        font-size: 1.05em !important;
      }

      /* Počet – stylovat +/- tlačítka */
      .cart-item-quantity input,
      .table-cart .amount-input,
      input.amount {
        border: 2px solid #e0e0e0 !important;
        border-radius: 8px !important;
        text-align: center !important;
        width: 52px !important;
        padding: 6px !important;
        font-weight: 600 !important;
        font-size: 14px !important;
      }

      .btn-amount,
      button.amount-minus,
      button.amount-plus {
        background: #f8f8f8 !important;
        border: 2px solid #e0e0e0 !important;
        border-radius: 8px !important;
        width: 32px !important;
        height: 32px !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #1a1a1a !important;
        cursor: pointer !important;
        transition: all 0.15s !important;
      }

      .btn-amount:hover,
      button.amount-minus:hover,
      button.amount-plus:hover {
        background: #f5a623 !important;
        border-color: #f5a623 !important;
        color: #1a1a1a !important;
      }

      /* Tlačítko smazat */
      .btn-remove,
      .cart-item-remove,
      a.remove-item {
        color: #ccc !important;
        transition: color 0.15s !important;
        font-size: 18px !important;
      }

      .btn-remove:hover,
      .cart-item-remove:hover,
      a.remove-item:hover {
        color: #e74c3c !important;
      }

      /* === SOUHRN === */
      .cart-summary,
      .order-summary,
      [class*="cart-summary"] {
        background: #fff !important;
        border-radius: 12px !important;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
        padding: 28px !important;
        margin-top: 24px !important;
      }

      .cart-summary .total,
      .order-total,
      .cart-total-price {
        font-size: 2em !important;
        font-weight: 800 !important;
        color: #1a1a1a !important;
      }

      .cart-summary .total-label,
      .order-total-label {
        font-size: 0.85em !important;
        color: #888 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.06em !important;
      }

      /* Doprava zdarma badge */
      .free-shipping,
      [class*="free-shipping"],
      .cart-free-delivery {
        background: #e8f5e9 !important;
        color: #2e7d32 !important;
        border-radius: 20px !important;
        padding: 6px 16px !important;
        font-size: 0.85em !important;
        font-weight: 700 !important;
        display: inline-block !important;
      }

      /* === TLAČÍTKA === */
      .btn-cart-continue,
      .btn-back-to-shop,
      a[href*="zpet"],
      a[href*="back"] {
        background: #f8f8f8 !important;
        color: #1a1a1a !important;
        border: 2px solid #e0e0e0 !important;
        border-radius: 10px !important;
        padding: 12px 24px !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        text-decoration: none !important;
        transition: all 0.2s !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
      }

      .btn-cart-continue:hover,
      .btn-back-to-shop:hover {
        border-color: #f5a623 !important;
        background: #fffbf3 !important;
      }

      /* === PRÁZDNÝ KOŠÍK SEKCE === */
      .cart-empty-wrapper {
        text-align: center;
        padding: 80px 20px;
        max-width: 480px;
        margin: 0 auto;
      }

      .cart-empty-icon {
        width: 90px;
        height: 90px;
        background: #f8f8f8;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 28px;
      }

      .cart-empty-icon svg {
        width: 42px;
        height: 42px;
        opacity: 0.4;
      }

      .cart-empty-title {
        font-size: 1.6em;
        font-weight: 800;
        color: #1a1a1a;
        margin: 0 0 12px;
      }

      .cart-empty-text {
        color: #888;
        font-size: 0.95em;
        line-height: 1.6;
        margin: 0 0 32px;
      }

      .cart-empty-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #f5a623;
        color: #1a1a1a;
        font-weight: 700;
        font-size: 15px;
        padding: 14px 32px;
        border-radius: 10px;
        text-decoration: none;
        transition: background 0.2s, transform 0.15s;
      }

      .cart-empty-btn:hover {
        background: #d4891a;
        color: #1a1a1a;
        transform: translateY(-2px);
      }

      /* === SKRYTÍ KONTAKTNÍCH ÚDAJŮ === */
      /* Schovat "Jára Cimrman" a telefon z košíku */
      .customer-data-row,
      .cart-customer,
      .logged-user-info,
      [data-testid="cartCustomerInfo"],
      [data-testid="cartContactInfo"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // =============================================
    // PRÁZDNÝ KOŠÍK – vylepšit zobrazení
    // =============================================
    var emptyCart = document.querySelector('.cart-empty, [class*="cart-empty"], .empty-cart');
    if (emptyCart) {
      emptyCart.innerHTML = `
        <div class="cart-empty-wrapper">
          <div class="cart-empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <h2 class="cart-empty-title">Váš košík je prázdný</h2>
          <p class="cart-empty-text">Zatím jste do košíku nic nepřidali. Prohlédněte si naši nabídku malotraktorů a příslušenství.</p>
          <a href="/malotraktory/" class="cart-empty-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Zpět do obchodu
          </a>
        </div>
      `;
    }

    // =============================================
    // SKRYTÍ JÁRA CIMRMAN A TEL.
    // =============================================
    // Hledáme text "Jára" nebo tel. ve stránce a skryjeme rodičovský element
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length === 0 && el.textContent) {
        var text = el.textContent.trim();
        if (
          text.includes('Jára') ||
          text.includes('Cimrman') ||
          (text.match(/\d{3}\s?\d{3}\s?\d{3}/) && el.closest('[class*="cart"]'))
        ) {
          var parent = el.closest('.cart-contact-info, .cart-user-info, [class*="contact"], [class*="user-info"]') || el.parentElement;
          if (parent) parent.style.display = 'none';
        }
      }
    });

  });
})();
