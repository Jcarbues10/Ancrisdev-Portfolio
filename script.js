// ========================================
// MOBILE E-COMMERCE APP - JAVASCRIPT
// ========================================

// ===== GLOBAL STATE =====
const state = {
    cart: [],
    wishlist: [],
    products: [],
    filteredProducts: [],
    currentCategory: 'all',
    currentSort: 'relevance',
    searchQuery: '',
    currentProduct: null,
    filters: {
        minPrice: 0,
        maxPrice: 1000,
        ratings: [],
        brands: []
    }
};

// ===== SAMPLE PRODUCT DATA =====
const sampleProducts = [
    {
        id: 1,
        name: 'Wireless Headphones',
        category: 'electronics',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 128,
        image: '',
        brand: 'apple',
        description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
        sizes: [],
        colors: ['#000000', '#ffffff', '#0066cc'],
        discount: 20,
        stock: 50
    },
    {
        id: 2,
        name: 'Smart Watch Pro',
        category: 'electronics',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.8,
        reviews: 256,
        image: '',
        brand: 'samsung',
        description: 'Advanced smartwatch with health tracking, GPS, and long battery life.',
        sizes: [],
        colors: ['#000000', '#silver', '#rose-gold'],
        discount: 25,
        stock: 30
    },
    {
        id: 3,
        name: 'Running Shoes',
        category: 'sports',
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.6,
        reviews: 89,
        image: '',
        brand: 'nike',
        description: 'Lightweight running shoes with cushioned soles for maximum comfort.',
        sizes: ['7', '8', '9', '10', '11'],
        colors: ['#ff0000', '#000000', '#0066cc'],
        discount: 31,
        stock: 75
    },
    {
        id: 4,
        name: 'Yoga Mat Premium',
        category: 'sports',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.7,
        reviews: 145,
        image: '',
        brand: 'adidas',
        description: 'Non-slip yoga mat with extra cushioning for comfort during workouts.',
        sizes: [],
        colors: ['#purple', '#pink', '#blue'],
        discount: 33,
        stock: 100
    },
    {
        id: 5,
        name: 'Designer Sunglasses',
        category: 'fashion',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.4,
        reviews: 67,
        image: '',
        brand: 'nike',
        description: 'Stylish sunglasses with UV protection and premium frames.',
        sizes: [],
        colors: ['#000000', '#brown', '#gold'],
        discount: 25,
        stock: 40
    },
    {
        id: 6,
        name: 'Leather Wallet',
        category: 'fashion',
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.3,
        reviews: 92,
        image: '',
        brand: 'samsung',
        description: 'Genuine leather wallet with RFID protection and multiple card slots.',
        sizes: [],
        colors: ['#brown', '#black', '#tan'],
        discount: 38,
        stock: 60
    },
    {
        id: 7,
        name: 'Smart LED Bulb',
        category: 'home',
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.5,
        reviews: 234,
        image: '',
        brand: 'apple',
        description: 'WiFi-enabled smart bulb with color changing capabilities and voice control.',
        sizes: [],
        colors: [],
        discount: 29,
        stock: 150
    },
    {
        id: 8,
        name: 'Coffee Maker',
        category: 'home',
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.6,
        reviews: 178,
        image: '',
        brand: 'samsung',
        description: 'Programmable coffee maker with thermal carafe and auto-shutoff.',
        sizes: [],
        colors: ['#silver', '#black'],
        discount: 28,
        stock: 35
    },
    {
        id: 9,
        name: 'Face Serum',
        category: 'beauty',
        price: 59.99,
        originalPrice: 89.99,
        rating: 4.8,
        reviews: 456,
        image: '',
        brand: 'apple',
        description: 'Anti-aging face serum with vitamin C and hyaluronic acid.',
        sizes: [],
        colors: [],
        discount: 33,
        stock: 80
    },
    {
        id: 10,
        name: 'Hair Dryer Pro',
        category: 'beauty',
        price: 119.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 289,
        image: '',
        brand: 'nike',
        description: 'Professional hair dryer with ionic technology and multiple heat settings.',
        sizes: [],
        colors: ['#black', '#pink', '#white'],
        discount: 25,
        stock: 45
    },
    {
        id: 11,
        name: 'Laptop Sleeve',
        category: 'electronics',
        price: 29.99,
        originalPrice: 44.99,
        rating: 4.4,
        reviews: 167,
        image: '',
        brand: 'adidas',
        description: 'Protective laptop sleeve with water-resistant material and extra pockets.',
        sizes: ['13"', '15"', '17"'],
        colors: ['#gray', '#black', '#navy'],
        discount: 33,
        stock: 90
    },
    {
        id: 12,
        name: 'Denim Jacket',
        category: 'fashion',
        price: 79.99,
        originalPrice: 119.99,
        rating: 4.6,
        reviews: 134,
        image: '',
        brand: 'nike',
        description: 'Classic denim jacket with modern fit and premium quality denim.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#blue', '#black', '#lightblue'],
        discount: 33,
        stock: 55
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);

    state.products = sampleProducts;
    state.filteredProducts = sampleProducts;

    renderProducts();
    initCarousel();
    setupEventListeners();
    loadCart();
    updateCartBadge();
    renderRecommendedProducts();
}

