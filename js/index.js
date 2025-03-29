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
    const btnOpenSidebar = document.querySelector(".btn-open-sidebar");
    const btnCloseSidebar = document.querySelector(".btn-close-sidebar");

    const btnsChooseForm = document.querySelectorAll(".btn-choose-form");

    // SECTIONS —————————————————————————————————————————————————————————
    const secStart = document.querySelector(".start");
    const secMain = document.querySelector(".main");

    const secMenu = document.querySelector(".menu");
    const secCustomise = document.querySelector(".customise");
    const secInstall = document.querySelector(".install");
    const secTest = document.querySelector(".test");

    const secInfoText = document.querySelector(".info");

    // DEVICE  ——————————————————————————————————————————————————
    const deviceForms = document.querySelectorAll(".device__form");

    // ALERT ————————————————————————————————————————————————————————
    const alert = document.querySelector(".alert");
    const alertMessage = document.querySelector(".alert__message");

    // CURSOR ——————————————————————————————————————————————————
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
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

    // CHART 1
    anime({
        targets: '#rect-1',
        x: ['80' ,'0'],
        y: ['0', '30'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#circle-1',
        cx: ['95' ,'15'],
        cy: ['15', '45'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#line-1',
        x1: ['28' ,'18'],
        y1: ['98', '138'],
        x2: ['95' ,'15'],
        y2: ['15', '45'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#rect-2',
        x: ['75' ,'85'],
        y: ['80', '60'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#circle-2',
        cx: ['80' ,'90'],
        cy: ['85', '65'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#line-2',
        x1: ['80' ,'90'],
        y1: ['85', '65'],
        x2: ['95' ,'15'],
        y2: ['15', '45'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#rect-3',
        x: ['20' ,'10'],
        y: ['90', '130'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#circle-3',
        cx: ['28' ,'18'],
        cy: ['98', '138'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#line-3',
        x1: ['80' ,'90'],
        y1: ['85', '65'],
        x2: ['101' ,'111'],
        y2: ['151' ,'161'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#rect-4',
        x: ['90' ,'100'],
        y: ['140' ,'150'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#circle-4',
        cx: ['101' ,'111'],
        cy: ['151' ,'161'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    anime({
        targets: '#line-4',
        x1: ['28' ,'18'],
        y1: ['98', '138'],
        x2: ['101' ,'111'],
        y2: ['151' ,'161'],
        duration: 2000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true,
    })
    

    // CHART 2
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
            duration: 500,
            easing: 'easeInOutQuad',
            complete: animateChart2,
        });
    }
    animateChart2();




    // CHART 3
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
            easing: 'easeInOutQuad',
            complete: animateChart3,
        });
    }
    animateChart3();


    // CHART 4
    function animateChart4() {
        anime({
            targets: '.chart-4__el',
            rotate: () => {return anime.random(0, 360)},
            duration: () => {return anime.random(500, 800)},
            easing: 'easeInOutQuad',
            complete: animateChart4,
        })
    }
    animateChart4();

    // CHART 5
    for (let i = 0; i < 24; i++) {
        let el = document.createElement("div");
        el.classList.add("chart-5__el");
        chart5.appendChild(el);
    }
    function animateChart5() {
        anime({
            targets: '.chart-5__el',
            height: () => {return anime.random(10, 180)},
            duration: () => {return anime.random(200, 500)},
            easing: 'easeInOutQuad',
            delay: anime.stagger(10),
            complete: animateChart5,
        });
    }
    animateChart5();



    // PROCESSOR ——————————————————————————————————————————————————
    const processorPartsWrapper = document.querySelector('.processor-parts');
    const processorParts = document.querySelectorAll('.processor-part');
    const processorBox = document.querySelector('.processor-box');
    const boxParts = document.querySelectorAll('.box-part');

    processorParts.forEach((part, index) => {
        let isGrabed = false;
        let offsetX;
        let offsetY;

        part.addEventListener('mousedown', (e) => {
            isGrabed = true;

            offsetX = e.clientX - part.getBoundingClientRect().left;
            offsetY = e.clientY - part.getBoundingClientRect().top;

            document.body.append(part);
            part.style.zIndex = 1000;
        });
        document.addEventListener('mousemove', (e) => {
            if (isGrabed) {
                part.hidden = true;
                let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
                part.hidden = false;

                if (elemBelow == boxParts[index]) {
                    processorParts[index].classList.add('hidden');
                    boxParts[index].style.fillOpacity = '1';
                }




                part.style.left = e.clientX - offsetX + 'px';
                part.style.top = e.clientY - offsetY + 'px';

                part.style.scale = '0.5';
            }
        })
        document.addEventListener('mouseup', () => {
            isGrabed = false;
            part.style.scale = '1';
            processorPartsWrapper.append(part);
        });
        part.ondragstart = () => {
            return false;
        };
    })
    processorBox.ondragstart = () => {
        return false;
    };



    // FIELD ——————————————————————————————————————————————————
    const field = document.querySelector('.field');
    const fieldWidth = 12;
    const fieldHeight = 12;
    const fieldGrid = [fieldWidth, fieldHeight];
    const numberOfDots = fieldWidth * fieldHeight; 

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.id = i;
        field.appendChild(dot);

        dot.addEventListener('click', (e) => {
            anime({
                targets: ".dot",
                scale: [
                    {value: 1.35, easing: "easeOutSine", duration: 150},
                    {value: 1, easing: "easeInOutQuad", duration: 300},
                ],
                translateY: [
                    {value: -15, easing: "easeOutSine", duration: 150},
                    {value: 0, easing: "easeInOutQuad", duration: 300},
                ],
                opacity: [
                    { value: 0.5, easing: "easeInOutQuad", duration: 150 },
                    { value: 1, easing: "easeOutSine", duration: 300 },
                ],
                delay: anime.stagger(50, {
                    grid: fieldGrid,
                    from: e.target.id,
                })
            })
        })
    }


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
        autoplay: false,
        duration: 1200,
        opacity: 1,
        translateY: '450%',
        scale: 2,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        endDelay: 750,
    });
    const animateBtn = anime({
        targets: '.btn',
        autoplay: false,
        translateX: '100%',
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });
    const animateSidebar = anime({
        targets: '.sidebar',
        loop: false,
        autoplay: false,
        duration: 2000,
        easing: "easeInOutQuad",
        translateX: '100%',
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
        animateBtn.play();

        setTimeout(() => {
            secMenu.classList.add("hidden");
            secCustomise.classList.remove("hidden");
            secInfoText.textContent = "customise|01";

            btnContinue.classList.remove("hidden");
            showAlert("Customise form, color and processor!")
        }, 1000);
    });
    btnInstall.addEventListener("click", () => {
        animateBtn.play();

        setTimeout(() => {
            secMenu.classList.add("hidden");
            secInstall.classList.remove("hidden");
            secInfoText.textContent = "install|02";
    
            btnContinue.classList.remove("hidden");
            showAlert("Install all parts of the processor!");
        }, 1000);
    });
    btnTest.addEventListener("click", () => {
        animateBtn.play();

        setTimeout(() => {
            secMenu.classList.add("hidden");
            secTest.classList.remove("hidden");
            secInfoText.textContent = "test|03";

            btnFinish.classList.remove("hidden");
            showAlert("Test if the device responds to noise!");
        }, 1000);
    });



    btnContinue.addEventListener("click", () => {
        animateBtn.play();

        setTimeout(() => {
            secMenu.classList.remove("hidden");
            secCustomise.classList.add("hidden");
            secInstall.classList.add("hidden");
            secInfoText.textContent = "menu";

            btnContinue.classList.add("hidden");
        }, 1000);
    });
    btnFinish.addEventListener("click", () => {
        animateBtn.play();

        setTimeout(() => {
            resetSite();
            showAlert("Congratulations! Your Device is ready! Press start to create another one!");
        }, 1000);
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



    btnOpenSidebar.addEventListener("click", () => {
        animateSidebar.play();
    });
    btnCloseSidebar.addEventListener("click", () => {
        playReversed(animateSidebar);
    });



    btnsChooseForm.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            const form = document.querySelector(`.device__form${i + 1}`);
            deviceForms.forEach(el => {
                if (el == form) {
                    el.classList.remove("hidden");
                } else {
                    el.classList.add("hidden");
                }
            });
        }); 
    });



    // ON SITE LOAD ——————————————————————————————————————————————————————————————————
    showAlert("Press start to create your Witness!");
});