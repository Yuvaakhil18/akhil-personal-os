const referenceLayout = document.createElement('style');
referenceLayout.textContent = `
.brand-cluster { position:relative; display:flex; align-items:center; }
.brand { position:relative; min-height:42px; padding:4px 7px 4px 0; }
.brand-logo { width:38px; height:38px; box-shadow:3px 3px 0 var(--ink); }
.brand-logo img { object-fit:cover; }
.brand-caret { margin-left:3px; color:var(--wine); font:11px var(--pixel); font-style:normal; }
.brand-dropdown { position:absolute; top:calc(100% + 7px); left:0; z-index:9000; min-width:205px; display:flex; flex-direction:column; gap:2px; padding:6px; border:3px solid var(--ink); background:var(--paper); box-shadow:7px 8px 0 var(--ink); }
.brand-dropdown[hidden] { display:none; }
.brand-dropdown button { border:0; padding:10px 11px; background:transparent; color:var(--ink); text-align:left; font:9px var(--pixel); }
.brand-dropdown button:hover { background:var(--wine); color:var(--paper); }
.brand-dropdown span { height:2px; margin:4px 6px; background:color-mix(in srgb, var(--ink) 20%, transparent); }
.dock-hoverable { transition:bottom .22s cubic-bezier(.2,.9,.3,1),opacity .22s; }
.dock-hoverable:not(.dock-visible) { bottom:-100px; opacity:0; pointer-events:none; }
.dock small { position:absolute; left:50%; bottom:54px; transform:translateX(-50%) translateY(4px); opacity:0; pointer-events:none; padding:5px 6px; background:var(--ink); color:var(--paper); font:7px/1 var(--pixel); white-space:nowrap; transition:opacity .12s,transform .12s; }
  .dock button:hover small { opacity:1; transform:translateX(-50%) translateY(0); }
  .dock span { display:grid; place-items:center; margin:0; }
  .dock span img { width:34px; height:34px; object-fit:contain; image-rendering:pixelated; }
@media (min-width: 901px) {
  .system-bar { height:64px; padding-inline:28px; }
  .system-bar nav { gap:28px; margin-left:auto; margin-right:34px; }
  .system-bar nav button { padding:6px 0; }
  .status { gap:11px; }
  .status button { border:2px solid var(--ink); background:var(--wine); color:var(--paper); padding:6px 9px; font:9px var(--pixel); }
  .build-status { font:9px var(--pixel); }
  .build-status i { display:inline-block; width:7px; height:7px; background:var(--lime); border:2px solid var(--ink); margin-right:3px; }
  .signal-bars { font:12px var(--pixel); letter-spacing:-3px; }
  #date { font:9px var(--pixel); }
  .desktop { display:block; position:relative; min-height:calc(100vh - 56px); padding:0; overflow:hidden; }
  .daily { position:absolute; right:3vw; top:20px; width:330px; padding:20px; background:var(--paper); border:3px solid var(--ink); box-shadow:8px 9px 0 var(--ink); z-index:5; }
  .daily h1 { font-size:54px; margin:13px 0 18px; }
  .daily p { font-size:13px; }
  .daily .action-row { display:grid; gap:9px; margin:18px 0 22px; }
  .daily .availability { display:block; line-height:1.7; }
  .daily .availability b { display:block; }
  .identity { display:none; }
  .desktop-apps { position:absolute; left:40px; top:56px; width:610px; z-index:3; }
  .section-head { display:none; }
  .app-grid { grid-template-columns:repeat(5,105px); gap:18px 10px; }
  .app-icon-card { min-height:122px; padding:0; background:transparent; border:0; box-shadow:none; text-align:center; display:flex; flex-direction:column; align-items:center; }
  .app-icon-card:hover { transform:translateY(-5px) rotate(-1deg); }
  .app-icon-card .app-icon { width:70px; height:70px; margin:0 auto; background:transparent; border:0; box-shadow:none; }
  .app-icon-card .app-icon img { filter:drop-shadow(4px 5px 0 color-mix(in srgb, var(--ink) 18%, transparent)); }
  .app-icon-card b { background:color-mix(in srgb, var(--paper) 88%, transparent); color:var(--ink); border:1px solid color-mix(in srgb, var(--ink) 28%, transparent); box-shadow:2px 2px 0 color-mix(in srgb, var(--ink) 15%, transparent); padding:4px 6px; margin-top:6px; font:9px var(--pixel); text-transform:uppercase; }
  .app-icon-card small { max-width:105px; text-align:center; font-size:9px; }
  .companion { right:9vw; bottom:84px; width:180px; height:290px; }
  .companion-status { right:-62px; }
}
@media (max-width: 900px) and (min-width: 601px) {
  .desktop { display:block; padding:38px 6vw 120px; }
  .daily { max-width:650px; margin-bottom:40px; }
  .identity { display:flex; margin-bottom:42px; }
  .desktop-apps { position:relative; }
}
`;
document.head.appendChild(referenceLayout);
const iconAssets={"AI FIELD NOTES":"assets/icons-v4/founder.png",WHITEBOARD:"assets/icons-v4/home.svg",GAMES:"assets/icons-v4/games.svg"};document.querySelectorAll('.app-icon-card').forEach(card=>{const label=card.querySelector('b')?.textContent?.trim().toUpperCase(),src=iconAssets[label];if(src){const icon=card.querySelector('.app-icon');if(icon)icon.innerHTML=`<img src="${src}" alt="">`}});const dockAssets={Desktop:'assets/icons-v4/home.svg',Projects:'assets/icons-v4/projects.png',Proof:'assets/icons-v4/proof.png',Journey:'assets/icons-v4/journey.png',Notes:'assets/icons-v4/founder.png',Games:'assets/icons-v4/games.svg',Board:'assets/icons-v4/home.svg',Contact:'assets/icons-v4/contact.png'};document.querySelectorAll('#appDock button').forEach(button=>{const label=button.querySelector('small')?.textContent?.trim(),src=dockAssets[label];if(src){const icon=button.querySelector('span');if(icon)icon.innerHTML=`<img src="${src}" alt="">`}});
document.querySelector('[data-open="whiteboard"] .app-icon img')?.setAttribute('src','assets/icons-v4/founder.png');document.querySelector('[data-open="games"] .app-icon img')?.setAttribute('src','assets/games/viper-arena.png');const safeDockAssets={Desktop:'assets/icons-v4/projects.png',Board:'assets/icons-v4/founder.png',Games:'assets/games/viper-arena.png'};document.querySelectorAll('#appDock button').forEach(button=>{const label=button.querySelector('small')?.textContent?.trim(),src=safeDockAssets[label];if(src)button.querySelector('span img')?.setAttribute('src',src)});
