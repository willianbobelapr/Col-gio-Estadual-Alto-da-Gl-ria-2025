// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;

            // Basic validation
            if (!nome || !email || !assunto || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and news cards
    document.querySelectorAll('.feature-card, .noticia-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Carrossel de Imagens
let currentImageIndex = 0;
const images = [
    'img/cafecomdiretores/WhatsApp Image 2025-06-18 at 08.29.20.jpeg',
    'img/cafecomdiretores/WhatsApp Image 2025-06-18 at 08.29.20 (1).jpeg',
    'img/cafecomdiretores/WhatsApp Image 2025-06-18 at 08.29.21.jpeg',
    'img/cafecomdiretores/WhatsApp Image 2025-06-18 at 08.29.21 (1).jpeg'
];

function openModal(imageIndex) {
    currentImageIndex = imageIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageNumber = document.getElementById('imageNumber');
    
    modal.style.display = 'block';
    modalImage.src = images[currentImageIndex];
    modalImage.alt = 'Café com Diretor - Equipe Pedagógica CEAG';
    imageNumber.textContent = currentImageIndex + 1;
    
    // Previne o scroll da página quando o modal está aberto
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop das imagens
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    const imageNumber = document.getElementById('imageNumber');
    
    modalImage.src = images[currentImageIndex];
    imageNumber.textContent = currentImageIndex + 1;
}

// Fechar modal clicando fora da imagem
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

// Navegação por teclado
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal && modal.style.display === 'block') {
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    }
}); 