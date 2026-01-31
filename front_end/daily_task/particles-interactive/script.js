const container = document.querySelector('.particle-container');
const viewport = { width: window.innerWidth, height: window.innerHeight };
const particleCount = 50;
const particleObjects = [];
let mouse = { x: viewport.width/2, y: viewport.height/2, isHover:false };

window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.isHover = true; });
window.addEventListener('mouseout', e => { mouse.isHover = false; });

class Particle {
  constructor(x, y, size){
    this.size = size;
    this.el = document.createElement('div');
    this.el.classList.add('particle');
    this.el.style.width = `${size}px`;
    this.el.style.height = `${size}px`;
    this.el.style.backgroundColor = `rgba(46,46,46,${0.05 + Math.random()*0.05})`;
    container.appendChild(this.el);
    
    this.x = x;
    this.y = y;
    this.vx = (Math.random()-0.5)*0.4;
    this.vy = (Math.random()-0.5)*0.4;
  }
  
  update(particles){
    // Cursor attraction
    if(mouse.isHover){
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      this.vx += dx * 0.0005;
      this.vy += dy * 0.0005;
    }
    
    // Repulsion from other particles
    for(const p of particles){
      if(p === this) continue;
      const dx = this.x - p.x;
      const dy = this.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const minDist = (this.size + p.size)*1.2; // leave space
      if(dist < minDist && dist>0){
        const force = (minDist - dist)/dist*0.03; // repulsion strength
        this.vx += dx * force;
        this.vy += dy * force;
      }
    }
    
    // Random floating
    this.vx += (Math.random()-0.5)*0.01;
    this.vy += (Math.random()-0.5)*0.01;
    
    // Damping
    this.vx *= 0.94;
    this.vy *= 0.94;
    
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    
    // Keep inside viewport
    if(this.x < 0){ this.x=0; this.vx*=-1; }
    if(this.x > viewport.width){ this.x=viewport.width; this.vx*=-1; }
    if(this.y < 0){ this.y=0; this.vy*=-1; }
    if(this.y > viewport.height){ this.y=viewport.height; this.vy*=-1; }
    
    this.el.style.transform = `translate3d(${this.x}px, ${this.y}px,0)`;
  }
}

// Initialize particles with random positions ensuring no initial overlap
for(let i=0; i<particleCount; i++){
  let tries = 0;
  let size = 4 + Math.random()*4;
  let x, y;
  while(true){
    x = Math.random()*(viewport.width - size);
    y = Math.random()*(viewport.height - size);
    let ok = true;
    for(const p of particleObjects){
      const dx = x - p.x;
      const dy = y - p.y;
      if(Math.sqrt(dx*dx + dy*dy) < (size + p.size)*1.2){ ok=false; break; }
    }
    if(ok || tries++>50) break;
  }
  particleObjects.push(new Particle(x,y,size));
}

function animate(){
  for(const p of particleObjects){
    p.update(particleObjects);
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', ()=>{
  viewport.width = window.innerWidth;
  viewport.height = window.innerHeight;
});

animate();