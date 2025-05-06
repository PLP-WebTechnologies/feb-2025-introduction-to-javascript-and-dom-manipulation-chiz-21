document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const addProductBtn = document.getElementById('add-product');
    const productContainer = document.getElementById('product-container');
    const warrantyBtn = document.getElementById('warranty-btn');
    const warrantyFeature = document.getElementById('warranty-feature');
    const detailButtons = document.querySelectorAll('.details-btn');

    const products = [
        { name: "Vertical Farming Kit", description: "Grow crops with minimal space and water" },
        { name: "Organic Pest Control", description: "Natural insect repellents safe for crops and bees" },
        { name: "Drip Irrigation System", description: "Conserve water while maximizing hydration" },
        { name: "Seedling Starter Tray", description: "Biodegradable trays for seed germination" }
    ];

    let productIndex = 0;

    // Theme toggle functionality
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Switch to Light Theme';
            document.querySelector('.hero h1').textContent = 'Sustainability After Sunset';
        } else {
            themeToggle.textContent = 'Toggle Eco Mode';
            document.querySelector('.hero h1').textContent = 'Innovating Sustainable Agriculture';
        }
    });

    // Add new product functionality
    addProductBtn.addEventListener('click', function () {
        if (productIndex < products.length) {
            const newProduct = document.createElement('div');
            newProduct.className = 'product-card fadeIn';

            newProduct.innerHTML = `
                <h3>${products[productIndex].name}</h3>
                <p>${products[productIndex].description}</p>
                <button class="details-btn">Learn More</button>
            `;

            productContainer.appendChild(newProduct);
            newProduct.querySelector('.details-btn').addEventListener('click', showProductDetails);
            productIndex++;

            if (productIndex >= products.length) {
                addProductBtn.textContent = 'All Solutions Added';
                addProductBtn.disabled = true;
            }
        }
    });

    // Warranty button functionality
    warrantyBtn.addEventListener('click', function () {
        warrantyFeature.classList.toggle('highlight');

        if (warrantyFeature.classList.contains('highlight')) {
            warrantyFeature.querySelector('h3').textContent = 'EcoCare Warranty';
            warrantyFeature.querySelector('p').textContent = 'Extended to 5 years, covering environmental wear';
            warrantyBtn.textContent = 'Revert to Basic';
        } else {
            warrantyFeature.querySelector('h3').textContent = 'Eco Warranty';
            warrantyFeature.querySelector('p').textContent = 'Our tools come with a 2-year eco-care plan';
            warrantyBtn.textContent = 'Extend Coverage';
        }
    });

    // Product details functionality
    function showProductDetails() {
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').textContent;

        if (this.textContent === 'Learn More') {
            this.textContent = 'Hide Details';

            const priceEl = document.createElement('p');
            priceEl.className = 'price fadeIn';
            priceEl.textContent = `Price: $${Math.floor(Math.random() * 200) + 50}`;
            productCard.insertBefore(priceEl, this);

            const stockEl = document.createElement('p');
            stockEl.className = 'stock fadeIn';
            stockEl.textContent = `Available: ${Math.random() > 0.3 ? 'Yes' : 'No'}`;
            productCard.insertBefore(stockEl, this);

            productCard.style.backgroundColor = 'var(--primary-color)';
            productCard.style.color = 'white';
        } else {
            this.textContent = 'Learn More';
            productCard.querySelector('.price').remove();
            productCard.querySelector('.stock').remove();
            productCard.style.backgroundColor = '';
            productCard.style.color = '';
        }
    }

    detailButtons.forEach(button => {
        button.addEventListener('click', showProductDetails);
    });

    // Logo Easter egg
    document.querySelector('.logo').addEventListener('dblclick', function () {
        this.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    });
});
