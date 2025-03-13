import anime from '../node_modules/animejs/lib/anime.es.js';

document.addEventListener("DOMContentLoaded", () => {
    
    // BUTTONS —————————————————————————————————————————————————————————
    const btnStart = document.querySelector(".btn-start");
    const btnCustomise = document.querySelector(".btn-customise");
    const btnInstall = document.querySelector(".btn-install");
    const btnTest = document.querySelector(".btn-test");
    const btnContinue = document.querySelector(".btn-continue");
    const btnFinish = document.querySelector(".btn-finish");
    const btnArrowLeft = document.querySelector(".btn-arrow-left");
    const btnArrowRight = document.querySelector(".btn-arrow-right");
    const btnCloseAlert = document.querySelector(".alert__btn-close");

    // SECTIONS —————————————————————————————————————————————————————————
    const secStart = document.querySelector(".start");
    const secMain = document.querySelector(".main");

    const secMenu = document.querySelector(".menu");
    const secCustomise = document.querySelector(".customise");
    const secInstall = document.querySelector(".install");
    const secTest = document.querySelector(".test");

    const secInfoText = document.querySelector(".info");

    // ALERT ————————————————————————————————————————————————————————
    const alert = document.querySelector(".alert");
    const alertMessage = document.querySelector(".alert__message");

    // CURSOR ——————————————————————————————————————————————————
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e)=> {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }   

    window.addEventListener('mousemove', moveCursor);

    // CHARTS ——————————————————————————————————————————————————
    const chart1 = document.querySelector(".chart-1");
    const chart2 = document.querySelector(".chart-2");
    const chart3 = document.querySelector(".chart-3");
    const chart4 = document.querySelector(".chart-4");
    const chart5 = document.querySelector(".chart-5");

    // const animateChart1 = anime({
    //     targets: '.chart1',
    //     points: [
    //         { value: [
    //             '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
    //             '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
    //         ]},
    //         { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    //         { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    //         { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    //     ],
    //     easing: 'easeOutQuad',
    //     duration: 2000,
    //     loop: true
    // });
    // animateChart1.play();

    
    for (let i = 0; i < 4; i++) {
        let el = document.createElement("div");
        el.classList.add("chart-2__el");
        let line = document.createElement("div")
        line.classList.add("chart-2__el-line");
        el.appendChild(line);
        chart2.appendChild(el);
    }
    function animateChart2() {
        anime({
            targets: '.chart-2__el-line',
            width: () => {return anime.random(10, 100) + '%'},
            // translateY: () => { return anime.random(-500, 500) + '%'},
            // duration: () => { return anime.random(300, 800)},
            duration: 500,
            easing: 'easeInOutQuad',
            // delay: anime.stagger(50),
            complete: animateChart2,
        });
    }
    animateChart2();





    for (let i = 0; i < 14; i++) {
        let el = document.createElement("div");
        el.classList.add("chart-3__el");
        chart3.appendChild(el);
    }
    function animateChart3() {
        anime({
            targets: '.chart-3__el',
            translateY: () => { return anime.random(-500, 500) + '%'},
            duration: () => { return anime.random(300, 800)},
            // duration: anime.stagger(100),
            easing: 'easeInOutQuad',
            // delay: anime.stagger(15),
            complete: animateChart3,
        });
    }
    animateChart3();



    for (let i = 0; i < 24; i++) {
        let el = document.createElement("div");
        el.classList.add("chart-5__el");
        chart5.appendChild(el);
    }
    function animateChart5() {
        anime({
            targets: '.chart-5__el',
            height: () => {return anime.random(10, 180)},
            // height: [
            //     {value: () => {return anime.random(10, 90)}}
            //     ,
            //     {value: () => {return anime.random(100, 180)}},
            // ],
            // height: 180,
            // duration: 500,
            duration: () => {return anime.random(200, 500)},
            easing: 'easeInOutQuad',
            // direction: "alternate",
            // delay: anime.stagger(15),
            complete: animateChart5,
        });
    }
    animateChart5();


    // ANIMATIONS —————————————————————————————————————————————————————
    const animateBgLines = anime({
        targets: '.bg-lines',
        loop: false,
        autoplay: false,
        duration: 4000,
        easing: "easeInOutQuad",
        scale: 3,
        translateX: -1500,
        translateY: -200,
        rotate: -45,
    });
    const animateBtnStart = anime({
        targets: '.btn-start',
        loop: false,
        autoplay: false,
        duration: 3000,
        scale: 10,
        opacity: 0,
        easing: 'easeInOutQuad',
    });
    const animateAlert = anime({
        targets: '.alert',
        // loop: false,
        autoplay: false,
        duration: 2000,
        opacity: 1,
        translateY: 600,
        scale: 2,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        endDelay: 1500,
    });

    // FUNCTIONS —————————————————————————————————————————————————————————
    const playReversed = (animationName) => {
        animationName.reverse();
        animationName.play();

        setTimeout(() => {
            animationName.reverse();
        }, 5000);
    } 
    
    const resetSite = () => {
        secInfoText.textContent = "menu";
        secStart.classList.remove("hidden");
        secMain.classList.add("hidden");
        secTest.classList.add("hidden");
        btnFinish.classList.add("hidden");

        playReversed(animateBgLines);
        playReversed(animateBtnStart);


        document.getElementsByClassName("step-3")[0].classList.remove("active");
        document.getElementsByClassName("step-1")[0].classList.add("active");
    }

    const checkStep = (step) => {
        if (step.classList.contains("step-1")) {
            btnCustomise.classList.remove("hidden");
            btnInstall.classList.add("hidden");
            btnTest.classList.add("hidden");
        } else if (step.classList.contains("step-2")) {
            btnCustomise.classList.add("hidden");
            btnInstall.classList.remove("hidden");
            btnTest.classList.add("hidden");
        } else if (step.classList.contains("step-3")) {
            btnCustomise.classList.add("hidden");
            btnInstall.classList.add("hidden");
            btnTest.classList.remove("hidden");
        }
    };
    const showAlert = (message) => {
        animateAlert.play();
        alertMessage.textContent = message;
    };

    // EVENTS —————————————————————————————————————————————————————————
    btnStart.addEventListener("click", () => {
        animateBgLines.play();
        animateBtnStart.play();

        setTimeout(() => {
            secStart.classList.add("hidden");
            secMain.classList.remove("hidden");
            secMenu.classList.remove("hidden");
            checkStep(document.getElementsByClassName("step-1")[0]);
            showAlert("Login successful!");
        }, 3000);

    });



    btnCustomise.addEventListener("click", () => {
        secMenu.classList.add("hidden");
        secCustomise.classList.remove("hidden");
        secInfoText.textContent = "customise|01";

        btnContinue.classList.remove("hidden");
        showAlert("Customise form, color and processor!")
    });
    btnInstall.addEventListener("click", () => {
        secMenu.classList.add("hidden");
        secInstall.classList.remove("hidden");
        secInfoText.textContent = "install|02";

        btnContinue.classList.remove("hidden");
        showAlert("Install all parts of the processor!");
    });
    btnTest.addEventListener("click", () => {
        secMenu.classList.add("hidden");
        secTest.classList.remove("hidden");
        secInfoText.textContent = "test|03";

        btnFinish.classList.remove("hidden");
        showAlert("Test if the device responds to noise!");
    });



    btnContinue.addEventListener("click", () => {
        secMenu.classList.remove("hidden");
        secCustomise.classList.add("hidden");
        secInstall.classList.add("hidden");
        secInfoText.textContent = "menu";

        btnContinue.classList.add("hidden");
    });
    btnFinish.addEventListener("click", () => {
        resetSite();

        showAlert("Congratulations! Your Device is ready! Press start to create another one!");
    });



    btnArrowLeft.addEventListener("click", () => {
        const currentStep = document.querySelector(".active");
        const prevStep = currentStep.previousElementSibling;

        if (!prevStep) return;
        currentStep.classList.remove("active");
        prevStep.classList.add("active");

        checkStep(prevStep);
    });
    btnArrowRight.addEventListener("click", () => {
        const currentStep = document.querySelector(".active");
        const nextStep = currentStep.nextElementSibling;

        if (!nextStep) return;
        currentStep.classList.remove("active");
        nextStep.classList.add("active");
    
        checkStep(nextStep);
    });



    btnCloseAlert.addEventListener("click", () => {
        playReversed(animateAlert);
    });



    // ——————————————————————————————————————————————————————————————————
    showAlert("Press start to create your Witness!");
});