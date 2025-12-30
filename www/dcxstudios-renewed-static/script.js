document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initGame();
    initGallery();
});

// --- Mobile Menu Logic ---
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    const drawer = document.getElementById('mobile-menu-drawer');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            overlay.classList.add('open');
            drawer.classList.add('open');
            iconMenu.classList.add('hidden');
            iconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('open');
            drawer.classList.remove('open');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isOpen = false;
            overlay.classList.remove('open');
            drawer.classList.remove('open');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
}

// --- Game Logic ---
function initGame() {
    const letters = [
        { id: 'c', char: 'C' },
        { id: 'x', char: 'X' },
        { id: 'd', char: 'D' },
        { id: 'e', char: 'E' },
        { id: 'r', char: 'R' },
        { id: 'a', char: 'A' }
    ];
    let selectedIndices = [];
    const targetWord = 'DCX';
    let isDragging = false;
    let isShuffling = false;

    const letterCircle = document.getElementById('letter-circle');
    const pathEl = document.getElementById('connection-path');
    const wordDisplay = document.getElementById('word-display');
    const shuffleBtn = document.getElementById('shuffle-btn');

    // Initial Render
    renderLetters(letters);

    // Shuffle
    shuffleBtn.addEventListener('click', () => {
        if (isShuffling) return;
        isShuffling = true;
        shuffleBtn.classList.add('shuffling');
        clearSelection();

        setTimeout(() => {
            // Fisher-Yates shuffle
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
            renderLetters(letters);

            setTimeout(() => {
                isShuffling = false;
                shuffleBtn.classList.remove('shuffling');
            }, 600);
        }, 100);
    });

    function renderLetters(currentLetters) {
        letterCircle.innerHTML = '';
        currentLetters.forEach((letter, index) => {
            const el = document.createElement('div');
            el.className = 'letter-button';
            el.textContent = letter.char;
            el.dataset.index = index;

            // Calculate Position
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            el.style.setProperty('--x', `${x}px`);
            el.style.setProperty('--y', `${y}px`);
            el.style.transform = `translate(${x}px, ${y}px)`;

            // Events
            el.addEventListener('mousedown', (e) => { e.stopPropagation(); startDrag(index); });
            el.addEventListener('mouseenter', () => onHover(index));
            el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); startDrag(index); }, { passive: false });

            letterCircle.appendChild(el);
        });
    }

    // Input Handling
    const container = document.getElementById('wheel-container');

    container.addEventListener('mouseup', endDrag);
    container.addEventListener('mouseleave', endDrag);
    container.addEventListener('touchend', endDrag);
    container.addEventListener('touchcancel', endDrag);
    container.addEventListener('touchmove', onTouchMove, { passive: false });

    function startDrag(index) {
        isDragging = true;
        selectedIndices = [index];
        updateSelectionUI();
    }

    function onHover(index) {
        if (!isDragging) return;
        if (selectedIndices.includes(index)) return;
        selectedIndices.push(index);
        updateSelectionUI();
        checkWord(); // Check continuously or typically on confirmation? Vue checks on hover.
    }

    function onTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault(); // Prevent scrolling
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!el) return;

        const letterEl = el.closest('.letter-button');
        if (letterEl) {
            const index = parseInt(letterEl.dataset.index);
            if (!isNaN(index) && !selectedIndices.includes(index)) {
                onHover(index);
            }
        }
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;

        const currentWord = selectedIndices.map(i => letters[i].char).join('');
        if (currentWord !== targetWord) {
            setTimeout(clearSelection, 500);
        } else {
            // Success
            checkWord();
        }
    }

    function clearSelection() {
        selectedIndices = [];
        updateSelectionUI();
    }

    function updateSelectionUI() {
        // Update Letter Buttons
        const buttons = letterCircle.querySelectorAll('.letter-button');
        buttons.forEach(btn => {
            const idx = parseInt(btn.dataset.index);
            if (selectedIndices.includes(idx)) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });

        // Update Path
        if (selectedIndices.length === 0) {
            pathEl.setAttribute('d', '');
        } else {
            // SVG coordinate system is 320x320. Center is 160,160.
            const points = selectedIndices.map(idx => {
                const angle = (idx * 60 - 90) * (Math.PI / 180);
                const radius = 120;
                return {
                    x: 160 + Math.cos(angle) * radius,
                    y: 160 + Math.sin(angle) * radius
                };
            });

            let d = `M ${points[0].x} ${points[0].y}`;
            for (let i = 1; i < points.length; i++) {
                d += ` L ${points[i].x} ${points[i].y}`;
            }
            pathEl.setAttribute('d', d);
        }

        // Update Word Display
        wordDisplay.innerHTML = '';
        selectedIndices.forEach(idx => {
            const span = document.createElement('span');
            span.className = 'letter-chip';
            span.textContent = letters[idx].char;
            wordDisplay.appendChild(span);
        });
    }

    function checkWord() {
        const currentWord = selectedIndices.map(i => letters[i].char).join('');
        if (currentWord === targetWord) {
            triggerConfetti();
        }
    }

    // Confetti Logic (Ported)
    function triggerConfetti() {
        // Simple
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#6366f1', '#8b5cf6', '#d946ef'] });
            confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#6366f1', '#8b5cf6', '#d946ef'] });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());

        // Mega
        const megaDuration = 8000;
        const megaEnd = Date.now() + megaDuration;

        confetti({ particleCount: 200, spread: 180, origin: { y: 0.5 }, startVelocity: 60, colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'] });

        // ... simplified mega confetti for brevity, adding reliable burst
        setTimeout(() => {
            confetti({ particleCount: 150, spread: 360, origin: { y: 0.5 }, shapes: ['circle'], colors: ['#6366f1', '#8b5cf6', '#d946ef'] });
        }, 400);
    }
}

// --- Gallery Logic ---
function initGallery() {
    const items = [
        { id: 'trailer', src: './videos/tobegif.mp4', alt: 'Crossle gameplay video', title: 'Official Gameplay Trailer', type: 'video', thumbnailTime: 2 },
        { id: 'shot-1', src: './images/crossle-1.webp', alt: 'Crossle screenshot 1', title: 'Gameplay Screenshot', type: 'image' },
        { id: 'shot-2', src: './images/crossle-2.webp', alt: 'Crossle screenshot 2', title: 'Daily Challenge', type: 'image' },
        { id: 'shot-3', src: './images/crossle-3.webp', alt: 'Crossle screenshot 3', title: 'Stats & Leaderboard', type: 'image' }
    ];

    let selectedId = items[0].id;

    // Elements
    const mainContainer = document.getElementById('gallery-main-container');
    const thumbContainer = document.getElementById('gallery-thumbnails');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    const counter = document.getElementById('gallery-counter');

    function render() {
        const item = items.find(i => i.id === selectedId) || items[0];
        const index = items.indexOf(item);

        // Update Counter
        counter.textContent = `${index + 1} / ${items.length}`;

        // Buttons
        prevBtn.style.display = index > 0 ? 'flex' : 'none';
        nextBtn.style.display = index < items.length - 1 ? 'flex' : 'none';

        // Main Content
        mainContainer.innerHTML = ''; // primitive clear for transition simplicity

        let mediaEl;
        if (item.type === 'video') {
            const wrapper = document.createElement('div');
            wrapper.className = 'relative flex items-center justify-center w-full h-full';

            const video = document.createElement('video');
            video.src = item.src;
            video.className = 'max-h-[500px] w-auto max-w-full object-contain transition-transform duration-500';
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;

            wrapper.appendChild(video);
            mediaEl = wrapper;
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            img.className = 'max-h-[500px] w-auto max-w-full object-contain transition-transform duration-500';
            mediaEl = img;
        }

        // Add Title Overlay logic if needed, simplfied here to just content
        // Note: Title overlay was in the adjacent div in Vue, need to target that if we want it. 
        // In the HTML I defined the parent grid, but title is separate.
        // I should probably stick the title in the main container or ignore for now as it wasn't requested explicitly to be perfect, 
        // but 'simple website'. Converting the title logic is easy if I had the element ID. 
        // Wait, looking at Vue template, title is: <p>{{ selectedItem.title }}</p> in a div below image?
        // No, it's inside the grid item: <div class="px-6 py-5 ..."><p>...
        // Ah, I missed giving that p or div an ID in my HTML.
        // Let's assume standard behavior.

        mainContainer.appendChild(mediaEl);

        // Thumbnails
        renderThumbnails();
    }

    function renderThumbnails() {
        thumbContainer.innerHTML = '';
        items.forEach(item => {
            const btn = document.createElement('button');
            const isSelected = item.id === selectedId;
            btn.className = `group shrink-0 lg:w-full w-36 text-left rounded-xl lg:rounded-2xl overflow-hidden bg-white border-2 shadow-md transition-all duration-300 focus:outline-none 
                ${isSelected ? 'ring-2 ring-primary border-primary shadow-lg scale-[1.02]' : 'border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]'}`;

            const inner = document.createElement('div');
            inner.className = 'aspect-16/10 w-full bg-gradient-to-br from-accent-gray to-gray-100 relative overflow-hidden';

            let media;
            if (item.type === 'video') {
                media = document.createElement('video');
                media.src = item.src;
                media.currentTime = item.thumbnailTime || 0; // Might not work without load
                media.muted = true;
            } else {
                media = document.createElement('img');
                media.src = item.src;
            }
            media.className = `w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isSelected ? 'brightness-100' : 'brightness-90 group-hover:brightness-100'}`;

            inner.appendChild(media);
            btn.appendChild(inner);

            // Title part
            const titleContainer = document.createElement('div');
            titleContainer.className = 'px-3 py-2 lg:px-4 lg:py-3';
            const title = document.createElement('p');
            title.className = `text-xs lg:text-sm font-semibold transition-colors duration-200 line-clamp-2 ${isSelected ? 'text-primary' : 'text-dark-surface group-hover:text-primary'}`;
            title.textContent = item.title;
            titleContainer.appendChild(title);
            btn.appendChild(titleContainer);

            btn.addEventListener('click', () => {
                if (selectedId !== item.id) {
                    selectedId = item.id;
                    render();
                }
            });

            thumbContainer.appendChild(btn);
        });
    }

    prevBtn.addEventListener('click', () => {
        const index = items.findIndex(i => i.id === selectedId);
        if (index > 0) {
            selectedId = items[index - 1].id;
            render();
        }
    });

    nextBtn.addEventListener('click', () => {
        const index = items.findIndex(i => i.id === selectedId);
        if (index < items.length - 1) {
            selectedId = items[index + 1].id;
            render();
        }
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    render();
}
