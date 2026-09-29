const referenceLayout = document.createElement('style');
referenceLayout.textContent = `
@media (min-width: 901px) {
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
  .app-icon-card .app-icon { width:64px; height:64px; margin:0 auto; background:transparent; border:0; }
  .app-icon-card b { background:var(--wine); color:var(--paper); padding:7px 8px; margin-top:6px; font:9px var(--pixel); }
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
