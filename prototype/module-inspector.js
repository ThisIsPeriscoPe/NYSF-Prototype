/* Module inspector — for the build team, not for client review.
   Every <section> carries data-module (which component library module it is) and
   data-build ("theme-native" | "plugin" | "custom"). This overlay just draws them.
   Turn on:  add ?modules=1 to any URL, or press Shift+M.  State persists while the tab is open. */
(function () {
  var KEY = 'nysf-modules';
  var on = /[?&]modules=1/.test(location.search) || sessionStorage.getItem(KEY) === '1';

  var CSS = [
    '#mi-layer{position:absolute;inset:0;pointer-events:none;z-index:9998}',
    '#mi-layer .mi-box{position:absolute;border:1px dashed rgba(199,62,94,.55);border-radius:6px}',
    '#mi-layer .mi-tag{position:absolute;transform:translateY(-50%);display:inline-flex;align-items:center;gap:7px;',
    'background:#092938;color:#FBF3E4;font:600 11.5px/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.2px;',
    'padding:6px 10px;border-radius:99px;white-space:nowrap;box-shadow:0 3px 10px rgba(0,0,0,.28)}',
    '#mi-layer .mi-tag i{font-style:normal;font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;',
    'padding:2px 6px;border-radius:99px;background:#EFAF3A;color:#092938}',
    '#mi-layer .mi-tag.p i{background:#2E5A70;color:#FBF3E4}',
    '#mi-layer .mi-tag.c i{background:#C73E5E;color:#FBF3E4}',
    '#mi-bar{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;',
    'gap:14px;background:#092938;color:#FBF3E4;font:500 12.5px/1 ui-sans-serif,system-ui,sans-serif;padding:10px 16px;',
    'border-radius:99px;box-shadow:0 6px 22px rgba(0,0,0,.3)}',
    '#mi-bar b{font-weight:700}#mi-bar span{display:inline-flex;align-items:center;gap:6px;opacity:.9}',
    '#mi-bar em{font-style:normal;width:9px;height:9px;border-radius:50%;display:inline-block}',
    '#mi-bar button{pointer-events:auto;background:none;border:1px solid rgba(251,243,228,.35);color:inherit;',
    'font:inherit;padding:5px 11px;border-radius:99px;cursor:pointer}',
    '@media print{#mi-layer,#mi-bar{display:none}}'
  ].join('');

  var style, layer, bar;

  function draw() {
    if (!layer) return;
    layer.innerHTML = '';
    var secs = document.querySelectorAll('[data-module]');
    for (var i = 0; i < secs.length; i++) {
      var r = secs[i].getBoundingClientRect();
      if (!r.height) continue;
      var top = r.top + window.pageYOffset, left = r.left + window.pageXOffset;
      var box = document.createElement('div');
      box.className = 'mi-box';
      box.style.cssText = 'top:' + top + 'px;left:' + left + 'px;width:' + r.width + 'px;height:' + r.height + 'px';
      layer.appendChild(box);
      var build = secs[i].getAttribute('data-build') || 'theme-native';
      var tag = document.createElement('div');
      tag.className = 'mi-tag' + (build === 'plugin' ? ' p' : build === 'custom' ? ' c' : '');
      tag.style.cssText = 'top:' + top + 'px;left:' + (left + 16) + 'px';
      tag.innerHTML = '<i>' + (build === 'theme-native' ? 'T' : build === 'plugin' ? 'P' : 'C') + '</i>' +
        secs[i].getAttribute('data-module');
      layer.appendChild(tag);
    }
  }

  function enable() {
    style = document.createElement('style'); style.id = 'mi-style'; style.textContent = CSS;
    document.head.appendChild(style);
    layer = document.createElement('div'); layer.id = 'mi-layer'; document.body.appendChild(layer);
    bar = document.createElement('div'); bar.id = 'mi-bar';
    bar.innerHTML = '<b>Module view</b>' +
      '<span><em style="background:#EFAF3A"></em>Theme-native</span>' +
      '<span><em style="background:#2E5A70"></em>Plugin</span>' +
      '<span><em style="background:#C73E5E"></em>Custom</span>' +
      '<button type="button">Hide (Shift+M)</button>';
    bar.querySelector('button').onclick = toggle;
    document.body.appendChild(bar);
    window.addEventListener('resize', draw);
    draw();
    setTimeout(draw, 400); // after fonts/images settle
  }

  function disable() {
    [style, layer, bar].forEach(function (n) { if (n && n.parentNode) n.parentNode.removeChild(n); });
    style = layer = bar = null;
    window.removeEventListener('resize', draw);
  }

  function toggle() {
    on = !on;
    sessionStorage.setItem(KEY, on ? '1' : '0');
    on ? enable() : disable();
  }

  document.addEventListener('keydown', function (e) {
    if (e.shiftKey && (e.key === 'M' || e.key === 'm') && !/input|textarea/i.test(e.target.tagName)) toggle();
  });

  if (on) {
    sessionStorage.setItem(KEY, '1');
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', enable)
      : enable();
  }
})();
