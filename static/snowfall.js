document.addEventListener('DOMContentLoaded', function () {
    const snowfallContainer = document.querySelector('.snowfall');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.innerHTML = '❄';
        snowflake.style.color = 'white';
        snowfallContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake();
        });
    }
    
    // Create more initial snowflakes
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
});