// ===== CAROUSEL =====
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carouselDots');
    let currentSlide = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = n;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    setInterval(nextSlide, 5000);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    document.getElementById('menuBtn').addEventListener('click', toggleMenu);
    document.getElementById('menuCloseBtn').addEventListener('click', toggleMenu);
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('cartDrawerClose').addEventListener('click', toggleCart);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('voiceSearchBtn').addEventListener('click', handleVoiceSearch);

    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', handleCategoryFilter);
    });

    document.getElementById('sortSelect').addEventListener('change', handleSort);
    document.getElementById('filterBtn').addEventListener('click', openFilterModal);
    document.getElementById('filterModalClose').addEventListener('click', closeFilterModal);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('productModalClose').addEventListener('click', closeProductModal);
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
    document.getElementById('checkoutModalClose').addEventListener('click', closeCheckoutModal);
    document.getElementById('nextStepBtn').addEventListener('click', nextCheckoutStep);
    document.getElementById('prevStepBtn').addEventListener('click', prevCheckoutStep);
    document.getElementById('trackingModalClose').addEventListener('click', closeTrackingModal);
    document.getElementById('toastClose').addEventListener('click', hideToast);
    document.getElementById('notificationPanelClose').addEventListener('click', hideNotificationPanel);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', handleMenuClick);
    });

    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.addEventListener('click', handleBottomNavClick);
    });

    document.getElementById('minPrice').addEventListener('input', updatePriceValues);
    document.getElementById('maxPrice').addEventListener('input', updatePriceValues);

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', closeAllModals);
    });
}

// ===== MENU & NAVIGATION =====
function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function handleMenuClick(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    e.currentTarget.classList.add('active');

    if (href === '#orders') {
        toggleMenu();
        setTimeout(() => openTrackingModal(), 300);
    } else if (href === '#notifications') {
        toggleMenu();
        setTimeout(() => showNotificationPanel(), 300);
    } else {
        toggleMenu();
        const text = e.currentTarget.textContent.replace(/\s+/g, ' ').trim();
        showToast('Feature Coming Soon!', text + ' will be available soon.', 'info');
    }
}

function handleBottomNavClick(e) {
    e.preventDefault();

    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });

    e.currentTarget.classList.add('active');

    const href = e.currentTarget.getAttribute('href');

    if (href === '#orders') {
        openTrackingModal();
    } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===== CART =====
function toggleCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    cartDrawer.classList.toggle('active');
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');

    if (state.cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 40px 20px; color: var(--text-muted);"><i class="fas fa-shopping-cart" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.5;"></i><p>Your cart is empty</p><button class="btn-primary mt-20" onclick="document.getElementById(\'cartDrawer\').classList.remove(\'active\')">Continue Shopping</button></div>';
        updateCartSummary();
        return;
    }

    cartItems.innerHTML = state.cart.map(item => '<div class="cart-item"><div class="cart-item-image"><i class="fas fa-box" style="font-size: 2rem; color: var(--text-muted);"></i></div><div class="cart-item-details"><div class="cart-item-name">' + item.name + '</div><div class="cart-item-price">$' + item.price.toFixed(2) + '</div><div class="cart-item-actions"><div class="cart-item-qty"><button onclick="updateCartQuantity(' + item.id + ', -1)"><i class="fas fa-minus"></i></button><span>' + item.quantity + '</span><button onclick="updateCartQuantity(' + item.id + ', 1)"><i class="fas fa-plus"></i></button></div><button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')"><i class="fas fa-trash"></i></button></div></div></div>').join('');

    updateCartSummary();
}

