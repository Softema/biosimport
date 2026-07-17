// BiosImport - Upozornění: ověřit dostupnost telefonicky před osobní návštěvou pobočky
(function() {
  document.addEventListener('DOMContentLoaded', function() {

    // 1) Stránka detailu produktu - pod tlačítkem "Do košíku"
    if (document.body.classList.contains('type-detail')) {
      var cartBlock = document.querySelector('.p-to-cart-block');
      if (cartBlock && !document.getElementById('pobocka-upozorneni')) {
        var notice = document.createElement('div');
        notice.id = 'pobocka-upozorneni';
        notice.style.cssText = 'margin-top:14px;background:#fff3e0;border-left:3px solid #f5a623;padding:10px 14px;font-size:.85em;color:#555;border-radius:6px;line-height:1.5;';
        notice.innerHTML = '📞 Před osobní návštěvou si prosím telefonicky ověřte dostupnost zboží na dané pobočce.';
        cartBlock.parentNode.insertBefore(notice, cartBlock.nextSibling);
      }
    }

    // 2) Stránka Pobočky - nad seznamem poboček
    if (window.location.pathname.indexOf('/pobocky') !== -1) {
      var wrapper = document.querySelector('.bios-branches-wrapper');
      if (wrapper && !document.getElementById('pobocka-upozorneni-str')) {
        var notice2 = document.createElement('div');
        notice2.id = 'pobocka-upozorneni-str';
        notice2.style.cssText = 'max-width:1100px;margin:0 auto 24px;background:#fff3e0;border-left:3px solid #f5a623;padding:12px 16px;font-size:.9em;color:#555;border-radius:6px;';
        notice2.innerHTML = '📞 Před osobní návštěvou si prosím telefonicky ověřte dostupnost zboží na dané pobočce.';
        wrapper.parentNode.insertBefore(notice2, wrapper);
      }
    }

  });
})();
