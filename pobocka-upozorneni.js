// BiosImport - Upozornění: ověřit dostupnost telefonicky před osobní návštěvou pobočky
// Zobrazuje se pod tlačítkem "Do košíku" na stránce detailu produktu
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    if (!document.body.classList.contains('type-detail')) return;
 
    var cartBlock = document.querySelector('.p-to-cart-block');
    if (!cartBlock) return;
    if (document.getElementById('pobocka-upozorneni')) return; // nepřidávat duplicitně
 
    var notice = document.createElement('div');
    notice.id = 'pobocka-upozorneni';
    notice.style.cssText = 'margin-top:14px;background:#fff3e0;border-left:3px solid #f5a623;padding:10px 14px;font-size:.85em;color:#555;border-radius:6px;line-height:1.5;';
    notice.innerHTML = '📞 Před osobní návštěvou si prosím telefonicky ověřte dostupnost zboží na dané pobočce.';
    cartBlock.parentNode.insertBefore(notice, cartBlock.nextSibling);
  });
})();
