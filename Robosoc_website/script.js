document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-home-3-line');
    const animatedBox = document.querySelector('.Home');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x: 0,
            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-trophy-line');
    const animatedBox = document.querySelector('.Achievment');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x:0,
            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-robot-2-line');
    const animatedBox = document.querySelector('.Projects');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x:0,

            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-user-3-fill');
    const animatedBox = document.querySelector('.Members');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x:0,

            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-git-repository-fill');
    const animatedBox = document.querySelector('.About-us');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x:0,

            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.querySelector('.ri-mail-line');
    const animatedBox = document.querySelector('.Contact');

    hoverBox.addEventListener('mouseenter', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 1,
            display: 'block',
            x:0,

            ease: 'power1.out'
        });
    });

    hoverBox.addEventListener('mouseleave', () => {
        gsap.to(animatedBox, {
            duration: 0.5,
            opacity: 0,
            display: 'none',
            x: 20,
            ease: 'power1.out'
        });
    });
});