function addToCart(product, quantity = 1) {
    const existingItem = state.cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    showToast('Added to Cart!', product.name + ' has been added to your cart.', 'success');
}

function updateCartQuantity(productId, change) {
    const item = state.cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        saveCart();
        updateCartBadge();
        renderCart();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCart();
    showToast('Removed from Cart', 'Item has been removed from your cart.', 'info');
}

function updateCartBadge() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

function updateCartSummary() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('cartSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        state.cart = JSON.parse(saved);
    }
}

// ===== SEARCH & FILTER =====
function handleSearch(e) {
    state.searchQuery = e.target.value.toLowerCase();
    filterProducts();
}

function handleVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('searchInput').value = transcript;
            state.searchQuery = transcript.toLowerCase();
            filterProducts();
        };

        recognition.start();
        showToast('Listening...', 'Speak now to search for products', 'info');
    } else {
        showToast('Not Supported', 'Voice search is not supported in your browser', 'error');
    }
}

function handleCategoryFilter(e) {
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
    });

    e.currentTarget.classList.add('active');

    state.currentCategory = e.currentTarget.dataset.category;
    filterProducts();
}

function handleSort(e) {
    state.currentSort = e.target.value;
    sortProducts();
}

function sortProducts() {
    let sorted = [...state.filteredProducts];

    switch (state.currentSort) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
    }

    state.filteredProducts = sorted;
    renderProducts();
}

function filterProducts() {
    let filtered = state.products;

    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === state.currentCategory);
    }

    if (state.searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(state.searchQuery) ||
            p.category.toLowerCase().includes(state.searchQuery) ||
            p.description.toLowerCase().includes(state.searchQuery)
        );
    }

    filtered = filtered.filter(p =>
        p.price >= state.filters.minPrice &&
        p.price <= state.filters.maxPrice
    );

    if (state.filters.ratings.length > 0) {
        const minRating = Math.min(...state.filters.ratings);
        filtered = filtered.filter(p => p.rating >= minRating);
    }

    if (state.filters.brands.length > 0) {
        filtered = filtered.filter(p => state.filters.brands.includes(p.brand));
    }

    state.filteredProducts = filtered;
    sortProducts();
}

function openFilterModal() {
    document.getElementById('filterModal').classList.add('active');
}

function closeFilterModal() {
    document.getElementById('filterModal').classList.remove('active');
}

function clearFilters() {
    state.filters = {
        minPrice: 0,
        maxPrice: 1000,
        ratings: [],
        brands: []
    };

    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 1000;
    document.getElementById('minPriceValue').textContent = 0;
    document.getElementById('maxPriceValue').textContent = 1000;

    document.querySelectorAll('.rating-filter input, .brand-filter input').forEach(input => {
        input.checked = false;
    });

    filterProducts();
}

function applyFilters() {
    state.filters.minPrice = parseInt(document.getElementById('minPrice').value);
    state.filters.maxPrice = parseInt(document.getElementById('maxPrice').value);

    state.filters.ratings = Array.from(document.querySelectorAll('.rating-filter input:checked'))
        .map(input => parseInt(input.value));

    state.filters.brands = Array.from(document.querySelectorAll('.brand-filter input:checked'))
        .map(input => input.value);

    filterProducts();
    closeFilterModal();
    showToast('Filters Applied', 'Your filters have been applied successfully', 'success');
}

