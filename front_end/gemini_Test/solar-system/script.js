class SolarSystem {
    constructor() {
        this.canvas = document.getElementById('solarCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.animationId = null;
        this.isPaused = false;
        this.showTrails = true;
        this.showLabels = true;
        this.scale = 1;
        this.speed = 1;
        this.time = 0;
        this.trails = [];
        this.maxTrailLength = 100;
        
        this.setupCanvas();
        this.createStars();
        this.initializePlanets();
        this.setupControls();
        this.setupMouseInteraction();
        this.startAnimation();
    }
    
    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.centerX = this.canvas.width / 2;
            this.centerY = this.canvas.height / 2;
        });
    }
    
    createStars() {
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.opacity = Math.random() * 0.8 + 0.2;
            
            // Animate twinkling
            anime({
                targets: star,
                opacity: [0.2, 1, 0.2],
                duration: Math.random() * 3000 + 2000,
                loop: true,
                easing: 'easeInOutSine'
            });
            
            starsContainer.appendChild(star);
        }
    }
    
    initializePlanets() {
        this.sun = {
            x: this.centerX,
            y: this.centerY,
            radius: 30,
            color: '#FDB813',
            glowColor: '#FF6B35',
            name: 'Sun'
        };
        
        this.planets = [
            {
                name: 'Mercury',
                orbitRadius: 80,
                radius: 4,
                color: '#8C7853',
                speed: 0.04,
                angle: 0,
                distance: '57.9 million km',
                period: '88 days'
            },
            {
                name: 'Venus',
                orbitRadius: 110,
                radius: 7,
                color: '#FFC649',
                speed: 0.03,
                angle: Math.PI / 4,
                distance: '108.2 million km',
                period: '225 days'
            },
            {
                name: 'Earth',
                orbitRadius: 150,
                radius: 8,
                color: '#4F94CD',
                speed: 0.025,
                angle: Math.PI / 2,
                distance: '149.6 million km',
                period: '365 days',
                hasRing: false,
                hasMoon: true
            },
            {
                name: 'Mars',
                orbitRadius: 190,
                radius: 6,
                color: '#CD5C5C',
                speed: 0.02,
                angle: Math.PI,
                distance: '227.9 million km',
                period: '687 days'
            },
            {
                name: 'Jupiter',
                orbitRadius: 260,
                radius: 20,
                color: '#D2691E',
                speed: 0.015,
                angle: Math.PI * 1.5,
                distance: '778.5 million km',
                period: '12 years',
                hasRing: true
            },
            {
                name: 'Saturn',
                orbitRadius: 320,
                radius: 16,
                color: '#FAD5A5',
                speed: 0.012,
                angle: Math.PI * 0.8,
                distance: '1.43 billion km',
                period: '29 years',
                hasRing: true
            },
            {
                name: 'Uranus',
                orbitRadius: 380,
                radius: 12,
                color: '#4FD0E4',
                speed: 0.008,
                angle: Math.PI * 0.3,
                distance: '2.88 billion km',
                period: '84 years',
                hasRing: true
            },
            {
                name: 'Neptune',
                orbitRadius: 430,
                radius: 11,
                color: '#4169E1',
                speed: 0.006,
                angle: Math.PI * 1.8,
                distance: '4.50 billion km',
                period: '165 years'
            }
        ];
        
        this.updatePlanetInfo();
    }
    
    setupControls() {
        const speedControl = document.getElementById('speedControl');
        const zoomControl = document.getElementById('zoomControl');
        const pauseBtn = document.getElementById('pauseBtn');
        const trailsBtn = document.getElementById('trailsBtn');
        const labelsBtn = document.getElementById('labelsBtn');
        
        speedControl.addEventListener('input', (e) => {
            this.speed = parseFloat(e.target.value);
        });
        
        zoomControl.addEventListener('input', (e) => {
            this.scale = parseFloat(e.target.value);
        });
        
        pauseBtn.addEventListener('click', () => {
            this.togglePause();
        });
        
        trailsBtn.addEventListener('click', () => {
            this.showTrails = !this.showTrails;
            if (!this.showTrails) {
                this.trails = [];
            }
        });
        
        labelsBtn.addEventListener('click', () => {
            this.showLabels = !this.showLabels;
        });
    }
    
    setupMouseInteraction() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            this.hoveredPlanet = null;
            
            // Check if mouse is over any planet
            this.planets.forEach(planet => {
                const planetX = this.centerX + planet.orbitRadius * this.scale * Math.cos(planet.angle);
                const planetY = this.centerY + planet.orbitRadius * this.scale * Math.sin(planet.angle);
                const distance = Math.sqrt((mouseX - planetX) ** 2 + (mouseY - planetY) ** 2);
                
                if (distance < planet.radius * this.scale + 10) {
                    this.hoveredPlanet = planet;
                }
            });
            
            // Check sun
            const sunDistance = Math.sqrt((mouseX - this.centerX) ** 2 + (mouseY - this.centerY) ** 2);
            if (sunDistance < this.sun.radius * this.scale + 10) {
                this.hoveredPlanet = this.sun;
            }
        });
    }
    
    updatePlanetInfo() {
        const infoDiv = document.getElementById('planetInfo');
        let infoHTML = '';
        
        this.planets.forEach(planet => {
            infoHTML += `
                <div class="planet-info">
                    <strong>${planet.name}</strong><br>
                    Distance: ${planet.distance}<br>
                    Orbital Period: ${planet.period}
                </div>
            `;
        });
        
        infoDiv.innerHTML = infoHTML;
    }
    
    togglePause() {
        this.isPaused = !this.isPaused;
        if (!this.isPaused) {
            this.startAnimation();
        }
    }
    
    startAnimation() {
        if (this.isPaused) return;
        this.animate();
    }
    
    animate() {
        if (this.isPaused) return;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update time
        this.time += this.speed;
        
        // Draw trails first (behind planets)
        if (this.showTrails) {
            this.drawTrails();
        }
        
        // Draw orbit paths
        this.drawOrbitPaths();
        
        // Update planet positions and draw them
        this.updatePlanets();
        this.drawPlanets();
        
        // Draw sun
        this.drawSun();
        
        // Draw labels if enabled
        if (this.showLabels) {
            this.drawLabels();
        }
        
        // Draw hover info
        this.drawHoverInfo();
        
        // Continue animation
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    drawOrbitPaths() {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 1;
        
        this.planets.forEach(planet => {
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, planet.orbitRadius * this.scale, 0, Math.PI * 2);
            this.ctx.stroke();
        });
    }
    
    updatePlanets() {
        this.planets.forEach(planet => {
            planet.angle += planet.speed * this.speed;
            
            // Store trail positions
            if (this.showTrails) {
                const x = this.centerX + planet.orbitRadius * this.scale * Math.cos(planet.angle);
                const y = this.centerY + planet.orbitRadius * this.scale * Math.sin(planet.angle);
                
                if (!planet.trail) planet.trail = [];
                planet.trail.push({ x, y });
                
                if (planet.trail.length > this.maxTrailLength) {
                    planet.trail.shift();
                }
            }
        });
    }
    
    drawTrails() {
        this.planets.forEach(planet => {
            if (planet.trail && planet.trail.length > 1) {
                this.ctx.strokeStyle = planet.color;
                this.ctx.lineWidth = 2;
                this.ctx.globalAlpha = 0.3;
                
                this.ctx.beginPath();
                this.ctx.moveTo(planet.trail[0].x, planet.trail[0].y);
                
                for (let i = 1; i < planet.trail.length; i++) {
                    this.ctx.lineTo(planet.trail[i].x, planet.trail[i].y);
                }
                
                this.ctx.stroke();
                this.ctx.globalAlpha = 1;
            }
        });
    }
    
    drawSun() {
        // Sun glow effect
        const gradient = this.ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, this.sun.radius * this.scale * 2
        );
        gradient.addColorStop(0, this.sun.color);
        gradient.addColorStop(0.7, this.sun.glowColor);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.sun.radius * this.scale * 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Sun core
        this.ctx.fillStyle = this.sun.color;
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.sun.radius * this.scale, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Sun corona animation
        this.ctx.strokeStyle = `rgba(255, 184, 19, ${0.5 + 0.3 * Math.sin(this.time * 0.05)})`;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, (this.sun.radius + 5) * this.scale, 0, Math.PI * 2);
        this.ctx.stroke();
    }
    
    drawPlanets() {
        this.planets.forEach(planet => {
            const x = this.centerX + planet.orbitRadius * this.scale * Math.cos(planet.angle);
            const y = this.centerY + planet.orbitRadius * this.scale * Math.sin(planet.angle);
            
            // Planet shadow/depth
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            this.ctx.beginPath();
            this.ctx.arc(x + 2, y + 2, planet.radius * this.scale, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Planet body
            this.ctx.fillStyle = planet.color;
            this.ctx.beginPath();
            this.ctx.arc(x, y, planet.radius * this.scale, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Planet highlight
            const highlightGradient = this.ctx.createRadialGradient(
                x - planet.radius * this.scale * 0.3,
                y - planet.radius * this.scale * 0.3,
                0,
                x,
                y,
                planet.radius * this.scale
            );
            highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            highlightGradient.addColorStop(1, 'transparent');
            
            this.ctx.fillStyle = highlightGradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, planet.radius * this.scale, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw rings for gas giants
            if (planet.hasRing) {
                this.drawPlanetRings(x, y, planet);
            }
            
            // Draw moon for Earth
            if (planet.hasMoon && planet.name === 'Earth') {
                this.drawMoon(x, y, planet);
            }
        });
    }
    
    drawPlanetRings(x, y, planet) {
        this.ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
        this.ctx.lineWidth = 2;
        
        for (let i = 1; i <= 3; i++) {
            this.ctx.beginPath();
            this.ctx.ellipse(
                x, y,
                (planet.radius + i * 5) * this.scale,
                (planet.radius + i * 3) * this.scale,
                0, 0, Math.PI * 2
            );
            this.ctx.stroke();
        }
    }
    
    drawMoon(planetX, planetY, planet) {
        const moonAngle = this.time * 0.1;
        const moonDistance = planet.radius * this.scale + 15;
        const moonX = planetX + moonDistance * Math.cos(moonAngle);
        const moonY = planetY + moonDistance * Math.sin(moonAngle);
        
        this.ctx.fillStyle = '#C0C0C0';
        this.ctx.beginPath();
        this.ctx.arc(moonX, moonY, 3 * this.scale, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    drawLabels() {
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'white';
        
        // Sun label
        this.ctx.fillText('Sun', this.centerX, this.centerY + this.sun.radius * this.scale + 20);
        
        // Planet labels
        this.planets.forEach(planet => {
            const x = this.centerX + planet.orbitRadius * this.scale * Math.cos(planet.angle);
            const y = this.centerY + planet.orbitRadius * this.scale * Math.sin(planet.angle);
            
            this.ctx.fillText(planet.name, x, y + planet.radius * this.scale + 15);
        });
    }
    
    drawHoverInfo() {
        if (this.hoveredPlanet) {
            const info = this.hoveredPlanet;
            this.ctx.font = '14px Arial';
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            this.ctx.fillRect(10, 10, 200, 80);
            
            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`Name: ${info.name}`, 20, 30);
            
            if (info.distance) {
                this.ctx.fillText(`Distance: ${info.distance}`, 20, 50);
                this.ctx.fillText(`Period: ${info.period}`, 20, 70);
            }
        }
    }
}

// Initialize the solar system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SolarSystem();
});