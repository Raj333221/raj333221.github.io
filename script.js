const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                sections.forEach(section => section.classList.remove('active'));
                const target = document.querySelector(this.getAttribute('href'));
                target.classList.add('active');
                window.scrollTo(0, 0); // Scroll to top to ensure section appears below nav bar
            });
        });

        function createPolygon() {
            const polygon = document.createElement('div');
            polygon.classList.add('polygon');
            polygon.style.left = Math.random() * window.innerWidth + 'px';
            polygon.style.width = polygon.style.height = Math.random() * 10 + 5 + 'px';
            polygon.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.getElementById('snowfall').appendChild(polygon);

            setTimeout(() => {
                polygon.remove();
            }, 5000);
        }

        setInterval(createPolygon, 100);

        document.addEventListener('mousemove', (e) => {
            const polygons = document.querySelectorAll('.polygon');
            polygons.forEach(polygon => {
                const rect = polygon.getBoundingClientRect();
                const dx = e.clientX - rect.left - rect.width / 2;
                const dy = e.clientY - rect.top - rect.height / 2;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    polygon.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
                }
            });
        });

        function createThunder() {
            const thunder = document.createElement('div');
            thunder.classList.add('thunder');
            thunder.style.left = Math.random() * window.innerWidth + 'px';
            thunder.style.width = thunder.style.height = Math.random() * 10 + 5 + 'px';
            thunder.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.getElementById('snowfall').appendChild(thunder);

            setTimeout(() => {
                thunder.remove();
            }, 5000);
        }

        setInterval(createThunder, 100);

        document.addEventListener('mousemove', (e) => {
            const elements = document.querySelectorAll('.polygon, .thunder');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const dx = e.clientX - rect.left - rect.width / 2;
                const dy = e.clientY - rect.top - rect.height / 2;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    element.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
                }
            });
        });

        document.addEventListener('click', (e) => {
            const thunder = document.createElement('div');
            thunder.classList.add('thunder');
            thunder.style.left = e.clientX + 'px';
            thunder.style.top = e.clientY + 'px';
            thunder.style.width = thunder.style.height = '50px';
            thunder.style.animation = 'flash 0.5s linear';
            document.body.appendChild(thunder);

            setTimeout(() => {
                thunder.remove();
            }, 500);
        });

        function toggleFeedbackForm() {
            var form = document.getElementById('feedbackForm');
            form.classList.toggle('open');
        }