function updatePriceValues() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    document.getElementById('minPriceValue').textContent = minPrice;
    document.getElementById('maxPriceValue').textContent = maxPrice;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const count = document.getElementById('productCount');

    count.textContent = state.filteredProducts.length + ' items';

    if (state.filteredProducts.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);"><i class="fas fa-search" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.5;"></i><h3>No Products Found</h3><p>Try adjusting your filters or search query</p></div>';
        return;
    }

    grid.innerHTML = state.filteredProducts.map(product => '<div class="product-card" onclick="openProductModal(' + product.id + ')"><div class="product-image"><i class="fas fa-box"></i>' + (product.discount ? '<div class="product-badge">-' + product.discount + '%</div>' : '') + '<button class="product-wishlist" onclick="event.stopPropagation(); toggleWishlist(' + product.id + ')"><i class="far fa-heart"></i></button></div><div class="product-details"><div class="product-category">' + product.category + '</div><div class="product-name">' + product.name + '</div><div class="product-rating"><div class="stars">' + renderStars(product.rating) + '</div><span class="rating-text">(' + product.reviews + ')</span></div><div class="product-price-row"><span class="product-price">$' + product.price.toFixed(2) + '</span>' + (product.originalPrice ? '<span class="product-original-price">$' + product.originalPrice.toFixed(2) + '</span>' : '') + '</div></div></div>').join('');
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return '<i class="fas fa-star"></i>'.repeat(fullStars) + (halfStar ? '<i class="fas fa-star-half-alt"></i>' : '') + '<i class="far fa-star"></i>'.repeat(emptyStars);
}

// Continue in next part due to length...
console.log('E-Commerce App Initialized Successfully!');

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.currentProduct = product;

    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productRating').innerHTML = renderStars(product.rating);
    document.getElementById('ratingCount').textContent = '(' + product.reviews + ' reviews)';
    document.getElementById('currentPrice').textContent = '$' + product.price.toFixed(2);
    document.getElementById('originalPrice').textContent = product.originalPrice ? '$' + product.originalPrice.toFixed(2) : '';
    document.getElementById('discountBadge').textContent = product.discount ? '-' + product.discount + '%' : '';
    document.getElementById('productDescription').textContent = product.description;

    const sizeOptions = document.getElementById('sizeOptions');
    if (product.sizes.length > 0) {
        sizeOptions.innerHTML = product.sizes.map(size => '<button class="size-option" onclick="selectSize(this)">' + size + '</button>').join('');
        sizeOptions.parentElement.style.display = 'block';
    } else {
        sizeOptions.parentElement.style.display = 'none';
    }

    const colorOptions = document.getElementById('colorOptions');
    if (product.colors.length > 0) {
        colorOptions.innerHTML = product.colors.map(color => '<button class="color-option" style="background: ' + color + '" onclick="selectColor(this)"></button>').join('');
        colorOptions.parentElement.style.display = 'block';
    } else {
        colorOptions.parentElement.style.display = 'none';
    }

    document.getElementById('quantity').value = 1;

    document.getElementById('addToCartBtn').onclick = () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(product, quantity);
        closeProductModal();
    };

    document.getElementById('buyNowBtn').onclick = () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(product, quantity);
        closeProductModal();
        setTimeout(() => {
            toggleCart();
            setTimeout(openCheckoutModal, 500);
        }, 300);
    };

    document.getElementById('qtyMinus').onclick = () => {
        const input = document.getElementById('quantity');
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    };

    document.getElementById('qtyPlus').onclick = () => {
        const input = document.getElementById('quantity');
        input.value = parseInt(input.value) + 1;
    };

    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function selectSize(button) {
    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    button.classList.add('selected');
}

function selectColor(button) {
    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
    button.classList.add('selected');
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);

    if (index === -1) {
        state.wishlist.push(productId);
        showToast('Added to Wishlist', 'Item has been added to your wishlist', 'success');
    } else {
        state.wishlist.splice(index, 1);
        showToast('Removed from Wishlist', 'Item has been removed from your wishlist', 'info');
    }

    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
}

// ===== CHECKOUT =====
let currentCheckoutStep = 1;

