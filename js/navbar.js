document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.word-text').forEach(word => {
        const chars = word.textContent.split('');
        word.innerHTML = chars.map(char => `
            <span class="char-wrap">
                <span class="char">${char}</span>
                <span class="char char-clone">${char}</span>
            </span>
        `).join('');
        const charElements = word.querySelectorAll('.char');
        const cloneElements = word.querySelectorAll('.char-clone');
        word.parentElement.parentElement.addEventListener('mouseenter', () => {
            gsap.to(charElements, {
                yPercent: -100,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: {
                    amount: 0.3,
                    from: "start"
                }
            });
            gsap.to(cloneElements, {
                yPercent: -100,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: {
                    amount: 0.3,
                    from: "start"
                }
            });
        });
        word.parentElement.parentElement.addEventListener('mouseleave', () => {
            gsap.to(charElements, {
                yPercent: 0,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: {
                    amount: 0.3,
                    from: "end"
                }
            });
            gsap.to(cloneElements, {
                yPercent: 0,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: {
                    amount: 0.3,
                    from: "end"
                }
            });
        });
    });
});