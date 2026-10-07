(() => {
  const { $, $$, rm, clamp, D, watch } = M;
  /* entrada do hero assim que as fontes estiverem prontas (não espera por todas as imagens) */
  const go = () => document.body.classList.add('loaded');
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 900))]).then(() => requestAnimationFrame(go));

  /* ── formadoras ── */
  $('#profs').innerHTML = D.profs.map((p, i) => `
    <article class="pf" data-r style="--d:${i * .12}s">
      <div class="pf-card" role="button" tabindex="0" aria-expanded="false" aria-controls="bio-${p.id}" aria-label="${p.nome}: ver percurso">
        <img src="${p.img}" alt="Retrato de ${p.nome}" loading="lazy" decoding="async">
        <span class="pf-num">0${i + 1}</span>
        <span class="pf-plus" aria-hidden="true"><span>Percurso</span><i></i></span>
        <div class="pf-bio" id="bio-${p.id}"><p>${p.bio}</p></div>
      </div>
      <div class="pf-info"><h3>${p.nome}</h3><p class="pf-roles">${p.roles}</p><a class="pf-ig" href="${p.ig}" target="_blank" rel="noopener" aria-label="Instagram de ${p.nome}">@${p.ig.split('/').filter(Boolean).pop()}<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 8 8 2M3.5 2H8v4.5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a><p class="pf-role"><small>Papel no Master</small>${p.papel}</p></div>
    </article>`).join('');
  const hover = matchMedia('(hover:hover)').matches;
  $$('.pf').forEach(pf => {
    const c = $('.pf-card', pf);
    const set = o => { pf.classList.toggle('open', o); c.setAttribute('aria-expanded', o); };
    c.addEventListener('click', () => set(!pf.classList.contains('open')));
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!pf.classList.contains('open')); } });
    if (hover) { pf.addEventListener('mouseenter', () => set(true)); pf.addEventListener('mouseleave', () => set(false)); }
  });

  /* ── método: etapas em texto ── */
  $('#steps').innerHTML = D.metodo.map((st, i) => `
    <li class="step" data-r style="--d:${.2 + i * .14}s">
      <span class="step-n" aria-label="Etapa ${+st.n}">${st.n}</span>
      <h3>${st.t}</h3>
      <p class="step-d">${st.d}</p>
      <ul class="step-i">${st.i.map(x => `<li>${x}</li>`).join('')}</ul>
    </li>`).join('');
  watch();

  const links = $$('.nav ul a');
  const pxEls = $$('[data-px]');
  /* hero em camadas: scroll + rato, com amortecimento */
  let mx = 0, my = 0, cx = 0, cy = 0, loop = false;
  const frame = () => {
    if (rm || innerWidth <= 980 || scrollY > innerHeight * 1.3) return;
    pxEls.forEach(el => {
      const k = +el.dataset.px * 10;
      el.style.transform = `translate3d(${(cx * k * 14).toFixed(1)}px,${(scrollY * +el.dataset.px + cy * k * 9).toFixed(1)}px,0)`;
    });
  };
  const ease = () => {
    cx += (mx - cx) * .07; cy += (my - cy) * .07; frame();
    if (Math.abs(mx - cx) > .001 || Math.abs(my - cy) > .001) requestAnimationFrame(ease); else loop = false;
  };
  if (hover && !rm) $('.hx').addEventListener('mousemove', e => {
    mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5;
    if (!loop) { loop = true; requestAnimationFrame(ease); }
  });

  /* cartões das formadoras: inclinação 3D a seguir o rato */
  if (hover && !rm) $$('.pf-card').forEach(c => {
    c.addEventListener('mousemove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.classList.add('tilt');
      c.style.transform = `rotateY(${((x - .5) * 9).toFixed(2)}deg) rotateX(${((.5 - y) * 7).toFixed(2)}deg)`;
      c.style.setProperty('--gx', (x * 100).toFixed(1) + '%'); c.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    c.addEventListener('mouseleave', () => { c.style.transform = ''; c.classList.remove('tilt'); });
  });
  /* secção ativa na navegação */
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['master', 'metodo', 'programa', 'especialistas', 'inscricao'].forEach(id => spy.observe(document.getElementById(id)));

  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); } }, { passive: true });
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(frame, 150); });
  frame();
})();
