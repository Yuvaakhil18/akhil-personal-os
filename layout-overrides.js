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
.wallpaper { background-image:linear-gradient(rgba(243,177,190,.2),rgba(243,177,190,.2)),url('assets/wallpapers/cotton-candy-dawn.jpg'); background-position:center; background-size:cover; animation:none; filter:saturate(1.02) contrast(1.04); }
.wallpaper video { display:block !important; opacity:.66 !important; mix-blend-mode:multiply; }
.wallpaper video:not(.crossfade-layer) { display:none !important; }
.wallpaper:after { background-image:linear-gradient(rgba(255,248,220,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,248,220,.09) 1px,transparent 1px); background-size:42px 42px; mix-blend-mode:screen; opacity:.38; }
.wallpaper:before { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(circle at 77% 33%,rgba(255,190,105,.16),transparent 25%),linear-gradient(90deg,rgba(17,13,14,.16),transparent 58%,rgba(17,13,14,.1)); z-index:1; }
body[data-theme="day"] .wallpaper:before, body[data-theme="night"] .wallpaper:before { background:linear-gradient(90deg,rgba(255,248,220,.72),rgba(255,248,220,.43) 34%,rgba(255,248,220,.1) 66%,transparent 84%); }
.wallpaper .grain { display:block; position:absolute; inset:0; z-index:2; pointer-events:none; opacity:.14; background-image:radial-gradient(rgba(255,248,220,.7) 1px,transparent 1px); background-size:83px 71px; animation:grainDrift 18s linear infinite; }
.daily h1, .daily p, .daily .kicker, .daily .availability, .app-icon-card b, .app-icon-card small { text-rendering:geometricPrecision; }
.daily h1 { text-shadow:1px 1px 0 var(--paper),-1px 0 0 var(--paper); }
.app-icon-card b { background:var(--paper); font-weight:700; opacity:1; }
.app-icon-card small { color:var(--paper); font-weight:600; text-shadow:1px 1px 0 var(--ink); }
.app-icon-card:hover .app-icon img { filter:drop-shadow(5px 6px 0 color-mix(in srgb, var(--lime) 55%, var(--ink))); }
.app-icon-card.is-dragging { z-index:20; cursor:grabbing; filter:brightness(1.1) drop-shadow(6px 8px 0 rgba(23,19,27,.3)); }
.wallpaper video.crossfade-layer { opacity:0 !important; transition:opacity .9s ease; }
.wallpaper video.crossfade-layer.is-active { opacity:.66 !important; }
.companion img { animation:companionFloat 3.8s ease-in-out infinite; transform-origin:center bottom; }
.companion-status { animation:statusPulse 2.8s ease-in-out infinite; }
@keyframes grainDrift { from { transform:translate(0,0); } to { transform:translate(42px,36px); } }
@keyframes companionFloat { 0%,100% { transform:translateY(0) rotate(0); } 50% { transform:translateY(-7px) rotate(-1deg); } }
@keyframes statusPulse { 0%,100% { filter:brightness(1); } 50% { filter:brightness(1.12); } }
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
if(window.wallpaperVideo&&window.wallpaper){window.wallpaperVideo.style.display='none';const wallpaperSets=['cotton-candy-dawn','anime-sky','deep-space'],layers=[0,1].map(i=>{const v=document.createElement('video');v.className='crossfade-layer';v.muted=true;v.autoplay=true;v.loop=true;v.playsInline=true;v.preload='auto';v.style.position='absolute';v.style.inset='0';v.style.width='100%';v.style.height='100%';v.style.objectFit='cover';v.src=`assets/wallpapers/${wallpaperSets[0]}.mp4`;window.wallpaper.prepend(v);return v});let activeLayer=0,wallpaperSetIndex=0;layers[0].classList.add('is-active');layers.forEach(v=>v.play().catch(()=>{}));setInterval(()=>{wallpaperSetIndex=(wallpaperSetIndex+1)%wallpaperSets.length;const next=1-activeLayer,l=layers[next];l.src=`assets/wallpapers/${wallpaperSets[wallpaperSetIndex]}.mp4`;l.load();l.play().catch(()=>{});l.classList.add('is-active');layers[activeLayer].classList.remove('is-active');activeLayer=next},40000)}
document.querySelectorAll('.app-icon-card').forEach(card=>{let drag=null,moved=false;card.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;drag={x:e.clientX,y:e.clientY};moved=false;card.setPointerCapture(e.pointerId)});card.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)<8)return;moved=true;card.classList.add('is-dragging');card.style.transform=`translate(${dx}px,${dy}px)`});const end=e=>{if(!drag)return;const wasMoved=moved;card.releasePointerCapture?.(e.pointerId);drag=null;card.classList.remove('is-dragging');if(wasMoved){card.dataset.dragged='true';setTimeout(()=>delete card.dataset.dragged,80)}else card.style.transform=''};card.addEventListener('pointerup',end);card.addEventListener('pointercancel',end);card.addEventListener('click',e=>{if(card.dataset.dragged){e.preventDefault();e.stopPropagation()}})});
if(document.querySelector('.wallpaper video')){const oldVideo=document.querySelector('.wallpaper video');oldVideo.style.display='none';const layers=[0,1].map(()=>{const v=document.createElement('video');v.className='crossfade-layer';v.muted=true;v.autoplay=true;v.loop=true;v.playsInline=true;v.src='assets/wallpapers/cotton-candy-dawn.mp4';Object.assign(v.style,{position:'absolute',inset:'0',width:'100%',height:'100%',objectFit:'cover'});document.querySelector('.wallpaper').prepend(v);return v});let active=0,index=0;layers[0].classList.add('is-active');layers.forEach(v=>v.play().catch(()=>{}));setInterval(()=>{index=(index+1)%3;const next=1-active;layers[next].src=`assets/wallpapers/${['cotton-candy-dawn','anime-sky','deep-space'][index]}.mp4`;layers[next].load();layers[next].play().catch(()=>{});layers[next].classList.add('is-active');layers[active].classList.remove('is-active');active=next},40000)}
