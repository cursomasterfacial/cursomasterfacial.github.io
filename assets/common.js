/* Comportamentos partilhados: reveals, contadores, CTA mobile, programa, formulário. */
(() => {
  const D = window.MASTER;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  if (rm) document.documentElement.classList.add('rm');
  document.documentElement.classList.add('js');

  /* ---------- programa: tabs + módulos em <details> ---------- */
  const modHTML = (m, k, open) => {
    const body = m.p
      ? `<div class="pillars">${m.p.map((p, j) => `<div class="pillar"><span class="pl-n">Pilar ${j + 1}</span><b>${p.t}</b><em>${p.s}</em><ul>${p.i.map(x => `<li>${x}</li>`).join('')}</ul></div>`).join('')}</div>`
      : `<ul class="mod-list">${m.i.map(x => `<li>${x}</li>`).join('')}</ul>`;
    return `<details class="mod" name="${k}"${open ? ' open' : ''}><summary><span class="mod-n">${String(open ? 1 : 0).padStart(2, '0')}</span><span class="mod-t">${m.t}</span><span class="mod-x" aria-hidden="true"></span></summary><div class="mod-b">${body}</div></details>`;
  };
  const renderProgram = el => {
    const days = [D.prog.d1, D.prog.d2];
    el.innerHTML = `
      <div class="ptabs" role="tablist" aria-label="Programa por dia">
        ${days.map((d, i) => `<button class="ptab${i ? '' : ' on'}" role="tab" id="pt${i}" aria-controls="pp${i}" aria-selected="${!i}" tabindex="${i ? -1 : 0}"><span class="ptab-d">${d.dia}</span><span class="ptab-t">${d.tema}</span></button>`).join('')}
      </div>
      ${days.map((d, i) => `<div class="ppane" role="tabpanel" id="pp${i}" aria-labelledby="pt${i}"${i ? ' hidden' : ''}>${d.mods.map((m, j) => modHTML(m, 'd' + i, false)).join('')}</div>`).join('')}`;
    $$('.mod', el).forEach(m => {
      const idx = [...m.parentElement.children].indexOf(m) + 1;
      $('.mod-n', m).textContent = String(idx).padStart(2, '0');
    });
    const tabs = $$('.ptab', el), panes = $$('.ppane', el);
    const set = i => {
      tabs.forEach((t, j) => { t.classList.toggle('on', i === j); t.setAttribute('aria-selected', i === j); t.tabIndex = i === j ? 0 : -1; });
      panes.forEach((p, j) => { p.hidden = i !== j; if (i === j && !rm) { p.classList.remove('anim'); void p.offsetWidth; p.classList.add('anim'); } });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => set(i));
      t.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault(); const n = (i + 1) % tabs.length; tabs[n].focus(); set(n);
      });
    });
  };
  $$('[data-prog]').forEach(renderProgram);

  /* ---------- benefícios ---------- */
  $$('[data-benef]').forEach(el => {
    el.innerHTML = D.beneficios.map(b => `<li><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 5.5 11 12 3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span>${b}</span></li>`).join('');
  });

  /* ---------- reveals ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  const watch = () => $$('[data-r]:not(.in)').forEach(el => rm ? el.classList.add('in') : io.observe(el));
  watch();

  /* ---------- contadores ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, t = +el.dataset.count, w = v => el.textContent = String(v).padStart(2, '0');
    if (rm) return w(t);
    const t0 = performance.now();
    (function tick(now) { const k = clamp((now - t0) / 1200, 0, 1); w(Math.round((1 - Math.pow(1 - k, 3)) * t)); if (k < 1) requestAnimationFrame(tick); })(t0);
  }), { threshold: .6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ---------- nav + CTA mobile ---------- */
  const nav = $('[data-nav]'), mcta = $('#mcta'), insc = $('#inscricao');
  let inscVis = false;
  const upd = () => {
    if (nav) nav.classList.toggle('scrolled', scrollY > 30);
    if (mcta) mcta.classList.toggle('show', scrollY > innerHeight * .7 && !inscVis);
  };
  if (insc) new IntersectionObserver(es => { inscVis = es[0].isIntersecting; upd(); }, { threshold: .05 }).observe(insc);
  addEventListener('scroll', upd, { passive: true }); upd();

  /* menu móvel genérico: [data-burger] alterna body.menu-open */
  const burger = $('[data-burger]');
  if (burger) {
    const set = o => { document.body.classList.toggle('menu-open', o); burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
    burger.addEventListener('click', () => set(!document.body.classList.contains('menu-open')));
    $$('[data-mmenu] a').forEach(a => a.addEventListener('click', () => set(false)));
    addEventListener('keydown', e => e.key === 'Escape' && set(false));
  }

  window.M = { $, $$, rm, clamp, esc, D, watch };
})();
