// BiosImport – Cart page
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (!path.includes('/kosik') && !path.includes('/cart')) return;

    // =============================================
    // CSS
    // =============================================
    var style = document.createElement('style');
    style.textContent = `
      /* === PROGRESS STEPS === */
      .order-process { font-family: inherit; }

      .order-process li .process-title {
        font-size: 12px !important;
        font-weight: 600 !important;
        letter-spacing: 0.04em !important;
        text-transform: uppercase !important;
      }

      /* === TABULKA KOŠÍKU – čistá, moderní === */
      .table-cart {
        border: none !important;
        border-collapse: separate !important;
        border-spacing: 0 !important;
        width: 100% !important;
      }

      .table-cart thead tr {
        background: none !important;
      }

      .table-cart thead th {
        background: none !important;
        border-bottom: 1px solid #f0f0f0 !important;
        border-top: none !important;
        padding: 8px 12px 12px !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        letter-spacing: 0.1em !important;
        text-transform: uppercase !important;
        color: #aaa !important;
      }

      .table-cart tbody tr {
        background: #fff !important;
        border: none !important;
        transition: background 0.15s !important;
      }

      .table-cart tbody tr:hover {
        background: #fffcf5 !important;
      }

      .table-cart tbody td {
        border-top: 1px solid #f5f5f5 !important;
        border-bottom: none !important;
        padding: 18px 12px !important;
        vertical-align: middle !important;
      }

      /* Obrázek produktu */
      .table-cart .product-image img {
        width: 68px !important;
        height: 68px !important;
        object-fit: cover !important;
        border-radius: 10px !important;
        border: 1px solid #f0f0f0 !important;
      }

      /* Název produktu */
      .table-cart .product-name a {
        font-weight: 700 !important;
        font-size: 0.97em !important;
        color: #1a1a1a !important;
        text-decoration: none !important;
        line-height: 1.4 !important;
      }
      .table-cart .product-name a:hover { color: #f5a623 !important; }

      /* Dostupnost – "Momentálně nedostupné" */
      .table-cart .availability {
        font-size: 0.82em !important;
        font-weight: 600 !important;
      }

      /* Počet */
      .table-cart .amount input,
      .table-cart input.amount {
        border: 1.5px solid #e8e8e8 !important;
        border-radius: 8px !important;
        text-align: center !important;
        width: 46px !important;
        height: 36px !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: #1a1a1a !important;
        background: #fafafa !important;
        padding: 0 !important;
      }

      .btn-amount {
        background: #f5f5f5 !important;
        border: 1.5px solid #e8e8e8 !important;
        border-radius: 8px !important;
        width: 32px !important;
        height: 36px !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #555 !important;
        cursor: pointer !important;
        transition: all 0.15s !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .btn-amount:hover {
        background: #f5a623 !important;
        border-color: #f5a623 !important;
        color: #1a1a1a !important;
      }

      /* Cena */
      .table-cart .price-final strong,
      .table-cart .price strong {
        font-weight: 800 !important;
        font-size: 1em !important;
        color: #1a1a1a !important;
      }

      /* Odstranit */
      .table-cart .remove a,
      .table-cart a.remove {
        color: #ddd !important;
        font-size: 18px !important;
        text-decoration: none !important;
        transition: color 0.15s !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 28px !important;
        height: 28px !important;
        border-radius: 50% !important;
      }
      .table-cart .remove a:hover,
      .table-cart a.remove:hover {
        color: #e53935 !important;
        background: #ffeaea !important;
      }

      /* === SOUHRN KOŠÍKU === */
      .cart-summary-row,
      .total-cart-row {
        border-top: 2px solid #f5f5f5 !important;
        padding-top: 20px !important;
        margin-top: 12px !important;
      }

      /* Doprava zdarma */
      .free-delivery-info,
      [class*="free-delivery"],
      [class*="free-shipping"] {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        background: #e8f5e9 !important;
        color: #2e7d32 !important;
        padding: 7px 14px !important;
        border-radius: 20px !important;
        font-size: 0.82em !important;
        font-weight: 700 !important;
      }

      /* Celková cena */
      .total-price,
      .cart-total,
      .price-total {
        font-size: 1.9em !important;
        font-weight: 900 !important;
        color: #1a1a1a !important;
        letter-spacing: -0.02em !important;
      }

      /* === TLAČÍTKA === */
      /* Zpět do obchodu */
      .btn-back,
      a.btn-back,
      [data-testid="cartBackButton"] {
        background: #fff !important;
        color: #555 !important;
        border: 1.5px solid #e0e0e0 !important;
        border-radius: 10px !important;
        padding: 13px 24px !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-decoration: none !important;
        letter-spacing: 0.02em !important;
        transition: all 0.2s !important;
        text-transform: none !important;
      }
      .btn-back:hover, a.btn-back:hover {
        border-color: #ccc !important;
        color: #1a1a1a !important;
        background: #f8f8f8 !important;
      }

      /* Pokračovat */
      .btn-cart-checkout,
      .btn-order,
      [data-testid="cartCheckoutButton"] {
        background: #f5a623 !important;
        color: #1a1a1a !important;
        border: none !important;
        border-radius: 10px !important;
        padding: 13px 28px !important;
        font-weight: 800 !important;
        font-size: 13px !important;
        letter-spacing: 0.06em !important;
        text-transform: uppercase !important;
        transition: all 0.2s !important;
        cursor: pointer !important;
      }
      .btn-cart-checkout:hover,
      .btn-order:hover {
        background: #d4891a !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 16px rgba(245,166,35,0.35) !important;
      }

      /* === SKRYTÍ JÁRA CIMRMAN === */
      [data-testid="cartCustomerInfo"],
      [data-testid="cartContactInfo"],
      .cart-customer-info,
      .customer-data {
        display: none !important;
      }

      /* === PRÁZDNÝ KOŠÍK === */
      #bi-empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 20px 60px;
        text-align: center;
        animation: fadeUp 0.5s ease;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      #bi-empty-cart .ec-bag {
        width: 100px;
        height: 100px;
        background: #fff8ee;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
        border: 2px solid #fde8bb;
      }

      #bi-empty-cart h2 {
        font-size: 1.8em !important;
        font-weight: 900 !important;
        color: #1a1a1a !important;
        margin: 0 0 14px !important;
        letter-spacing: -0.02em !important;
      }

      #bi-empty-cart p {
        color: #999;
        font-size: 0.95em;
        line-height: 1.7;
        max-width: 380px;
        margin: 0 0 40px;
      }

      #bi-empty-cart .ec-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
      }

      #bi-empty-cart .ec-btn-primary {
        background: #f5a623;
        color: #1a1a1a;
        font-weight: 800;
        font-size: 14px;
        padding: 14px 28px;
        border-radius: 10px;
        text-decoration: none;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      #bi-empty-cart .ec-btn-primary:hover {
        background: #d4891a;
        color: #1a1a1a;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(245,166,35,0.3);
      }

      #bi-empty-cart .ec-btn-secondary {
        background: #fff;
        color: #555;
        font-weight: 600;
        font-size: 14px;
        padding: 14px 28px;
        border-radius: 10px;
        text-decoration: none;
        border: 1.5px solid #e0e0e0;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      #bi-empty-cart .ec-btn-secondary:hover {
        border-color: #bbb;
        color: #1a1a1a;
        background: #f8f8f8;
      }

      #bi-empty-cart .ec-suggestions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        max-width: 560px;
        margin-top: 52px;
        width: 100%;
      }

      #bi-empty-cart .ec-suggestion {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 12px;
        padding: 18px 14px;
        text-align: center;
        text-decoration: none;
        transition: all 0.2s;
      }
      #bi-empty-cart .ec-suggestion:hover {
        border-color: #f5a623;
        background: #fffcf5;
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(245,166,35,0.15);
      }

      #bi-empty-cart .ec-suggestion span {
        display: block;
        font-size: 22px;
        margin-bottom: 8px;
      }

      #bi-empty-cart .ec-suggestion strong {
        display: block;
        font-size: 12px;
        font-weight: 700;
        color: #1a1a1a;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      #bi-empty-cart .ec-suggestion em {
        display: block;
        font-size: 11px;
        font-style: normal;
        color: #aaa;
        margin-top: 3px;
      }

      @media (max-width: 600px) {
        #bi-empty-cart .ec-suggestions { grid-template-columns: 1fr 1fr; }
        #bi-empty-cart { padding: 60px 16px 40px; }
        #bi-empty-cart h2 { font-size: 1.5em !important; }
      }
    `;
    document.head.appendChild(style);

    // =============================================
    // SKRYTÍ JÁRA CIMRMAN
    // =============================================
    function hideContactInfo() {
      document.querySelectorAll('*').forEach(function(el) {
        if (el.childElementCount > 0) return;
        var t = el.textContent.trim();
        if (t.length < 3 || t.length > 100) return;
        if (
          /cimrman/i.test(t) ||
          /jára/i.test(t) ||
          /^\+?\d[\d\s\-]{7,}$/.test(t)
        ) {
          var box = el.closest('.cart-customer-info, .customer-data, [class*="contact-info"], [class*="customer"]');
          if (box) { box.style.display = 'none'; return; }
          var p = el.parentElement;
          if (p && p !== document.body) p.style.display = 'none';
        }
      });
    }
    hideContactInfo();
    setTimeout(hideContactInfo, 800);

    // =============================================
    // PRÁZDNÝ KOŠÍK
    // =============================================
    var isEmpty = document.querySelector(
      '.cart-empty, [class*="empty-cart"], [data-testid="cartEmpty"], .page-cart-empty'
    );
    // také detekce – žádné řádky v tabulce
    var cartTable = document.querySelector('.table-cart tbody');
    if (!isEmpty && cartTable && cartTable.querySelectorAll('tr').length === 0) {
      isEmpty = cartTable.closest('section, .cart-content, main') || cartTable.parentElement;
    }

    if (isEmpty) {
      var ec = document.createElement('div');
      ec.id = 'bi-empty-cart';
      ec.innerHTML = `
        <div class="ec-bag">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
        <h2>Košík je prázdný</h2>
        <p>Zatím jste nevybrali žádný produkt. Prohlédněte si naši nabídku malotraktorů, minibagr nebo příslušenství.</p>
        <div class="ec-actions">
          <a href="/malotraktory/" class="ec-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Malotraktory
          </a>
          <a href="/minibagry-2/" class="ec-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Minibagry
          </a>
        </div>
        <div class="ec-suggestions">
          <a href="/malotraktory/" class="ec-suggestion">
            <span>🚜</span>
            <strong>Malotraktory</strong>
            <em>Kubota, Iseki, Yanmar</em>
          </a>
          <a href="/minibagry-2/" class="ec-suggestion">
            <span>🏗️</span>
            <strong>Minibagry</strong>
            <em>Rhinoceros</em>
          </a>
          <a href="/prislusenstvi/" class="ec-suggestion">
            <span>🔧</span>
            <strong>Příslušenství</strong>
            <em>Rotavátory, pluhy…</em>
          </a>
        </div>
      `;
      isEmpty.innerHTML = '';
      isEmpty.appendChild(ec);
    }

  });
})();
