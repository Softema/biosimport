// BiosImport - Custom Footer
// GitHub: Softema/biosimport

document.addEventListener('DOMContentLoaded', function() {
    // Vytvoření elementu nové patičky
    var customFooter = document.createElement('footer');
    customFooter.id = 'custom-bios-footer';
    customFooter.innerHTML = 
      '<style>' +
      '#custom-bios-footer { background-color: #cccccc; color: #1a1a1a; padding: 60px 20px; font-family: "Source Sans 3", sans-serif; font-size: 15px; }' +
      '#custom-bios-footer .f-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }' +
      '@media(max-width: 900px) { #custom-bios-footer .f-container { grid-template-columns: repeat(2, 1fr); } }' +
      '@media(max-width: 600px) { #custom-bios-footer .f-container { grid-template-columns: 1fr; } }' +
      '#custom-bios-footer h4 { font-size: 1.1em; font-weight: 700; color: #1a1a1a; margin-bottom: 20px; text-transform: none; border-bottom: 2px solid #a0a0a0; padding-bottom: 8px; display: inline-block; }' +
      '#custom-bios-footer ul { list-style: none; padding: 0; margin: 0; }' +
      '#custom-bios-footer ul li { margin-bottom: 10px; }' +
      '#custom-bios-footer ul li a { color: #1a1a1a !important; text-decoration: none; font-weight: 500; transition: color 0.2s; }' +
      '#custom-bios-footer ul li a:hover { color: #f5a623 !important; }' +
      '#custom-bios-footer .f-contact-block { margin-bottom: 20px; }' +
      '#custom-bios-footer .f-contact-block strong { display: block; margin-bottom: 4px; color: #000; }' +
      '#custom-bios-footer .f-note { font-size: 0.85em; background: rgba(255,255,255,0.4); padding: 8px; border-radius: 6px; margin-bottom: 12px; font-weight: 600; }' +
      '#custom-bios-footer .f-bottom { border-top: 1px solid #b0b0b0; text-align: center; padding-top: 20px; margin-top: 40px; font-size: 0.9em; color: #444; }' +
      '</style>' +
      '<div class="f-container">' +
        
        '' +
        '<div class="f-col">' +
          '<h4>Informace pro vás</h4>' +
          '<ul>' +
            '<li><a href="/o-nas/">O nás</a></li>' +
            '<li><a href="/kontakty/">Pobočky</a></li>' +
            '<li><a href="/kontakty/">Kontakt</a></li>' +
          '</ul>' +
        '</div>' +

        '' +
        '<div class="f-col">' +
          '<h4>Kategorie produktů</h4>' +
          '<ul>' +
            '<li><a href="/malotraktory/">Malotraktory</a></li>' +
            '<li><a href="/minibagry/">Minibagry</a></li>' +
            '<li><a href="/prislusenstvi/">Příslušenství</a></li>' +
          '</ul>' +
        '</div>' +

        '' +
        '<div class="f-col">' +
          '<h4>Kontakt</h4>' +
          '<div class="f-note">ℹ️ Pouze pro fakturační účely – nikoli pro doručování zboží!</div>' +
          '<div class="f-contact-block">' +
            '<strong>BiosImport s.r.o.</strong>' +
            'Sídlo firmy, korespondenční adresa:<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>' +
            'IČ: 17543169, DIČ: CZ17543169' +
          '</div>' +
          '<div class="f-contact-block">' +
            '📞 <a href="tel:+420735135242" style="color:#1a1a1a;font-weight:bold;text-decoration:none;">+420 735 135 242</a><br>' +
            '<span style="font-size:0.9em;color:#444;">Prodej malotraktorů</span>' +
          '</div>' +
          '<div class="f-contact-block">' +
            '📞 <a href="tel:+420735199881" style="color:#1a1a1a;font-weight:bold;text-decoration:none;">+420 735 199 881</a><br>' +
            '<span style="font-size:0.9em;color:#444;">Prodej příslušenství, zákaznický servis</span>' +
          '</div>' +
          '<div class="f-contact-block">' +
            '✉ <a href="mailto:info@biosimport.cz" style="color:#1a1a1a;font-weight:bold;text-decoration:none;">info@biosimport.cz</a>' +
          '</div>' +
        '</div>' +

        '' +
        '<div class="f-col">' +
          '<h4>Facebook</h4>' +
          '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FBiosImport%2F100086745026691%2F&tabs&width=280&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>' +
        '</div>' +
      '</div>' +
      '<div class="f-bottom">© ' + new Date().getFullYear() + ' BiosImport s.r.o. Všechna práva vyhrazena.</div>';

    // Připojení na konec body (jelikož starý footer skrýváme přes CSS)
    document.body.appendChild(customFooter);
});
