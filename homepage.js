// BiosImport - Homepage sekce
(function() {
  var CDN = 'https://cdn.jsdelivr.net/gh/Softema/biosimport@main/';

  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path !== '/' && path !== '/uvod/' && path !== '/uvod' && path !== '') return;

    var footer = document.querySelector('#footer, footer.footer, .footer, [id*="footer"], [class*="footer"]');
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
      '#onas-sekce .btn-vice{background:none;border:none;cursor:pointer;color:#888;font-size:.88em;padding:4px 0;margin-top:6px;font-family:inherit;display:inline-flex;align-items:center;gap:4px;}' +
      '#onas-sekce .btn-vice:hover{color:#1a1a1a;}' +
      '#onas-sekce .sipka{display:inline-block;transition:transform .3s;font-size:.8em;}' +
      '#onas-sekce .btn-vice.otevreno .sipka{transform:rotate(180deg);}' +
      '#onas-sekce .firmy{display:flex;justify-content:center;align-items:center;gap:16px;margin-top:40px;padding-top:30px;border-top:1px solid #eee;}' +
      /* Badge – bílý text na zeleném pozadí */
      '#onas-sekce .badge{background:#4caf50;color:#fff!important;border-radius:20px;padding:8px 20px;font-weight:700;font-size:.95em;text-decoration:none!important;display:inline-block;transition:background .2s;border:none;}' +
      '#onas-sekce .badge:hover{background:#388e3c;color:#fff!important;}' +
      '</style>' +
      '<div class="oh">' +
        '<h2>Jsme BiosImport, <span>prodáváme a servisujeme malotraktory</span></h2>' +
        '<p>Firma BiosImport s.r.o. se zabývá dovozem repasovaných japonských malotraktorů osvědčených tradičních značek Kubota, Iseki, Yanmar. K malotraktorům nabízíme i prodej příslušenství od renomovaných výrobců.<br>Provozovny firmy se nacházejí v obci Herálec u Humpolce, 9km od sjezdu dálnice D1 (exit 90) a v Hradci Králové.</p>' +
      '</div>' +
      '<div class="ofoto">' +
        '<img src="https://www.biosimport.cz/wp-content/uploads/2024/09/IMG_0189.jpg" alt="Malotraktor">' +
        '<img src="https://www.biosimport.cz/wp-content/uploads/2025/03/IMG_9395.jpeg" alt="Repase">' +
        '<img src="https://www.biosimport.cz/wp-content/uploads/2025/01/IMG_5212.jpg" alt="Servis">' +
      '</div>' +
      '<div class="osloupce">' +
        '<div class="osloupec">' +
          '<h3>Naše malotraktory</h3>' +
          '<p>Nabízíme malotraktory, které prošly důkladnou a profesionální repasí. Na rozdíl od klasických traktorů vyžadují malotraktory nižší provozní náklady a spolehlivě pomohou v zemědělství, lesnictví, sadařství, vinařství a jiných oblastech.</p>' +
          '<div class="skryt" id="onas-text1" style="max-height:0;">' +
            '<p>Všechny repasované malotraktory jsou mimo jiné vybaveny:</p>' +
            '<ul><li>3bodovým závěsem</li><li>závěsným okem</li><li>vývodovou hřídelí (PTO)</li></ul>' +
            '<p>Velmi snadno k nim proto připojíte rotavátor, mulčovač, vozík, pluh, vyorávač, štípačku, kultivátor, sazeč nebo jiné příslušenství.</p>' +
          '</div>' +
          '<button class="btn-vice" onclick="(function(b){var t=document.getElementById(\'onas-text1\');var o=b.classList.toggle(\'otevreno\');t.style.maxHeight=o?t.scrollHeight+\'px\':\'0\';b.querySelector(\'.label\').textContent=o?\'Méně\':\'Více\';})(this)"><span class="label">Více</span><span class="sipka"> ▲</span></button>' +
        '</div>' +
        '<div class="osloupec">' +
          '<h3>Repase</h3>' +
          '<ul><li>kompletní rozebrání, kontrola motoru a převodovky</li><li>nové pístní kroužky</li><li>nové vložky válců</li><li>přetěsnění motoru a převodovky</li><li>nové těsnění v nábojích kol a vývodové hřídeli</li></ul>' +
          '<div class="skryt" id="onas-text2" style="max-height:0;">' +
            '<ul><li>nové náplně (chladicí kapalina, motorový olej, převodový olej)</li><li>nové filtry (olej, vzduch, nafta)</li><li>repase žhavení</li><li>repase elektroinstalace</li><li>repase alternátoru a startéru</li><li>repase chladiče, nové hadice a řemeny</li><li>repase brzd</li><li>nový potah sedačky</li><li>nová baterie</li><li>kompletně nový lak</li><li>nové pneumatiky</li></ul>' +
          '</div>' +
          '<button class="btn-vice" onclick="(function(b){var t=document.getElementById(\'onas-text2\');var o=b.classList.toggle(\'otevreno\');t.style.maxHeight=o?t.scrollHeight+\'px\':\'0\';b.querySelector(\'.label\').textContent=o?\'Méně\':\'Více\';})(this)"><span class="label">Více</span><span class="sipka"> ▲</span></button>' +
        '</div>' +
        '<div class="osloupec">' +
          '<h3>Záruka a servis</h3>' +
          '<p>Na naše malotraktory nabízíme:</p>' +
          '<ul><li>roční záruku</li><li>pozáruční servis</li><li>dovoz náhradních dílů</li><li>instalaci dodatečného hydraulického rozvaděče</li><li>instalaci u nás zakoupeného příslušenství</li></ul>' +
        '</div>' +
      '</div>' +
      '<div class="firmy"><a href="https://www.firmy.cz/detail/13388737-biosimport-heralec.html" target="_blank" rel="noopener" class="badge">⭐ 5.0 Fantastické · 39 hodnocení · Firmy.cz</a></div>';
    vloz(onas);

    // =============================================
    // 2. RECENZE – 3-grid, slider šipkami, rozbalovačka
    // =============================================
    var recenzeData = [
      { jmeno:'mirek', doba:'před 1 měsícem', barva:'#e87722', iniciala:'M',
        text:'Doporučuji navštívit. Ochotně vysvětlí, půjčí, přesvedou 👆' },
      { jmeno:'Radim Ptáček', doba:'před 3 měsíci', barva:'#c0392b', iniciala:'R',
        kratky:'U BIOS Import jsem pořídil malotraktor a musím říct, že od prvního kontaktu až po převzetí bylo všechno naprosto...',
        plny:'U BIOS Import jsem pořídil malotraktor a musím říct, že od prvního kontaktu až po převzetí bylo všechno naprosto perfektní. Oceňuji profesionální a velmi vstřícné jednání – vždy rychlá komunikace, ochota poradit a podrobně vysvětlit vše, na co jsem se ptal. Pomohli mi se vším, co jsem potřeboval, a celý proces proběhl bez jediného zádrhelu. Díky nim si už teď spokojeně jezdím na traktůrku a mám jistotu, že jsem vybral správnou firmu. Rozhodně doporučuji! 🚜🙂' },
      { jmeno:'Anna Capkova', doba:'před 4 měsíci', barva:'#e87722', iniciala:'A',
        text:'Dobrá komunikace, seriózní přístup, vstřícné jednání. L. S.' },
      { jmeno:'Filip Novák', doba:'před 5 měsíci', barva:'#c0392b', iniciala:'F',
        kratky:'Skvělý přístup k zákazníkovi. Na místě poradili, naložili a traktor jsem si mohl vyzkoušet...',
        plny:'Skvělý přístup k zákazníkovi. Na místě poradili, naložili a traktor jsem si mohl vyzkoušet. Opravdu vstřícné jednání pánů majitelů a jejich zaměstnanců. Mohu jen doporučit! Traktory ve vysoké kvalitě provedení.' },
      { jmeno:'Jiří Vlček', doba:'před 8 měsíci', barva:'#2e7d32', iniciala:'J',
        kratky:'Ahoj všem, traktor který jsem chtěl neměli skladem ale po domluvě mi pan majitel nabídl hned 3 traktory...',
        plny:'Ahoj všem, traktor který jsem chtěl neměli skladem ale po domluvě dle mých představ mi pan majitel nabídl hned 3 traktory z kterých jsem si jeden vybral. Iseki sial 19 s čelním nakladačem. Traktor mám teprve chvilku je opravdu jako nový v každém detajlu, funguje všechno jak má. Dobrá domluva, jak jsme se dohodli tak to bylo. Doporučuji!' },
      { jmeno:'Jaroslav Opravil', doba:'před 9 měsíci', barva:'#7b4fa6', iniciala:'J',
        text:'Na doporučení majitele firmy jsem si koupil renovovaný traktor Yanmar f18D, se kterým jsem velmi spokojen. Splnil všechny mé představy, proto tuto firmu všem vřele doporučuji.' },
      { jmeno:'Sao Rysy', doba:'před 10 měsíci', barva:'#1e8c5a', iniciala:'S',
        text:'Maximální spokojenost a profesionální přístup prodejce. Z celé řady prodejců jsem si lépe vybrat nemohl. Doporučuji.' },
      { jmeno:'Josef Novák', doba:'před 10 měsíci', barva:'#555', iniciala:'J',
        kratky:'Firmu BiosImport mohu jenom doporučit. Vstřícnost, ochota, profesionalita a trpělivost se zákazníkem je v dnešní...',
        plny:'Firmu BiosImport mohu jenom doporučit. Vstřícnost, ochota, profesionalita a trpělivost se zákazníkem je v dnešní době vzácná. Jsem velmi spokojený zákazník.' }
    ];

    var gSVG = '<svg width="16" height="16" viewBox="0 0 24 24" style="flex-shrink:0"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>';
    var chSVG = '<svg width="13" height="13" viewBox="0 0 24 24"><path fill="#1a73e8" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

    // Generuj skupiny po 3
    var pages = [];
    for (var i = 0; i < recenzeData.length; i += 3) {
      pages.push(recenzeData.slice(i, i + 3));
    }

    var pagesHTML = pages.map(function(page, pi) {
      var cardsHTML = page.map(function(r, ci) {
        var rid = 'rv-' + pi + '-' + ci;
        var hasExpand = r.kratky && r.plny;
        return '<div class="rk">' +
          '<div class="rktop"><div class="rautor"><div class="ravatar" style="background:' + r.barva + ';">' + r.iniciala + '</div>' +
          '<div><div class="rjmeno">' + r.jmeno + '</div><div class="rdoba">' + r.doba + '</div></div></div>' + gSVG + '</div>' +
          '<div class="rhvezdy">★★★★★ ' + chSVG + '</div>' +
          '<div class="rtext" id="' + rid + '">' + (hasExpand ? r.kratky : r.text) + '</div>' +
          (hasExpand ?
            '<button class="rbtn-more" data-id="' + rid + '" data-short="' + encodeURIComponent(r.kratky) + '" data-full="' + encodeURIComponent(r.plny) + '" onclick="(function(b){var id=b.getAttribute(\'data-id\');var el=document.getElementById(id);var open=b.dataset.open===\'1\';el.textContent=decodeURIComponent(open?b.getAttribute(\'data-short\'):b.getAttribute(\'data-full\'));b.textContent=open?\'Přečtěte si více\':\'Skrýt\';b.dataset.open=open?\'0\':\'1\';})(this)">Přečtěte si více</button>'
          : '') +
        '</div>';
      }).join('');
      return '<div class="rpage" style="display:' + (pi === 0 ? 'grid' : 'none') + ';" data-page="' + pi + '">' + cardsHTML + '</div>';
    }).join('');

    var recenze = document.createElement('section');
    recenze.id = 'recenze-sekce';
    recenze.innerHTML =
      '<style>' +
      '#recenze-sekce{background:#f8f8f8;padding:60px 20px;font-family:inherit;}' +
      '#recenze-sekce .rh{text-align:center;margin-bottom:40px;}' +
      '#recenze-sekce .rh h2{font-size:2.2em;font-weight:800;color:#1a1a1a;margin:0;}' +
      '#recenze-sekce .rwrap{max-width:1100px;margin:0 auto;}' +
      '#recenze-sekce .rpage{grid-template-columns:repeat(3,1fr);gap:24px;}' +
      '@media(max-width:900px){#recenze-sekce .rpage{grid-template-columns:1fr;}}' +
      '#recenze-sekce .rk{background:#fff;border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.07);transition:box-shadow .25s,transform .25s;}' +
      '#recenze-sekce .rk:hover{box-shadow:0 8px 28px rgba(0,0,0,.13);transform:translateY(-3px);}' +
      '#recenze-sekce .rktop{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}' +
      '#recenze-sekce .rautor{display:flex;align-items:center;gap:10px;}' +
      '#recenze-sekce .ravatar{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1em;color:#fff;flex-shrink:0;}' +
      '#recenze-sekce .rjmeno{font-weight:700;font-size:.93em;color:#1a1a1a;}' +
      '#recenze-sekce .rdoba{font-size:.8em;color:#999;}' +
      '#recenze-sekce .rhvezdy{color:#f5a623;font-size:1.05em;margin-bottom:10px;display:flex;align-items:center;gap:5px;}' +
      '#recenze-sekce .rtext{font-size:.88em;color:#444;line-height:1.6;}' +
      '#recenze-sekce .rbtn-more{background:none;border:none;cursor:pointer;color:#888;font-size:.82em;padding:6px 0 0;display:block;font-family:inherit;text-align:left;}' +
      '#recenze-sekce .rbtn-more:hover{color:#333;}' +
      /* Navigační šipky */
      '#recenze-sekce .rnav{display:flex;justify-content:center;gap:12px;margin-top:32px;}' +
      '#recenze-sekce .rnav button{background:#fff;border:2px solid #f5a623;border-radius:50%;width:40px;height:40px;cursor:pointer;font-size:1.1em;display:flex;align-items:center;justify-content:center;color:#f5a623;transition:all .2s;line-height:1;}' +
      '#recenze-sekce .rnav button:hover{background:#f5a623;color:#fff;}' +
      '#recenze-sekce .rnav button:disabled{opacity:.3;cursor:default;}' +
      '#recenze-sekce .gsummary{text-align:center;font-size:.92em;color:#555;margin-top:24px;}' +
      '</style>' +
      '<div class="rh"><h2>Zpětná vazba zákazníků</h2></div>' +
      '<div class="rwrap">' +
        pagesHTML +
        '<div class="rnav">' +
          '<button id="r-prev" disabled>&#8592;</button>' +
          '<button id="r-next">&#8594;</button>' +
        '</div>' +
      '</div>' +
      '<p class="gsummary"><strong>Google</strong> – souhrnné hodnocení <strong>5.0</strong> z 5, na základě <strong>39 hodnocení</strong></p>';
    vloz(recenze);

    // Slider logika – nekonečné kolečko
    (function() {
      var curPage = 0;
      var totalPages = pages.length;
      var prevBtn = document.getElementById('r-prev');
      var nextBtn = document.getElementById('r-next');

      function showPage(n) {
        // Kolečko – wrap around
        curPage = ((n % totalPages) + totalPages) % totalPages;
        document.querySelectorAll('#recenze-sekce .rpage').forEach(function(p) {
          p.style.display = 'none';
        });
        document.querySelector('#recenze-sekce .rpage[data-page="' + curPage + '"]').style.display = 'grid';
        // Šipky – vždy aktivní (kolečko)
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      }

      prevBtn.addEventListener('click', function() { showPage(curPage - 1); });
      nextBtn.addEventListener('click', function() { showPage(curPage + 1); });
    })();

    // =============================================
    // 3. PARTNEŘI – bez pozadí, čisté loga
    // =============================================
    var partneri = document.createElement('section');
    partneri.id = 'partneri-sekce';
    partneri.innerHTML =
      '<style>' +
      '#partneri-sekce{background:#f0f0f0;padding:50px 20px;text-align:center;font-family:inherit;}' +
      '#partneri-sekce h2{font-size:2em;font-weight:800;color:#1a1a1a;margin:0 0 40px;}' +
      '#partneri-sekce .pg{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:40px 60px;max-width:1100px;margin:0 auto;}' +
      '#partneri-sekce .pl{background:transparent;display:flex;align-items:center;justify-content:center;}' +
      /* mix-blend-mode odstraní černé pozadí u PNG log */
      '#partneri-sekce .pl img{height:55px;width:auto;max-width:180px;object-fit:contain;mix-blend-mode:multiply;transition:transform .3s,filter .3s;filter:grayscale(20%);}' +
      '#partneri-sekce .pl img:hover{transform:scale(1.08);filter:grayscale(0%) drop-shadow(0 4px 10px rgba(0,0,0,.2));}' +
      '</style>' +
      '<h2>Naši partneři</h2>' +
      '<div class="pg">' +
        '<div class="pl"><img src="' + CDN + 'zeppelin_logo.svg" alt="Zeppelin"></div>' +
        '<div class="pl"><img src="' + CDN + 'logo_galaxy-removebg-preview.png" alt="Galaxy Agricultural Machinery"></div>' +
        '<div class="pl"><img src="' + CDN + 'rhinoceros-tractor-logo.webp" alt="Rhinoceros Tractor"></div>' +
        '<div class="pl"><img src="' + CDN + 'images-removebg-preview.png" alt="Vares"></div>' +
      '</div>';
    vloz(partneri);

    // =============================================
    // 4. POBOČKY
    // =============================================
    var pobocky = document.createElement('section');
    pobocky.id = 'pobocky-sekce';
    pobocky.innerHTML =
      '<style>' +
      '#pobocky-sekce{background:#f8f8f8;padding:60px 20px;font-family:inherit;}' +
      '#pobocky-sekce .ph{text-align:center;margin-bottom:40px;}' +
      '#pobocky-sekce .ph h2{font-size:2.2em;font-weight:800;color:#1a1a1a;margin:0 0 10px;}' +
      '#pobocky-sekce .ph p{color:#666;margin:0;}' +
      '#pobocky-sekce .pbg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:0 auto;align-items:stretch;}' +
      '@media(max-width:900px){#pobocky-sekce .pbg{grid-template-columns:1fr;}}' +
      '#pobocky-sekce .pbk{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);display:flex;flex-direction:column;}' +
      '#pobocky-sekce .pbi{padding:24px;flex:1 0 auto;}' +
      '#pobocky-sekce .pbi h3{font-size:1.4em;font-weight:700;color:#1a1a1a;margin:0 0 8px;}' +
      '#pobocky-sekce .pbi .pp{color:#555;font-size:.9em;margin:0 0 14px;line-height:1.5;}' +
      '#pobocky-sekce .pbi .pa{color:#f5a623;font-weight:600;font-size:.95em;margin:0 0 14px;display:block;}' +
      '#pobocky-sekce .pbi .po{font-size:.9em;color:#1a1a1a;}' +
      '#pobocky-sekce .pbi .po strong{display:block;margin-bottom:3px;}' +
      '#pobocky-sekce .pbm{margin-top:auto;line-height:0;font-size:0;}' +
      '#pobocky-sekce .pbm iframe{display:block;width:100%;height:200px;border:0;margin:0;padding:0;}' +
      '</style>' +
      '<div class="ph"><h2>Navštivte naše pobočky</h2><p>Vyzkoušejte si naše traktory osobně</p></div>' +
      '<div class="pbg">' +
        '<div class="pbk"><div class="pbi">' +
          '<h3>Herálec</h3><p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství a servis.</p>' +
          '<span class="pa">📍 Farma Herálec 134, Herálec, 582 55</span>' +
          '<div class="po"><strong>Otevírací doba:</strong>Po – Pá 8:00 – 14:00</div>' +
        '</div><div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.5!2d15.7297!3d49.7583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d8f5b5b5b5b5b%3A0x1!2sFarma+Her%C3%A1lec+134%2C+Her%C3%A1lec+582+55!5e0!3m2!1scs!2scz!4v1" allowfullscreen loading="lazy"></iframe></div></div>' +
        '<div class="pbk"><div class="pbi">' +
          '<h3>Hradec Králové</h3><p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství.</p>' +
          '<span class="pa">📍 Vlčkovická 223/1a, Plačice, 500 04</span>' +
          '<div class="po"><strong>Otevírací doba:</strong>Po – St – Pá 8:00 – 16:00, Út – Čt 10:00 – 18:00</div>' +
        '</div><div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.0!2d15.9012!3d50.2227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c2b1a1a1a1a1a%3A0x1!2sVl%C4%8Dovick%C3%A1+223%2F1a%2C+Pla%C4%8Dice+500+04!5e0!3m2!1scs!2scz!4v1" allowfullscreen loading="lazy"></iframe></div></div>' +
        '<div class="pbk"><div class="pbi">' +
          '<h3>Bratislava</h3><p class="pp">Výdejní místo.</p>' +
          '<span class="pa">📍 Stará Vajnorská, 831 04</span>' +
          '<div class="po"><strong>Otevírací doba:</strong>Dle telefonické domluvy.</div>' +
        '</div><div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5!2d17.1324!3d48.1762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89401234abcd%3A0x1!2sStar%C3%A1+Vajnorsk%C3%A1%2C+Bratislava+831+04!5e0!3m2!1scs!2ssk!4v1" allowfullscreen loading="lazy"></iframe></div></div>' +
      '</div>';
    vloz(pobocky);

    // =============================================
    // 5. POPTÁVKOVÝ FORMULÁŘ
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
      '#poptavka-sekce .btn-send{width:100%;background:#f5a623;color:#1a1a1a;font-weight:700;font-size:1em;padding:16px;border:none;border-radius:10px;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;font-family:inherit;text-align:center;}' +
      '#poptavka-sekce .btn-send:hover{background:#d4891a;}' +
      '#poptavka-sekce .uspech{display:none;text-align:center;padding:40px 20px;color:#2d7a2d;font-weight:600;font-size:1.1em;}' +
      '#poptavka-sekce .chyba{display:none;color:#cc0000;font-size:.88em;margin-top:8px;text-align:center;}' +
      '</style>' +
      '<div class="pw">' +
        '<div class="pi">' +
          '<h2>Poptávkový formulář</h2>' +
          '<p class="perex">V případě zájmu o naše produkty nám napište nebo rovnou volejte.</p>' +
          '<div class="tr">📞 <a href="tel:+420735135242">+420 735 135 242</a></div><p class="tp">Prodej malotraktorů</p>' +
          '<div class="tr">📞 <a href="tel:+420735199881">+420 735 199 881</a></div><p class="tp">Prodej příslušenství, zákaznický servis</p>' +
          '<div class="er">✉ <a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div>' +
          '<div class="fak"><h3>Fakturační adresa</h3>' +
            '<div class="upoz">ℹ️ Pouze pro fakturační účely – nikoli pro doručování zboží!</div>' +
            '<div class="adr">Sídlo firmy, korespondenční adresa:<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>IČ: 17543169, DIČ: CZ17543169</div>' +
          '</div>' +
        '</div>' +
        '<div class="pf">' +
          '<div class="uspech" id="p-uspech">✅ Děkujeme! Poptávka odeslána. Ozveme se co nejdříve.</div>' +
          '<form id="p-form" action="https://formspree.io/f/mbdazjlz" method="POST">' +
            '<div class="fg"><label>Jméno a příjmení</label><input type="text" name="jmeno" placeholder="Jan Novák" required></div>' +
            '<div class="fg"><label>E-mail</label><input type="email" name="email" placeholder="jannovak@gmail.com" required></div>' +
            '<div class="fg"><label>Mobil</label><input type="tel" name="mobil" placeholder="+420 123 456 789"></div>' +
            '<div class="fg"><label>Poznámka</label><textarea name="message" placeholder="Váš dotaz nebo zájem..."></textarea></div>' +
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
      btn.textContent = 'Odesílám...'; btn.disabled = true;
      fetch('https://formspree.io/f/mbdazjlz', {
        method:'POST', body:new FormData(this), headers:{'Accept':'application/json'}
      }).then(function(r) {
        if (r.ok) { document.getElementById('p-form').style.display='none'; document.getElementById('p-uspech').style.display='block'; }
        else { document.getElementById('p-chyba').style.display='block'; btn.disabled=false; btn.textContent='Odeslat poptávku'; }
      }).catch(function() { document.getElementById('p-chyba').style.display='block'; btn.disabled=false; btn.textContent='Odeslat poptávku'; });
    });

  });
})();
