// PREMIUM MOTION ENGINE
(() => {
  const elements = document.querySelectorAll('[data-motion]');
  const divider = document.querySelector('.divider');

  // Assign random motion properties
  elements.forEach(el => {
    el.motion = {
      gx: (Math.random()-0.5)*2,  // horizontal drift
      gy: (Math.random()-0.5)*2,  // vertical drift
      rotate: (Math.random()-0.5)*1, // rotation deg
      phase: Math.random()*Math.PI*2,
      scale: 1 + (Math.random()-0.5)*0.03 // subtle random scale
    };
  });

  let time = 0;
  function animate(){
    time += 0.02;
    elements.forEach(el=>{
      const m = el.motion;
      const x = Math.sin(time+m.phase)*m.gx;
      const y = Math.cos(time+m.phase)*m.gy;
      const r = Math.sin(time+m.phase)*m.rotate;
      const s = m.scale;
      el.style.transform = `translate(${x}px,${y}px) rotate(${r}deg) scale(${s})`;
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Divider subtle WTF drift
  if(divider){
    setTimeout(()=>{ divider.style.transform='translateX(5px)'; },35000);
  }

  // Hover subtle boost
  document.addEventListener('pointerenter', e=>{
    const el = e.target.closest('[data-motion]');
    if(el) el.style.transition='transform 0.1s cubic-bezier(0.22,1,0.36,1)';
  }, true);

  document.addEventListener('pointerleave', e=>{
    const el = e.target.closest('[data-motion]');
    if(el) el.style.transition='transform 0.3s cubic-bezier(0.22,1,0.36,1)';
  }, true);

})();