document.addEventListener('DOMContentLoaded', () => {
    const ease = "power4.inOut";

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');

            if (href && !href.startsWith('#') && href !== window.location.pathname){
                animateTransition().then(() => {
                    window.location.href = href;
                });            
            }
        });
    });

    revealTransition().then(() => {
        gsap.set(".block", { visibility: "hidden" });
    });

    function revealTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { scaleY: 1 });
            gsap.to(".block", { 
                scaleY: 0, 
                duration: 1,
                stagger: {
                    each: 0.1,
                    from: "start",
                    grid: "auto",
                    axis: "x",
                },
                ease: ease,
                onComplete: resolve,
            }); 
        });
    }

    function animateTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { visibility: "visible", scaleY: 0 }); 
            gsap.to(".block", {
                scaleY: 1,
                duration: 1,
                stagger: {
                    each: 0.1,
                    from: "start",
                    grid: [2,5],
                    axis: "x",
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    }
});



function showBox(boxNumber) {
    
    const activeBox = document.querySelector(".activeBox");
    const activeBtn = document.querySelector(".activeBtn"); 

    console.log(boxNumber, parseInt(activeBtn.id[3]))

    if (boxNumber != activeBtn.id) {

        activeBtn.classList.remove("activeBtn");
        activeBox.style.transform = "translateX(200%)";
        activeBox.classList.remove("activeBox");

        setTimeout(() => {
            activeBox.classList.remove("visible");
            activeBox.classList.add("hidden");
        }, 800);
        

        switch (boxNumber) {
            case 1:
                console.log('1');

                targetBtn = document.getElementById("btn1");
                targetBtn.classList.add("activeBtn");
                
                targetBox = document.getElementById("kali-container");
                targetBox.classList.add("activeBox");
                targetBox.classList.remove("hidden");
                targetBox.classList.add("visible");
                targetBox.style.transform = "translateX(0%)";
                break;

            case 2:
                console.log('2');

                targetBtn = document.getElementById("btn2");
                targetBtn.classList.add("activeBtn");
                
                targetBox = document.getElementById("box2");
                targetBox.classList.add("visible");
                targetBox.classList.remove("hidden");
                targetBox.classList.add("activeBox");
                targetBox.style.transform = "translateX(0%)";
                break;

            case 3:
                console.log('3');

                targetBtn = document.getElementById("btn3")
                targetBtn.classList.add("activeBtn");
                

                targetBox = document.getElementById("box3");
                targetBox.classList.add("visible");
                targetBox.classList.remove("hidden");
                targetBox.classList.add("activeBox");
                targetBox.style.transform = "translateX(0%)";
                break;

            case 4:
                console.log('4');

                targetBtn = document.getElementById("btn4")
                targetBtn.classList.add("activeBtn");
                
                targetBox = document.getElementById("box4");
                targetBox.classList.add("visible");
                targetBox.classList.remove("hidden");
                targetBox.classList.add("activeBox");
                targetBox.style.transform = "translateX(0%)";
                break;

        }

    }
}

