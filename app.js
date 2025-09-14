// Ultimate Dark Theme 3D Portfolio - Complete JavaScript Implementation
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all dark theme components
    initDarkThemeEffects();
    initAdvancedSparksSystem();
    initCursorTrail();
    initRotatingElements();
    initSmoothScrolling();
    initTypewriterEffect();
    initSkillAnimations();
    initCounterAnimations();
    initProjectFiltering();
    initCertificationFiltering();
    initScrollAnimations();
    init3DHoverEffects();
    initContactForm();
    initNavigationHighlight();
    initNeonGlowEffects();
    initHolographicElements();
    initOrbitalSystem();
    initFloatingWireframes();
    
    // Dark theme initialization
    function initDarkThemeEffects() {
        // Add dark theme class and initialize neon effects
        document.body.classList.add('dark-theme');
        
        // Create dynamic background patterns
        createBackgroundPatterns();
        
        // Initialize space particles
        createSpaceParticles();
        
        // Add neon glow effects to interactive elements
        addNeonGlowEffects();
    }
    
    // Advanced Sparks System with multiple colors and behaviors
    function initAdvancedSparksSystem() {
        const sparksContainer = document.querySelector('.sparks-container');
        if (!sparksContainer) return;
        
        const sparkColors = ['blue', 'purple', 'cyan', 'pink'];
        let sparksArray = [];
        
        // Create continuous spark generation
        setInterval(() => {
            if (sparksArray.length < 50) {
                createSpark();
            }
        }, 200);
        
        function createSpark() {
            const spark = document.createElement('div');
            spark.className = `spark ${sparkColors[Math.floor(Math.random() * sparkColors.length)]}`;
            
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const endX = Math.random() * window.innerWidth;
            const endY = Math.random() * window.innerHeight;
            const duration = Math.random() * 3000 + 2000;
            
            spark.style.cssText = `
                left: ${startX}px;
                top: ${startY}px;
                opacity: 1;
                transform: scale(1);
            `;
            
            sparksContainer.appendChild(spark);
            sparksArray.push(spark);
            
            // Animate spark movement
            const animation = spark.animate([
                { 
                    left: `${startX}px`, 
                    top: `${startY}px`, 
                    opacity: 1, 
                    transform: 'scale(1)' 
                },
                { 
                    left: `${endX}px`, 
                    top: `${endY}px`, 
                    opacity: 0, 
                    transform: 'scale(0)' 
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                if (sparksContainer.contains(spark)) {
                    sparksContainer.removeChild(spark);
                    const index = sparksArray.indexOf(spark);
                    if (index > -1) {
                        sparksArray.splice(index, 1);
                    }
                }
            };
        }
        
        // Interaction burst effects
        document.addEventListener('click', (e) => {
            createInteractionBurst(e.clientX, e.clientY);
        });
        
        function createInteractionBurst(x, y) {
            for (let i = 0; i < 8; i++) {
                const spark = document.createElement('div');
                spark.className = `spark ${sparkColors[Math.floor(Math.random() * sparkColors.length)]}`;
                
                const angle = (i / 8) * Math.PI * 2;
                const distance = 100 + Math.random() * 50;
                const endX = x + Math.cos(angle) * distance;
                const endY = y + Math.sin(angle) * distance;
                
                spark.style.cssText = `
                    left: ${x}px;
                    top: ${y}px;
                    opacity: 1;
                    transform: scale(1);
                `;
                
                sparksContainer.appendChild(spark);
                
                const animation = spark.animate([
                    { left: `${x}px`, top: `${y}px`, opacity: 1, transform: 'scale(1)' },
                    { left: `${endX}px`, top: `${endY}px`, opacity: 0, transform: 'scale(0)' }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => {
                    if (sparksContainer.contains(spark)) {
                        sparksContainer.removeChild(spark);
                    }
                };
            }
        }
    }
    
    // Enhanced Cursor Trail System
    function initCursorTrail() {
        const trail = document.querySelector('.cursor-trail');
        if (!trail) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function updateTrail() {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            trail.style.left = trailX - 10 + 'px';
            trail.style.top = trailY - 10 + 'px';
            
            requestAnimationFrame(updateTrail);
        }
        
        updateTrail();
        
        // Add click effect to cursor trail
        document.addEventListener('click', () => {
            trail.style.transform = 'scale(2)';
            trail.style.opacity = '0.8';
            
            setTimeout(() => {
                trail.style.transform = 'scale(1)';
                trail.style.opacity = '0.4';
            }, 150);
        });
    }
    
    // Rotating Elements System
    function initRotatingElements() {
        // Navigation rings rotation
        const navRings = document.querySelectorAll('.nav-ring');
        navRings.forEach(ring => {
            ring.style.animation = ring.style.animation || 'rotateRing 10s linear infinite';
        });
        
        // Constellation rotation
        const constellation = document.querySelector('.rotating-constellation');
        if (constellation) {
            constellation.style.animation = 'constellation 30s linear infinite';
        }
        
        // Certificate medallion rings
        const certRings = document.querySelectorAll('.cert-glow-ring');
        certRings.forEach((ring, index) => {
            ring.style.animation = `rotateRing ${10 + index * 2}s linear infinite`;
            ring.style.animationDirection = index % 2 === 0 ? 'normal' : 'reverse';
        });
    }
    
    // Orbital System Animation
    function initOrbitalSystem() {
        const orbitalSystem = document.querySelector('.orbital-system');
        if (!orbitalSystem) return;
        
        // Add dynamic orbital elements
        const orbits = document.querySelectorAll('.orbit');
        orbits.forEach((orbit, index) => {
            // Add trailing effect
            const trail = document.createElement('div');
            trail.className = 'orbit-trail';
            trail.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                border: 1px solid rgba(0, 212, 255, 0.1);
                border-radius: 50%;
                animation: orbit ${20 + index * 10}s linear infinite;
                animation-direction: ${index % 2 === 0 ? 'normal' : 'reverse'};
            `;
            orbit.appendChild(trail);
        });
    }
    
    // Floating Wireframes Animation
    function initFloatingWireframes() {
        const wireframes = document.querySelectorAll('.wireframe');
        wireframes.forEach((wireframe, index) => {
            // Add particle trail to wireframes
            setInterval(() => {
                createWireframeTrail(wireframe);
            }, 2000 + index * 500);
        });
        
        function createWireframeTrail(wireframe) {
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: ${wireframe.style.borderColor || 'var(--neon-cyan)'};
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.8;
            `;
            
            const rect = wireframe.getBoundingClientRect();
            trail.style.left = rect.left + rect.width / 2 + 'px';
            trail.style.top = rect.top + rect.height / 2 + 'px';
            
            document.body.appendChild(trail);
            
            trail.animate([
                { opacity: 0.8, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0) translateY(-50px)' }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => {
                if (document.body.contains(trail)) {
                    document.body.removeChild(trail);
                }
            };
        }
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    // Add scroll spark effect
                    createScrollSparks();
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        function createScrollSparks() {
            const sparksContainer = document.querySelector('.sparks-container');
            if (!sparksContainer) return;
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark blue';
                    spark.style.cssText = `
                        left: ${Math.random() * window.innerWidth}px;
                        top: ${Math.random() * window.innerHeight}px;
                        opacity: 1;
                    `;
                    
                    sparksContainer.appendChild(spark);
                    
                    spark.animate([
                        { opacity: 1, transform: 'scale(1) rotate(0deg)' },
                        { opacity: 0, transform: 'scale(0) rotate(360deg)' }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (sparksContainer.contains(spark)) {
                            sparksContainer.removeChild(spark);
                        }
                    };
                }, i * 100);
            }
        }
    }
    
    // Enhanced typewriter effect
    function initTypewriterEffect() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement) return;
        
        const text = "Crafting the Future with Artificial Intelligence & Immersive Experiences";
        typewriterElement.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    typewriterElement.textContent += text.charAt(i);
                    
                    // Add typing spark effect
                    if (Math.random() > 0.7) {
                        createTypingSpark(typewriterElement);
                    }
                    
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 80);
        }, 1500);
        
        function createTypingSpark(element) {
            const rect = element.getBoundingClientRect();
            const spark = document.createElement('div');
            spark.className = 'spark cyan';
            spark.style.cssText = `
                position: fixed;
                left: ${rect.right}px;
                top: ${rect.top + rect.height / 2}px;
                opacity: 1;
                z-index: 10000;
                pointer-events: none;
            `;
            
            document.body.appendChild(spark);
            
            spark.animate([
                { opacity: 1, transform: 'scale(1) translateX(0)' },
                { opacity: 0, transform: 'scale(0) translateX(20px)' }
            ], {
                duration: 500,
                easing: 'ease-out'
            }).onfinish = () => {
                if (document.body.contains(spark)) {
                    document.body.removeChild(spark);
                }
            };
        }
    }
    
    // Enhanced skill animations with neon effects
    function initSkillAnimations() {
        const skillCards = document.querySelectorAll('.skill-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    const level = progressBar.dataset.level;
                    
                    setTimeout(() => {
                        progressBar.style.width = level + '%';
                        
                        // Add progress animation sparks
                        createProgressSparks(progressBar);
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillCards.forEach(card => observer.observe(card));
        
        function createProgressSparks(progressBar) {
            const rect = progressBar.getBoundingClientRect();
            
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark purple';
                    spark.style.cssText = `
                        position: fixed;
                        left: ${rect.right - 5}px;
                        top: ${rect.top + rect.height / 2}px;
                        opacity: 1;
                        z-index: 10000;
                        pointer-events: none;
                    `;
                    
                    document.body.appendChild(spark);
                    
                    spark.animate([
                        { opacity: 1, transform: 'scale(1) translateY(0)' },
                        { opacity: 0, transform: 'scale(0) translateY(-30px)' }
                    ], {
                        duration: 800,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (document.body.contains(spark)) {
                            document.body.removeChild(spark);
                        }
                    };
                }, i * 200);
            }
        }
    }
    
    // Enhanced counter animations with neon glow
    function initCounterAnimations() {
        const counters = document.querySelectorAll('[data-target]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const increment = target / 50;
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            const value = Math.ceil(current);
                            
                            // Format based on data
                            if (target === 150) {
                                counter.textContent = value + '+';
                            } else if (target === 25) {
                                counter.textContent = value + 'K+';
                            } else {
                                counter.textContent = value + '+';
                            }
                            
                            // Add counter spark effect
                            if (Math.random() > 0.8) {
                                createCounterSpark(counter);
                            }
                            
                            setTimeout(updateCounter, 40);
                        } else {
                            // Final value
                            if (target === 150) {
                                counter.textContent = target + '+';
                            } else if (target === 25) {
                                counter.textContent = target + 'K+';
                            } else {
                                counter.textContent = target + '+';
                            }
                        }
                    };
                    
                    setTimeout(updateCounter, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
        
        function createCounterSpark(counter) {
            const rect = counter.getBoundingClientRect();
            const spark = document.createElement('div');
            spark.className = 'spark pink';
            spark.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top}px;
                opacity: 1;
                z-index: 10000;
                pointer-events: none;
            `;
            
            document.body.appendChild(spark);
            
            spark.animate([
                { opacity: 1, transform: 'scale(1) translateY(0)' },
                { opacity: 0, transform: 'scale(0) translateY(-40px)' }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                if (document.body.contains(spark)) {
                    document.body.removeChild(spark);
                }
            };
        }
    }
    
    // Enhanced project filtering with animations
    function initProjectFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button with neon effect
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.transform = 'scale(1)';
                });
                this.classList.add('active');
                this.style.transform = 'scale(1.1)';
                
                // Create filter effect sparks
                createFilterSparks(this);
                
                // Filter projects with enhanced animation
                projectCards.forEach(card => {
                    const category = card.dataset.category;
                    const shouldShow = filter === 'all' || category === filter;
                    
                    card.classList.remove('filtered-in', 'filtered-out');
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('filtered-in');
                        }, 50);
                    } else {
                        card.classList.add('filtered-out');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        function createFilterSparks(button) {
            const rect = button.getBoundingClientRect();
            
            for (let i = 0; i < 6; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark blue';
                
                const angle = (i / 6) * Math.PI * 2;
                const startX = rect.left + rect.width / 2;
                const startY = rect.top + rect.height / 2;
                const endX = startX + Math.cos(angle) * 50;
                const endY = startY + Math.sin(angle) * 50;
                
                spark.style.cssText = `
                    position: fixed;
                    left: ${startX}px;
                    top: ${startY}px;
                    opacity: 1;
                    z-index: 10000;
                    pointer-events: none;
                `;
                
                document.body.appendChild(spark);
                
                spark.animate([
                    { left: `${startX}px`, top: `${startY}px`, opacity: 1 },
                    { left: `${endX}px`, top: `${endY}px`, opacity: 0 }
                ], {
                    duration: 800,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (document.body.contains(spark)) {
                        document.body.removeChild(spark);
                    }
                };
            }
        }
    }
    
    // Certification filtering system
    function initCertificationFiltering() {
        const filterButtons = document.querySelectorAll('.cert-filter-btn');
        const certCards = document.querySelectorAll('.cert-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.transform = 'scale(1)';
                });
                this.classList.add('active');
                this.style.transform = 'scale(1.1)';
                
                // Create certification filter sparks
                createCertFilterSparks(this);
                
                // Filter certifications
                certCards.forEach(card => {
                    const category = card.dataset.category;
                    const shouldShow = filter === 'all' || category === filter;
                    
                    card.classList.remove('filtered-in', 'filtered-out');
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('filtered-in');
                        }, 50);
                    } else {
                        card.classList.add('filtered-out');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        function createCertFilterSparks(button) {
            const rect = button.getBoundingClientRect();
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark purple';
                    
                    spark.style.cssText = `
                        position: fixed;
                        left: ${rect.left + Math.random() * rect.width}px;
                        top: ${rect.top + rect.height / 2}px;
                        opacity: 1;
                        z-index: 10000;
                        pointer-events: none;
                    `;
                    
                    document.body.appendChild(spark);
                    
                    spark.animate([
                        { opacity: 1, transform: 'scale(1) rotate(0deg)' },
                        { opacity: 0, transform: 'scale(0) rotate(180deg) translateY(-50px)' }
                    ], {
                        duration: 1200,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (document.body.contains(spark)) {
                            document.body.removeChild(spark);
                        }
                    };
                }, i * 50);
            }
        }
    }
    
    // Enhanced scroll animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.section, .timeline-item, .achievement-card, .cert-card, .project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in', 'visible');
                        
                        // Add entrance sparks
                        createEntranceSparks(entry.target);
                    }, index * 100);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        animatedElements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
        
        function createEntranceSparks(element) {
            const rect = element.getBoundingClientRect();
            
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark cyan';
                    
                    spark.style.cssText = `
                        position: fixed;
                        left: ${rect.left + Math.random() * rect.width}px;
                        top: ${rect.top + Math.random() * rect.height}px;
                        opacity: 1;
                        z-index: 10000;
                        pointer-events: none;
                    `;
                    
                    document.body.appendChild(spark);
                    
                    spark.animate([
                        { opacity: 1, transform: 'scale(1)' },
                        { opacity: 0, transform: 'scale(0) translateY(-30px)' }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (document.body.contains(spark)) {
                            document.body.removeChild(spark);
                        }
                    };
                }, i * 200);
            }
        }
    }
    
    // Enhanced 3D hover effects
    function init3DHoverEffects() {
        // Project cards 3D effects
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'perspective(1000px) rotateY(10deg) translateZ(30px) scale(1.05)';
                this.style.transition = 'all 0.3s ease-out';
                
                // Add hover sparks
                createHoverSparks(this);
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px) scale(1)';
            });
            
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) scale(1.05)`;
            });
        });
        
        // Certification cards 3D effects
        const certCards = document.querySelectorAll('.cert-card');
        
        certCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                createCertHoverSparks(this);
            });
        });
        
        function createHoverSparks(element) {
            const rect = element.getBoundingClientRect();
            
            for (let i = 0; i < 4; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark blue';
                
                spark.style.cssText = `
                    position: fixed;
                    left: ${rect.left + Math.random() * rect.width}px;
                    top: ${rect.bottom}px;
                    opacity: 1;
                    z-index: 10000;
                    pointer-events: none;
                `;
                
                document.body.appendChild(spark);
                
                spark.animate([
                    { opacity: 1, transform: 'scale(1) translateY(0)' },
                    { opacity: 0, transform: 'scale(0) translateY(-40px)' }
                ], {
                    duration: 800,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (document.body.contains(spark)) {
                        document.body.removeChild(spark);
                    }
                };
            }
        }
        
        function createCertHoverSparks(element) {
            const medallion = element.querySelector('.cert-medallion');
            if (!medallion) return;
            
            const rect = medallion.getBoundingClientRect();
            
            for (let i = 0; i < 6; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark purple';
                
                const angle = (i / 6) * Math.PI * 2;
                const radius = 50;
                const x = rect.left + rect.width / 2 + Math.cos(angle) * radius;
                const y = rect.top + rect.height / 2 + Math.sin(angle) * radius;
                
                spark.style.cssText = `
                    position: fixed;
                    left: ${x}px;
                    top: ${y}px;
                    opacity: 1;
                    z-index: 10000;
                    pointer-events: none;
                `;
                
                document.body.appendChild(spark);
                
                spark.animate([
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0)' }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (document.body.contains(spark)) {
                        document.body.removeChild(spark);
                    }
                };
            }
        }
    }
    
    // Enhanced contact form with neon effects
    function initContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Create submission spark burst
            createSubmissionSparks(submitBtn);
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.background = 'linear-gradient(45deg, var(--neon-purple), var(--neon-pink))';
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))';
                
                // Success sparks
                createSuccessSparks(submitBtn);
                
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))';
                }, 2000);
            }, 1500);
        });
        
        function createSubmissionSparks(button) {
            const rect = button.getBoundingClientRect();
            
            for (let i = 0; i < 10; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark pink';
                
                spark.style.cssText = `
                    position: fixed;
                    left: ${rect.left + rect.width / 2}px;
                    top: ${rect.top + rect.height / 2}px;
                    opacity: 1;
                    z-index: 10000;
                    pointer-events: none;
                `;
                
                const angle = (i / 10) * Math.PI * 2;
                const distance = 100;
                const endX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
                const endY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
                
                document.body.appendChild(spark);
                
                spark.animate([
                    { left: `${rect.left + rect.width / 2}px`, top: `${rect.top + rect.height / 2}px`, opacity: 1 },
                    { left: `${endX}px`, top: `${endY}px`, opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (document.body.contains(spark)) {
                        document.body.removeChild(spark);
                    }
                };
            }
        }
        
        function createSuccessSparks(button) {
            const rect = button.getBoundingClientRect();
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark cyan';
                    
                    spark.style.cssText = `
                        position: fixed;
                        left: ${rect.left + Math.random() * rect.width}px;
                        top: ${rect.top}px;
                        opacity: 1;
                        z-index: 10000;
                        pointer-events: none;
                    `;
                    
                    document.body.appendChild(spark);
                    
                    spark.animate([
                        { opacity: 1, transform: 'scale(1) translateY(0)' },
                        { opacity: 0, transform: 'scale(0) translateY(-60px)' }
                    ], {
                        duration: 1500,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (document.body.contains(spark)) {
                            document.body.removeChild(spark);
                        }
                    };
                }, i * 100);
            }
        }
    }
    
    // Navigation highlight with neon effects
    function initNavigationHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active-nav');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active-nav');
                            
                            // Add active link sparks
                            if (Math.random() > 0.8) {
                                createNavSparks(link);
                            }
                        }
                    });
                }
            });
        });
        
        function createNavSparks(link) {
            const rect = link.getBoundingClientRect();
            const spark = document.createElement('div');
            spark.className = 'spark cyan';
            
            spark.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.bottom + 5}px;
                opacity: 1;
                z-index: 10000;
                pointer-events: none;
            `;
            
            document.body.appendChild(spark);
            
            spark.animate([
                { opacity: 1, transform: 'scale(1) translateY(0)' },
                { opacity: 0, transform: 'scale(0) translateY(20px)' }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => {
                if (document.body.contains(spark)) {
                    document.body.removeChild(spark);
                }
            };
        }
    }
    
    // Neon glow effects system
    function initNeonGlowEffects() {
        const glowElements = document.querySelectorAll('.neon-glow, .neon-border, .neon-btn');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.filter = 'brightness(1.2) saturate(1.5)';
                this.style.transform = (this.style.transform || '') + ' scale(1.05)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.filter = 'brightness(1) saturate(1)';
                this.style.transform = this.style.transform.replace(' scale(1.05)', '');
            });
        });
    }
    
    // Holographic elements system
    function initHolographicElements() {
        const holographicElements = document.querySelectorAll('.holographic-card, .holographic-panel');
        
        holographicElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }
    
    // Background patterns creation
    function createBackgroundPatterns() {
        // Add dynamic starfield
        const starCount = 100;
        const starField = document.createElement('div');
        starField.className = 'starfield';
        starField.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(0, 212, 255, ${Math.random() * 0.8 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate;
            `;
            starField.appendChild(star);
        }
        
        document.body.appendChild(starField);
        
        // Add twinkle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.2; transform: scale(1); }
                100% { opacity: 1; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Space particles creation
    function createSpaceParticles() {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                createFloatingParticle();
            }, i * 100);
        }
        
        function createFloatingParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(${Math.random() > 0.5 ? '0, 212, 255' : '179, 71, 255'}, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
            `;
            
            document.body.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                    createFloatingParticle(); // Create new particle
                }
            }, (Math.random() * 20 + 10) * 1000);
        }
        
        // Add floating animation
        const style = document.createElement('style');
        style.textContent += `
            @keyframes floatParticle {
                0% { 
                    transform: translate(0, 0) rotate(0deg); 
                    opacity: 0; 
                }
                10% { 
                    opacity: 1; 
                }
                90% { 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add neon glow effects to interactive elements
    function addNeonGlowEffects() {
        // Add glow to project sparks
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const sparksContainer = card.querySelector('.project-sparks');
            if (sparksContainer) {
                // Create mini spark effects
                setInterval(() => {
                    if (card.matches(':hover')) {
                        createProjectSparks(sparksContainer);
                    }
                }, 500);
            }
        });
        
        function createProjectSparks(container) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--neon-cyan);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                box-shadow: 0 0 10px var(--neon-cyan);
                animation: projectSpark 2s ease-out forwards;
            `;
            
            container.appendChild(spark);
            
            setTimeout(() => {
                if (container.contains(spark)) {
                    container.removeChild(spark);
                }
            }, 2000);
        }
        
        // Add project spark animation
        const style = document.createElement('style');
        style.textContent += `
            @keyframes projectSpark {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0) translateY(-30px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Performance optimization for mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        // Reduce particle count and effects on mobile
        const style = document.createElement('style');
        style.textContent = `
            .sparks-container { display: none; }
            .cursor-trail { display: none; }
            .orbital-system { display: none; }
            .floating-wireframes { display: none; }
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize loading screen with sparks
    window.addEventListener('load', function() {
        const body = document.body;
        body.style.opacity = '0';
        body.style.transition = 'opacity 0.5s ease-out';
        
        // Create loading sparks
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const spark = document.createElement('div');
                spark.className = 'spark blue';
                spark.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    opacity: 1;
                    z-index: 10001;
                    pointer-events: none;
                `;
                
                document.body.appendChild(spark);
                
                spark.animate([
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0)' }
                ], {
                    duration: 2000,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (document.body.contains(spark)) {
                        document.body.removeChild(spark);
                    }
                };
            }, i * 50);
        }
        
        setTimeout(() => {
            body.style.opacity = '1';
        }, 100);
    });
    
    // Console welcome message with neon styling
    console.log('%c🌌 Ultimate Dark Theme 3D Portfolio Loaded! 🌌', 'color: #00d4ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00d4ff;');
    console.log('%cCrafting the Future with Artificial Intelligence & Immersive Experiences', 'color: #b347ff; font-size: 14px; text-shadow: 0 0 5px #b347ff;');
    
});

// Utility functions for dark theme effects
function createNeonRipple(x, y, color = 'blue') {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border: 2px solid var(--neon-${color});
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: neonRipple 1s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes neonRipple {
            0% { 
                width: 0; 
                height: 0; 
                opacity: 1; 
                margin-left: 0; 
                margin-top: 0;
                box-shadow: 0 0 20px var(--neon-${color});
            }
            100% { 
                width: 100px; 
                height: 100px; 
                opacity: 0; 
                margin-left: -50px; 
                margin-top: -50px;
                box-shadow: 0 0 50px var(--neon-${color});
            }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        if (document.body.contains(ripple)) {
            document.body.removeChild(ripple);
        }
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
    }, 1000);
}

// Global click handler for ripple effects
document.addEventListener('click', (e) => {
    const colors = ['blue', 'purple', 'cyan', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    createNeonRipple(e.clientX, e.clientY, randomColor);
});

// Performance monitoring for dark theme
function trackDarkThemePerformance() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log(`%cDark Theme Portfolio loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`, 'color: #00ffff; text-shadow: 0 0 5px #00ffff;');
        }
    }
}

// Initialize performance tracking
window.addEventListener('load', trackDarkThemePerformance);