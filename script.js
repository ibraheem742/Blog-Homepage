const buttons = document.querySelectorAll('.btn');
const blogCards = document.querySelectorAll('.blog-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.trim();

            blogCards.forEach(card => {
                const blogCategory = card.querySelector('.blog-category').textContent.trim();

                if (category === 'All' || blogCategory === category) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none'; 
            }
        });
    });
});