function openCheckoutModal() {
    if (state.cart.length === 0) {
        showToast('Cart is Empty', 'Add items to your cart before checking out', 'error');
        return;
    }

    currentCheckoutStep = 1;
    updateCheckoutStep();
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function nextCheckoutStep() {
    if (currentCheckoutStep < 3) {
        currentCheckoutStep++;
        updateCheckoutStep();
    } else {
        completeOrder();
    }
}

function prevCheckoutStep() {
    if (currentCheckoutStep > 1) {
        currentCheckoutStep--;
        updateCheckoutStep();
    }
}

function updateCheckoutStep() {
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 < currentCheckoutStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index + 1 === currentCheckoutStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });

    document.querySelectorAll('.checkout-step-content').forEach((content, index) => {
        content.classList.toggle('active', index + 1 === currentCheckoutStep);
    });

    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    prevBtn.style.display = currentCheckoutStep === 1 ? 'none' : 'block';
    nextBtn.textContent = currentCheckoutStep === 3 ? 'Place Order' : 'Continue';

    if (currentCheckoutStep === 3) {
        renderOrderReview();
    }
}

function renderOrderReview() {
    const reviewContainer = document.getElementById('orderReview');
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    reviewContainer.innerHTML = '<div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin-bottom: 20px;">' + state.cart.map(item => '<div style="display: flex; justify-content: space-between; margin-bottom: 10px;"><span>' + item.name + ' x ' + item.quantity + '</span><span style="font-weight: 600;">$' + (item.price * item.quantity).toFixed(2) + '</span></div>').join('') + '<hr style="margin: 15px 0; border: none; border-top: 1px solid var(--border-color);"><div style="display: flex; justify-content: space-between; margin-bottom: 10px;"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div><div style="display: flex; justify-content: space-between; margin-bottom: 10px;"><span>Shipping</span><span>' + (shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)) + '</span></div><hr style="margin: 15px 0; border: none; border-top: 1px solid var(--border-color);"><div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; color: var(--primary-color);"><span>Total</span><span>$' + total.toFixed(2) + '</span></div></div>';
}

function completeOrder() {
    state.cart = [];
    saveCart();
    updateCartBadge();
    closeCheckoutModal();
    showToast('Order Placed Successfully!', 'Your order has been confirmed. Check your email for details.', 'success');

    setTimeout(() => {
        openTrackingModal();
    }, 2000);
}

// ===== ORDER TRACKING =====
function openTrackingModal() {
    document.getElementById('orderTrackingModal').classList.add('active');
}

function closeTrackingModal() {
    document.getElementById('orderTrackingModal').classList.remove('active');
}

// ===== NOTIFICATIONS =====
function showNotificationPanel() {
    document.getElementById('notificationPanel').classList.add('show');
}

function hideNotificationPanel() {
    document.getElementById('notificationPanel').classList.remove('show');
}

// ===== TOAST =====
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon i');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    const iconClass = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    }[type] || 'fa-check-circle';

    const iconColor = {
        success: 'var(--success-color)',
        error: 'var(--danger-color)',
        info: 'var(--primary-color)',
        warning: 'var(--warning-color)'
    }[type] || 'var(--success-color)';

    toastIcon.className = 'fas ' + iconClass;
    toast.querySelector('.toast-icon').style.background = iconColor;

    toast.classList.add('show');

    setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    document.getElementById('toast').classList.remove('show');
}

// ===== RECOMMENDED PRODUCTS =====
function renderRecommendedProducts() {
    const grid = document.getElementById('recommendedGrid');

    const recommended = [...state.products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    grid.innerHTML = recommended.map(product => '<div class="recommended-card product-card" onclick="openProductModal(' + product.id + ')"><div class="product-image"><i class="fas fa-box"></i></div><div class="product-details"><div class="product-name">' + product.name + '</div><div class="product-rating"><div class="stars">' + renderStars(product.rating) + '</div></div><div class="product-price-row"><span class="product-price">$' + product.price.toFixed(2) + '</span></div></div></div>').join('');
}

// ===== UTILITY FUNCTIONS =====
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Simulate push notifications
function sendPushNotification(title, message) {
    showToast(title, message, 'info');
}

console.log('Mobile E-Commerce App Initialized Successfully!');
console.log('Features: Products, Cart, Checkout, Tracking, Notifications, Search, Filters');
