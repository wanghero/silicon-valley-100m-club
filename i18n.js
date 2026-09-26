// 中英双语切换：中文原文写在 index.html 中，这里只维护英文译文。
(function () {
  var en = {
    title: 'Silicon Valley 100M Club · 硅谷百米会',
    description: 'Founded in 2015 and rooted in Silicon Valley, the Silicon Valley 100M Club brings together Chinese founders, executives, investors and cross-border business owners to help every member company reach a $100M valuation.',
    skip: 'Skip to content',
    brandHome: 'Silicon Valley 100M Club home',
    navLabel: 'Main navigation',
    navAbout: 'About',
    navMembers: 'Community',
    navActivities: 'What We Do',
    navPartners: 'Partnerships <span>↗</span>',
    heroTitle: 'Together in the Valley,<br>onward to <span>what’s next.</span>',
    heroDesc: 'A club of Chinese entrepreneurs rooted in Silicon Valley.<br>Turning capital, experience and channels into momentum for growth.',
    heroCta: 'Meet the Club <span>↗</span>',
    heroTagline: 'Fellow travelers, one shared goal.',
    heroScroll: 'Explore ↓',
    heroScrollLabel: 'Scroll down',
    visualFoot: 'From Silicon Valley · Onward',
    missionIntro: 'We have one goal',
    missionTitle: 'Helping every member company <br class="mobile">reach a <strong>$100M</strong> valuation.',
    missionSub: 'From surviving to standing strong',
    aboutTitle: '100M is the goal.<br>It’s also how we move forward, together.',
    aboutLead: 'Our Chinese name, “Bai Mi” (百米), comes from 100M.<br>One number that carries the shared ambition of a group of founders.',
    aboutP1: 'A $100M valuation is the dividing line between a company that survives and one that stands strong. It’s also like a 100-meter sprint (“bai mi” in Chinese): the distance is short, and what counts is your starting position and explosive power.',
    aboutP2: 'Founded in Silicon Valley in 2015, the 100M Club brings founders, executives, investors and globally minded business owners to the same table, so that capital, experience and channels truly flow.',
    aboutSince: 'Founded in Silicon Valley<br>Connecting visionary peers',
    membersTitle: 'Small and select,<br>so we can go deep.',
    membersUnit: 'members',
    membersDesc: 'A small circle means we truly know and trust one another.<br>Every conversation has the chance to become a real collaboration.',
    role1: 'Founders',
    role1Desc: 'Bring projects and growth opportunities',
    role2: 'Executives',
    role2Desc: 'Share management experience and industry insight',
    role3: 'Investors',
    role3Desc: 'Connect capital with long-term value',
    role4: 'Cross-border Owners',
    role4Desc: 'Open up markets and channels',
    rolesNote: 'Partners across the value chain, and fellow travelers.',
    activitiesTitle: 'Bringing people together,<br>moving things forward.',
    act1Tag: 'In-depth Exchange',
    act1Title: 'Private Board Sessions<br>&amp; Dinners',
    act1Desc: 'Small and closed-door. Members bring real problems and offer honest advice, finding the next step through candid conversation.',
    act1Foot: 'Real problems · Real advice',
    act2Tag: 'Capital Connections',
    act2Title: 'Pitch Sessions<br>&amp; Investor Matching',
    act2Desc: 'Member companies pitch directly to investors in our circle, starting from mutual trust to shorten the path to funding.',
    act2Foot: 'Great projects · The right people',
    act3Tag: 'Resource Flow',
    act3Title: 'Company Visits<br>&amp; Resource Matching',
    act3Desc: 'We visit member companies and leading Silicon Valley firms, matching customers, channels and talent around concrete needs.',
    act3Foot: 'Step inside · Connect',
    partnersTitle: 'Connecting Silicon Valley,<br>creating real value together.',
    partnersDesc: 'Built on trust,<br>helping every resource find the right partner.',
    p1Title: 'Governments &amp; Industrial Parks',
    p1Desc: 'A first-hand window into Silicon Valley’s Chinese startup ecosystem. We connect you with companies and projects operating across the U.S. and China or planning to launch in China, and support investment promotion and site visits.',
    p1Tags: '<span>U.S.–China Presence</span><span>Investment Promotion</span><span>Site Visits</span>',
    p2Title: 'Investment Firms',
    p2Desc: 'Get early access to vetted, growth-stage companies before they reach the open fundraising market. Our member founders and executives are also trusted sources of industry insight and potential co-investors.',
    p2Tags: '<span>Growth-stage Deals</span><span>Industry Insight</span><span>Co-investment</span>',
    p3Title: 'Tech Companies &amp; Cloud Providers',
    p3Desc: 'Reach founders and technical decision-makers directly. Present your products in high-trust, closed-door settings, and land solutions with fast-growing companies that have real purchasing needs.',
    p3Tags: '<span>Decision-maker Access</span><span>Real Demand</span><span>Solution Delivery</span>',
    footerMotto: 'Rooted in the Valley · Growing Together · Onward to What’s Next',
    footerTop: 'Back to top ↑',
    footerCopy: '© Silicon Valley 100M Club 硅谷百米会'
  };

  var root = document.documentElement;
  var metaDesc = document.querySelector('meta[name="description"]');
  var zh = { title: document.title, description: metaDesc ? metaDesc.content : '' };
  var textEls = document.querySelectorAll('[data-i18n]');
  var attrEls = document.querySelectorAll('[data-i18n-attr]');

  // 以页面中的中文原文作为中文词典
  textEls.forEach(function (el) { zh[el.dataset.i18n] = el.innerHTML; });
  attrEls.forEach(function (el) {
    el.dataset.i18nAttr.split(';').forEach(function (pair) {
      var p = pair.split(':');
      zh[p[1]] = el.getAttribute(p[0]);
    });
  });

  function apply(lang) {
    var dict = lang === 'en' ? en : zh;
    textEls.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    attrEls.forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (dict[p[1]] != null) el.setAttribute(p[0], dict[p[1]]);
      });
    });
    document.title = dict.title;
    if (metaDesc) metaDesc.content = dict.description;
    root.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    root.classList.remove('i18n-pending');
  }

  function save(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  var initial = 'zh';
  try {
    initial = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'zh';
  } catch (e) {}
  apply(initial === 'en' ? 'en' : 'zh');

  document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.dataset.lang);
      save(btn.dataset.lang);
      // 去掉分享链接中的 ?lang=，避免刷新后被覆盖
      try {
        var url = new URL(location.href);
        if (url.searchParams.has('lang')) {
          url.searchParams.delete('lang');
          history.replaceState(null, '', url);
        }
      } catch (e) {}
    });
  });
})();
