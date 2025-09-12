function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 40 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.bottom = '-50px';
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 10000);
}

setInterval(createBubble, 500);
