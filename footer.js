// BiosImport - Custom Footer
// GitHub: Softema/biosimport

(function() {
  document.addEventListener('DOMContentLoaded', function() {

    // Schovat výchozí Shoptet footer obsah, zachovat element
    var shoptetFooter = document.querySelector('#footer, footer.footer, .footer');
    if (!shoptetFooter) return;

    // Vložit custom footer PŘED shoptet footer
    var customFooter = document.createElement('div');
    customFooter.id = 'biosimport-footer';
    customFooter.innerHTML =
      '<style>' +
      '#biosimport-footer{background:#1a1a1a;color:#ccc;font-family:inherit;padding:60px 20px 0;}' +
      '#biosimport-footer .fg{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;max-width:1200px;margin:0 auto;}' +
      '@media(max-width:1000px){#biosimport-footer .fg{grid-template-columns:repeat(2,1fr);}}' +
      '@media(max-width:600px){#biosimport-footer .fg{grid-template-columns:1fr;}}' +
      '#biosimport-footer .fc h3{color:#fff;font-size:1em;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin:0 0 20px;padding-bottom:10px;border-bottom:2px solid #f5a623;}' +
      '#biosimport-footer .fc ul{list-style:none;padding:0;margin:0;}' +
      '#biosimport-footer .fc ul li{margin-bottom:10px;}' +
      '#biosimport-footer .fc ul li a{color:#ccc;text-decoration:none;font-size:.92em;transition:color .2s;}' +
      '#biosimport-footer .fc ul li a:hover{color:#f5a623;}' +
      '#biosimport-footer .kontakt-item{display:flex;gap:10px;margin-bottom:12px;font-size:.88em;line-height:1.5;color:#ccc;}' +
      '#biosimport-footer .kontakt-item .ico{font-size:1.1em;flex-shrink:0;margin-top:2px;}' +
      '#biosimport-footer .kontakt-item a{color:#f5a623;text-decoration:none;}' +
      '#biosimport-footer .kontakt-item a:hover{color:#fff;}' +
      '#biosimport-footer .kontakt-upoz{background:rgba(255,255,255,.06);border-left:3px solid #f5a623;padding:8px 12px;font-size:.82em;color:#aaa;margin-bottom:16px;line-height:1.5;}' +
      '#biosimport-footer .kontakt-adresa{font-size:.88em;line-height:1.7;color:#aaa;}' +
      '#biosimport-footer .kontakt-ic{font-size:.82em;color:#888;margin-top:6px;}' +
      '#biosimport-footer .fb-link{display:inline-flex;align-items:center;gap:10px;background:#1877f2;color:#fff;text-decoration:none;border-radius:8px;padding:10px 18px;font-weight:600;font-size:.92em;transition:background .2s;margin-top:8px;}' +
      '#biosimport-footer .fb-link:hover{background:#1565c0;}' +
      '#biosimport-footer .fb-link svg{flex-shrink:0;}' +
      '#biosimport-footer .fb-followers{font-size:.8em;opacity:.85;display:block;margin-top:2px;}' +
      '#biosimport-footer .fbot{border-top:1px solid #333;margin-top:50px;padding:20px 0;max-width:1200px;margin-left:auto;margin-right:auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}' +
      '#biosimport-footer .fbot p{font-size:.82em;color:#666;margin:0;}' +
      '#biosimport-footer .fbot a{color:#666;text-decoration:none;}' +
      '#biosimport-footer .fbot a:hover{color:#f5a623;}' +
      '</style>' +

      '<div class="fg">' +

        // Sloupec 1 - Informace pro vás
        '<div class="fc">' +
          '<h3>Informace pro vás</h3>' +
          '<ul>' +
            '<li><a href="/uvod/">Domů</a></li>' +
            '<li><a href="/o-nas/">O nás</a></li>' +
            '<li><a href="/pobocky/">Pobočky</a></li>' +
            '<li><a href="/kontakty/">Kontakt</a></li>' +
          '</ul>' +
        '</div>' +

        // Sloupec 2 - Kategorie produktů
        '<div class="fc">' +
          '<h3>Kategorie produktů</h3>' +
          '<ul>' +
            '<li><a href="/malotraktory/">Malotraktory</a></li>' +
            '<li><a href="/minibagry/">Minibagry</a></li>' +
            '<li><a href="/prislusenstvi/">Příslušenství</a></li>' +
          '</ul>' +
        '</div>' +

        // Sloupec 3 - Kontakt
        '<div class="fc">' +
          '<h3>Kontakt</h3>' +
          '<div class="kontakt-upoz">ℹ️ Pouze pro fakturační účely – nikoli pro doručování zboží!</div>' +
          '<div class="kontakt-adresa">' +
            '<strong style="color:#fff;">BiosImport s.r.o.</strong><br>' +
            'B. Kobzinové 2020<br>' +
            '580 01 Havlíčkův Brod' +
          '</div>' +
          '<div class="kontakt-ic">IČ: 17543169 | DIČ: CZ17543169</div>' +
          '<div style="margin-top:16px;">' +
            '<div class="kontakt-item"><span class="ico">📞</span><div><a href="tel:+420735135242">+420 735 135 242</a><br>Prodej malotraktorů</div></div>' +
            '<div class="kontakt-item"><span class="ico">📞</span><div><a href="tel:+420735199881">+420 735 199 881</a><br>Prodej příslušenství, zákaznický servis</div></div>' +
            '<div class="kontakt-item"><span class="ico">✉</span><div><a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div></div>' +
          '</div>' +
        '</div>' +

        // Sloupec 4 - Facebook
        '<div class="fc">' +
          '<h3>Sledujte nás</h3>' +
          '<a href="https://www.facebook.com/people/BiosImport/100086745026691/" target="_blank" rel="noopener" class="fb-link">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>' +
            'BiosImport na Facebooku' +
          '</a>' +
          '<p style="font-size:.82em;color:#666;margin-top:14px;line-height:1.6;">Sledujte naše novinky, fotky nových traktorů a aktuální nabídku.</p>' +
        '</div>' +

      '</div>' +

      // Spodní lišta
      '<div class="fbot">' +
        '<p>© ' + new Date().getFullYear() + ' BiosImport s.r.o. Všechna práva vyhrazena.</p>' +
        '<p><a href="/ochrana-osobnich-udaju/">Ochrana osobních údajů</a> · <a href="/obchodni-podminky/">Obchodní podmínky</a></p>' +
      '</div>';

    shoptetFooter.parentNode.insertBefore(customFooter, shoptetFooter);

    // Skryjeme výchozí shoptet footer obsah
    shoptetFooter.style.display = 'none';
  });
})();
