
// Countdown timer (24 hours)
function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Create falling coins
function createCoins() {
    const container = document.getElementById('coins-container');
    const coinCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < coinCount; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = `${Math.random() * 100}vw`;
        coin.style.top = `${-50 - (Math.random() * 50)}px`;
        coin.style.width = `${10 + Math.random() * 20}px`;
        coin.style.height = coin.style.width;
        coin.style.animationDuration = `${5 + Math.random() * 10}s`;
        coin.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(coin);
    }
}

// Redirect button
document.getElementById('playNow').addEventListener('click', function() {
    window.location.href = 'https://yourplinkogamewebsite.com';
});

// Initialize
window.addEventListener('load', function() {
    createCoins();
    
    // Add more balls periodically
    setInterval(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.animationDelay = `${Math.random() * 2}s`;
        document.querySelector('.plinko-container').appendChild(ball);
        
        // Remove balls after animation completes
        setTimeout(() => {
            ball.remove();
        }, 3000);
    }, 800);
});

// Handle window resize
window.addEventListener('resize', function() {
    const container = document.getElementById('coins-container');
    container.innerHTML = '';
    createCoins();
});
