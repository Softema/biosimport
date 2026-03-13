// BiosImport - Homepage sekce
// GitHub: Softema/biosimport

(function() {
  var CDN = 'https://cdn.jsdelivr.net/gh/Softema/biosimport@main/';

  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path !== '/' && path !== '/uvod/' && path !== '/uvod' && path !== '') return;

    var footer = document.querySelector('#footer, footer, .footer, [id*="footer"], [class*="footer"]');
    function vloz(el) {
      if (footer) footer.parentNode.insertBefore(el, footer);
      else document.body.appendChild(el);
    }

    // =============================================
    // 1. O NÁS
    // =============================================
    var onas = document.createElement('section');
    onas.id = 'onas-sekce';
    onas.innerHTML =
      '<style>' +
      '#onas-sekce{background:#fff;padding:60px 20px;font-family:inherit;}' +
      '#onas-sekce .oh{text-align:center;margin-bottom:36px;}' +
      '#onas-sekce .oh h2{font-size:2em;font-weight:800;color:#1a1a1a;margin:0 0 16px;}' +
      '#onas-sekce .oh h2 span{color:#f5a623;}' +
      '#onas-sekce .oh p{color:#555;max-width:800px;margin:0 auto;line-height:1.7;}' +
      '#onas-sekce .ofoto{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1100px;margin:0 auto 40px;}' +
      '@media(max-width:700px){#onas-sekce .ofoto{grid-template-columns:1fr;}}' +
      '#onas-sekce .ofoto img{width:100%;height:220px;object-fit:cover;border-radius:10px;}' +
      '#onas-sekce .osloupce{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;max-width:1100px;margin:0 auto;}' +
      '@media(max-width:700px){#onas-sekce .osloupce{grid-template-columns:1fr;}}' +
      '#onas-sekce .osloupec h3{font-size:1.15em;font-weight:700;color:#1a1a1a;margin:0 0 16px;}' +
      '#onas-sekce .osloupec p,#onas-sekce .osloupec ul{font-size:.92em;color:#444;line-height:1.7;margin:0 0 12px;}' +
      '#onas-sekce .osloupec ul{padding-left:20px;}' +
      '#onas-sekce .osloupec ul li{margin-bottom:4px;}' +
      '#onas-sekce .skryt{overflow:hidden;transition:max-height .4s ease;}' +
      '#onas-sekce .btn-vice{background:none;border:none;cursor:pointer;color:#555;font-size:.9em;padding:0;margin-top:8px;font-family:inherit;display:flex;align-items:center;gap:4px;}' +
      '#onas-sekce .btn-vice:hover{color:#1a1a1a;}' +
      '#onas-sekce .sipka{display:inline-block;transition:transform .3s;}' +
      '#onas-sekce .btn-vice.otevreno .sipka{transform:rotate(180deg);}' +
      '</style>' +
      '<div class="oh"><h2>Jsme BiosImport, <span>prodáváme a servisujeme malotraktory</span></h2><p>Firma BiosImport s.r.o. se zabývá dovozem repasovaných japonských malotraktorů osvědčených tradičních značek Kubota, Iseki, Yanmar...</p></div>' +
      '<div class="ofoto"><img src="https://www.biosimport.cz/wp-content/uploads/2024/09/IMG_0189.jpg"><img src="https://www.biosimport.cz/wp-content/uploads/2025/03/IMG_9395.jpeg"><img src="https://www.biosimport.cz/wp-content/uploads/2025/01/IMG_5212.jpg"></div>' +
      '<div class="osloupce">' +
      '<div class="osloupec"><h3>Naše malotraktory</h3><p>Nabízíme malotraktory, které prošly důkladnou a profesionální repasí.</p><div class="skryt" id="onas-text1" style="max-height:0;"><ul><li>3bodovým závěsem</li><li>závěsným okem</li><li>vývodovou hřídelí (PTO)</li></ul></div><button class="btn-vice" onclick="(function(b){var t=document.getElementById(\'onas-text1\');var o=b.classList.toggle(\'otevreno\');t.style.maxHeight=o?t.scrollHeight+\'px\':\'0\';b.querySelector(\'.label\').textContent=o?\'Méně\':\'Více\';})(this)"><span class="label">Více</span> <span class="sipka">∧</span></button></div>' +
      '<div class="osloupec"><h3>Repase</h3><ul><li>kompletní rozebrání, kontrola motoru a převodovky</li><li>nové pístní kroužky</li></ul><div class="skryt" id="onas-text2" style="max-height:0;"><ul><li>nové náplně</li><li>nové filtry</li></ul></div><button class="btn-vice" onclick="(function(b){var t=document.getElementById(\'onas-text2\');var o=b.classList.toggle(\'otevreno\');t.style.maxHeight=o?t.scrollHeight+\'px\':\'0\';b.querySelector(\'.label\').textContent=o?\'Méně\':\'Více\';})(this)"><span class="label">Více</span> <span class="sipka">∧</span></button></div>' +
      '<div class="osloupec"><h3>Záruka a servis</h3><ul><li>roční záruku</li><li>pozáruční servis</li><li>dovoz náhradních dílů</li></ul></div>' +
      '</div>';
    vloz(onas);

    // =============================================
    // 2. RECENZE (BOD 3) - Šipky a skrytý posuvník
    // =============================================
    var recenze = document.createElement('section');
    recenze.id = 'recenze-sekce';
    var hvezdy_svg = '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>';
    recenze.innerHTML =
      '<style>' +
      '#recenze-sekce{background:#f8f8f8;padding:60px 20px;font-family:inherit;overflow:hidden;}' +
      '#recenze-sekce .rh{text-align:center;margin-bottom:40px;}' +
      '#recenze-sekce .rh h2{font-size:2.2em;font-weight:800;color:#1a1a1a;margin:0;}' +
      '#recenze-sekce .rw{position:relative;max-width:1100px;margin:0 auto 24px;}' +
      '#recenze-sekce .rg{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:24px;padding-bottom:10px;scroll-behavior:smooth;scrollbar-width:none;}' +
      '#recenze-sekce .rg::-webkit-scrollbar{display:none;}' +
      '#recenze-sekce .nav-btn{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;background:#fff;border:1px solid #eee;border-radius:50%;font-size:20px;color:#333;cursor:pointer;z-index:10;box-shadow:0 4px 10px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;transition:background 0.2s;}' +
      '#recenze-sekce .nav-btn:hover{background:#f8f8f8;}' +
      '#recenze-sekce .nav-left{left:-22px;}' +
      '#recenze-sekce .nav-right{right:-22px;}' +
      '@media(max-width:1150px){#recenze-sekce .nav-btn{display:none;}}' +
      '#recenze-sekce .rk{background:#fff;border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.07);flex:0 0 calc(33.333% - 16px);min-width:300px;scroll-snap-align:start;}' +
      '#recenze-sekce .rktop{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;}' +
      '#recenze-sekce .rautor{display:flex;align-items:center;gap:12px;}' +
      '#recenze-sekce .ravatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1em;color:#fff;flex-shrink:0;}' +
      '#recenze-sekce .rjmeno{font-weight:700;font-size:.95em;color:#1a1a1a;}' +
      '#recenze-sekce .rdoba{font-size:.82em;color:#888;margin-top:2px;}' +
      '#recenze-sekce .rhvezdy{color:#f5a623;font-size:1.1em;margin-bottom:10px;}' +
      '#recenze-sekce .rtext{font-size:.9em;color:#444;line-height:1.6;}' +
      '#recenze-sekce .gsummary{text-align:center;font-size:.95em;color:#1a1a1a;margin-top:8px;}' +
      '</style>' +
      '<div class="rh"><h2>Zpětná vazba zákazníků</h2></div>' +
      '<div class="rw">' +
        '<button class="nav-btn nav-left" onclick="document.getElementById(\'rg-slider\').scrollBy({left:-320})">❮</button>' +
        '<div class="rg" id="rg-slider">' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#7b4fa6;">J</div><div><div class="rjmeno">Jaroslav Opravil</div><div class="rdoba">před 8 měsíci</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">Na doporučení majitele firmy, jsem si koupil renovovaný traktor Yanmar f18D, se kterým jsem velmi spokojen. Splnil všechny mé představy...</div></div>' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#d9534f;">R</div><div><div class="rjmeno">Radim Ptáček</div><div class="rdoba">před 3 měsíci</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">U BIOS Import jsem pořídil malotraktor a musím říct, že od prvního kontaktu až po převzetí bylo všechno naprosto perfektní. Oceňuji profesionální a velmi vstřícné...</div></div>' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#1e8c5a;">S</div><div><div class="rjmeno">Sao Rysy</div><div class="rdoba">před 9 měsíci</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">Maximální spokojenost a profesionální přístup prodejce. Z celé řady prodejců, jsem jsi lépe vybrat nemohl. Doporučuji</div></div>' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#e83e8c;">A</div><div><div class="rjmeno">Anna Capkova</div><div class="rdoba">před 4 měsíci</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">Dobrá komunikace, seriózní přístup, vstřícné jednání. L.S.</div></div>' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#0275d8;"><img src="https://i.pravatar.cc/100?img=11" style="border-radius:50%;width:100%;"></div><div><div class="rjmeno">mirek</div><div class="rdoba">před 1 měsícem</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">Doporučuji navštívit . Ochotně vysvětlí,pujči , přesvedou 👍</div></div>' +
          '<div class="rk"><div class="rktop"><div class="rautor"><div class="ravatar" style="background:#555;">J</div><div><div class="rjmeno">Josef Novák</div><div class="rdoba">před 9 měsíci</div></div></div>'+hvezdy_svg+'</div><div class="rhvezdy">★★★★★ <span>✓</span></div><div class="rtext">Firmu BiosImport mohu jenom doporučit. Vstřícnost, ochota, profesionalita a trpělivost se zákazníkem je v dnešní době vzácná.</div></div>' +
        '</div>' +
        '<button class="nav-btn nav-right" onclick="document.getElementById(\'rg-slider\').scrollBy({left:320})">❯</button>' +
      '</div>' +
      '<p class="gsummary"><strong>Google</strong> – souhrnné hodnocení <strong>5.0</strong> z 5, na základě <strong>39 hodnocení</strong></p>';
    vloz(recenze);

    // =============================================
    // 3. PARTNEŘI
    // =============================================
    var partneri = document.createElement('section');
    partneri.id = 'partneri-sekce';
    partneri.innerHTML =
      '<style>' +
      '#partneri-sekce{background:#f0f0f0;padding:50px 20px;text-align:center;font-family:inherit;}' +
      '#partneri-sekce h2{font-size:2em;font-weight:800;color:#1a1a1a;margin:0 0 40px;}' +
      '#partneri-sekce .pg{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:40px 60px;max-width:1100px;margin:0 auto;}' +
      '#partneri-sekce .pl img{height:60px;width:auto;max-width:200px;object-fit:contain;filter:grayscale(30%);opacity:.85;transition:all .3s;}' +
      '#partneri-sekce .pl img:hover{filter:grayscale(0%);opacity:1;transform:scale(1.05);}' +
      '</style>' +
      '<h2>Naši partneři</h2>' +
      '<div class="pg">' +
        '<div class="pl"><img src="' + CDN + 'zeppelin_logo.svg" alt="Zeppelin"></div>' +
        '<div class="pl"><img src="' + CDN + 'logo_galaxy.webp" alt="Galaxy"></div>' +
        '<div class="pl"><img src="' + CDN + 'rhinoceros-tractor-logo.webp" alt="Rhinoceros"></div>' +
        '<div class="pl"><img src="' + CDN + 'LOGO-VARES.webp" alt="Vares"></div>' +
      '</div>';
    vloz(partneri);

    // =============================================
    // 4. POBOČKY (BOD 4) - Sjednocení výšky map
    // =============================================
    var pobocky = document.createElement('section');
    pobocky.id = 'pobocky-sekce';
    pobocky.innerHTML =
      '<style>' +
      '#pobocky-sekce{background:#f8f8f8;padding:60px 20px;font-family:inherit;}' +
      '#pobocky-sekce .ph{text-align:center;margin-bottom:40px;}' +
      '#pobocky-sekce .ph h2{font-size:2.2em;font-weight:800;color:#1a1a1a;margin:0 0 10px;}' +
      '#pobocky-sekce .pbg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:0 auto;}' +
      '@media(max-width:900px){#pobocky-sekce .pbg{grid-template-columns:1fr;}}' +
      '#pobocky-sekce .pbk{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08); display:flex; flex-direction:column;}' +
      '#pobocky-sekce .pbi{padding:24px;}' +
      '#pobocky-sekce .pbi h3{font-size:1.4em;font-weight:700;color:#1a1a1a;margin:0 0 8px;}' +
      '#pobocky-sekce .pbi .pp{color:#555;font-size:.9em;margin:0 0 14px;}' +
      '#pobocky-sekce .pbi .pa{color:#f5a623;font-weight:600;font-size:.95em;margin:0 0 14px;}' +
      '#pobocky-sekce .pbm{flex-grow:1; display:flex; flex-direction:column;}' +
      '#pobocky-sekce .pbm iframe{display:block;width:100%;flex-grow:1;border:none;min-height:240px;}' +
      '</style>' +
      '<div class="ph"><h2>Navštivte naše pobočky</h2><p>Vyzkoušejte si naše traktory osobně</p></div>' +
      '<div class="pbg">' +
        '<div class="pbk"><div class="pbi"><h3>Herálec</h3><p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství a servis.</p><p class="pa">📍 Farma Herálec 134</p><div class="po"><strong>Otevírací doba:</strong><br>Po – Pá 8:00 – 14:00</div></div><div class="pbm"><iframe src="https://maps.google.com/maps?q=Farma%20Her%C3%A1lec%20134&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy"></iframe></div></div>' +
        '<div class="pbk"><div class="pbi"><h3>Hradec Králové</h3><p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství.</p><p class="pa">📍 Vlčkovická 223/1a</p><div class="po"><strong>Otevírací doba:</strong><br>Po – St – Pá 8:00 – 16:00<br>Út – Čt 10:00 – 18:00</div></div><div class="pbm"><iframe src="https://maps.google.com/maps?q=Vl%C4%8Dkovick%C3%A1%20223%2F1a,%20Pla%C4%8Dice&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy"></iframe></div></div>' +
        '<div class="pbk"><div class="pbi"><h3>Bratislava</h3><p class="pp">Výdejní místo.</p><p class="pa">📍 Stará Vajnorská</p><div class="po"><strong>Otevírací doba:</strong><br>Dle telefonické domluvy.</div></div><div class="pbm"><iframe src="https://maps.google.com/maps?q=Star%C3%A1%20Vajnorsk%C3%A1,%20Bratislava&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy"></iframe></div></div>' +
      '</div>';
    vloz(pobocky);

    // =============================================
    // 5. POPTÁVKOVÝ FORMULÁŘ (BOD 4) - PŮVODNÍ VELKÁ VERZE
    // =============================================
    var poptavka = document.createElement('section');
    poptavka.id = 'poptavka-sekce';
    poptavka.innerHTML =
      '<style>' +
      '#poptavka-sekce{background:#f0f0f0;padding:60px 20px;font-family:inherit;}' +
      '#poptavka-sekce .pw{display:grid;grid-template-columns:1fr 1fr;gap:30px;max-width:1100px;margin:0 auto;}' +
      '@media(max-width:768px){#poptavka-sekce .pw{grid-template-columns:1fr;}}' +
      '#poptavka-sekce .pi,#poptavka-sekce .pf{background:#fff;border-radius:12px;padding:40px;box-shadow:0 2px 16px rgba(0,0,0,.08);}' +
      '#poptavka-sekce h2{font-size:1.8em;font-weight:800;color:#1a1a1a;margin:0 0 16px;}' +
      '#poptavka-sekce .perex{font-weight:600;color:#1a1a1a;margin:0 0 28px;line-height:1.5;}' +
      '#poptavka-sekce .tr{margin-bottom:4px;}' +
      '#poptavka-sekce .tr a{color:#f5a623!important;font-weight:700;font-size:1.05em;text-decoration:none!important;}' +
      '#poptavka-sekce .tp{color:#666;font-size:.88em;margin:2px 0 16px 26px;}' +
      '#poptavka-sekce .er{margin:4px 0 28px;}' +
      '#poptavka-sekce .er a{color:#f5a623!important;font-weight:600;text-decoration:none!important;}' +
      '#poptavka-sekce .fak{border-top:1px solid #eee;padding-top:20px;}' +
      '#poptavka-sekce .fak h3{font-size:1em;font-weight:700;margin:0 0 10px;}' +
      '#poptavka-sekce .upoz{background:#e8f4fd;border-radius:6px;padding:10px 14px;font-size:.85em;font-weight:600;margin-bottom:10px;}' +
      '#poptavka-sekce .adr{font-size:.9em;color:#555;line-height:1.7;}' +
      '#poptavka-sekce .fg{margin-bottom:14px;}' +
      '#poptavka-sekce .fg label{display:block;font-size:.9em;font-weight:500;margin-bottom:5px;color:#1a1a1a;}' +
      '#poptavka-sekce .fg input,#poptavka-sekce .fg textarea{width:100%;border:1.5px solid #e0e0e0;border-radius:8px;padding:12px 16px;font-size:.95em;background:#fafafa;box-sizing:border-box;font-family:inherit;}' +
      '#poptavka-sekce .fg input:focus,#poptavka-sekce .fg textarea:focus{border-color:#f5a623;outline:none;background:#fff;}' +
      '#poptavka-sekce .fg textarea{min-height:120px;resize:vertical;}' +
      '#poptavka-sekce .souhlas{display:flex;align-items:flex-start;gap:8px;font-size:.88em;color:#555;margin:14px 0;}' +
      '#poptavka-sekce .souhlas input{margin-top:2px;flex-shrink:0;}' +
      '#poptavka-sekce .btn-send{width:100%;background:#f5a623;color:#1a1a1a;font-weight:700;font-size:1em;padding:16px;border:none;border-radius:8px;cursor:pointer;text-transform:none;font-family:inherit;}' +
      '#poptavka-sekce .btn-send:hover{background:#e09610;}' +
      '#poptavka-sekce .uspech{display:none;text-align:center;padding:40px 20px;color:#2d7a2d;font-weight:600;font-size:1.1em;}' +
      '#poptavka-sekce .chyba{display:none;color:#cc0000;font-size:.88em;margin-top:8px;text-align:center;}' +
      '</style>' +
      '<div class="pw">' +
        '<div class="pi">' +
          '<h2>Poptávkový formulář</h2>' +
          '<p class="perex">V případě zájmu o naše produkty nám napište nebo rovnou volejte.</p>' +
          '<div class="tr">📞 <a href="tel:+420735135242">+420 735 135 242</a></div>' +
          '<p class="tp">Prodej malotraktorů</p>' +
          '<div class="tr">📞 <a href="tel:+420735199881">+420 735 199 881</a></div>' +
          '<p class="tp">Prodej příslušenství, zákaznický servis</p>' +
          '<div class="er">✉ <a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div>' +
          '<div class="fak">' +
            '<h3>Fakturační adresa</h3>' +
            '<div class="upoz">ℹ️ Pouze pro fakturační účely – nikoli pro doručování zboží!</div>' +
            '<div class="adr">Sídlo firmy, korespondenční adresa:<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>IČ: 17543169, DIČ: CZ17543169</div>' +
          '</div>' +
        '</div>' +
        '<div class="pf">' +
          '<div class="uspech" id="p-uspech">✅ Děkujeme! Poptávka odeslána. Ozveme se co nejdříve.</div>' +
          '<form id="p-form" action="https://formspree.io/f/mbdazjlz" method="POST">' +
            '<div class="fg"><label>Jméno a příjmení</label><input type="text" name="jmeno" required></div>' +
            '<div class="fg"><label>E-mail</label><input type="email" name="email" required></div>' +
            '<div class="fg"><label>Mobil</label><input type="tel" name="mobil"></div>' +
            '<div class="fg"><label>Poznámka</label><textarea name="message"></textarea></div>' +
            '<label class="souhlas"><input type="checkbox" required> Souhlasím se zpracováním osobních údajů *</label>' +
            '<button type="submit" class="btn-send">Odeslat poptávku</button>' +
            '<div class="chyba" id="p-chyba">Nepodařilo se odeslat. Zkuste to prosím znovu.</div>' +
          '</form>' +
        '</div>' +
      '</div>';
    vloz(poptavka);

    document.getElementById('p-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = this.querySelector('.btn-send');
      btn.textContent = 'Odesílám...';
      btn.disabled = true;
      fetch('https://formspree.io/f/mbdazjlz', {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      }).then(function(r) {
        if (r.ok) {
          document.getElementById('p-form').style.display = 'none';
          document.getElementById('p-uspech').style.display = 'block';
        } else {
          document.getElementById('p-chyba').style.display = 'block';
          btn.disabled = false;
          btn.textContent = 'Odeslat poptávku';
        }
      });
    });

  });
})();
