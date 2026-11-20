document.addEventListener('DOMContentLoaded', () => {
            // 1. Control del botón interactivo de Curiosidades
            const btnCuriosidades = document.getElementById('btn-curiosidades');
            const listaCuriosidades = document.getElementById('lista-curiosidades');
            const textoBoton = document.getElementById('texto-boton');
            const iconoBoton = document.getElementById('icono-boton');

            if (btnCuriosidades && listaCuriosidades) {
                btnCuriosidades.addEventListener('click', () => {
                    // Alternar la visibilidad de la lista
                    const estaOculto = listaCuriosidades.classList.contains('hidden');

                    if (estaOculto) {
                        listaCuriosidades.classList.remove('hidden');
                        listaCuriosidades.classList.add('animate-fade-in');
                        btnCuriosidades.setAttribute('aria-expanded', 'true');
                        textoBoton.textContent = 'Ocultar Curiosidades';
                        iconoBoton.style.transform = 'rotate(180deg)';
                    } else {
                        listaCuriosidades.classList.add('hidden');
                        listaCuriosidades.classList.remove('animate-fade-in');
                        btnCuriosidades.setAttribute('aria-expanded', 'false');
                        textoBoton.textContent = 'Mostrar Curiosidades de Santa Cruz';
                        iconoBoton.style.transform = 'rotate(0deg)';
                    }
                });
            }

            // 2. Control del menú de navegación en dispositivos móviles
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                // Cerrar menú móvil al hacer clic en cualquier enlace
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }
        });
