
    // Get the elements
    const cardOne = document.getElementById('cardone');
    const cardTwo = document.getElementById('cardtwo');
    const cardThree = document.getElementById('cardthree');
    const faqLists = document.getElementById('faq_lists');
    const stepsBox = document.getElementById('cont_steps');
    const btnOneStep = document.getElementById('btn_one');
    const btnTwoStep = document.getElementById('btn_two');
    const btnThreeStep = document.getElementById('btn_three');

    window.addEventListener('scroll', () => {

        const screenWidth = window.innerWidth;
        if (window.scrollY >= 400  && screenWidth > 768) {

            cardOne.style.width = '50%';
            cardTwo.style.width = '50%';
            cardThree.style.width = '100%';
        }else if (window.scrollY >= 400  && screenWidth < 768) {
            cardOne.style.width = '100%';
            cardTwo.style.width = '100%';
            cardThree.style.width = '100%';
        }


        if (window.scrollY >= 3100  && screenWidth > 768) {
            faqLists.style.cssText = "display: block;";
        }else if (window.scrollY >= 3250  && screenWidth < 768) {
            faqLists.style.cssText = "display: block;";
        }else{
            faqLists.style.cssText = "display: none;";
        }


        if (window.scrollY >= 2450  && screenWidth > 768) {

            setTimeout(function() {
                btnOneStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 400);
            setTimeout(function() {
                btnTwoStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 800);
            setTimeout(function() {
                btnThreeStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 1200);

        }else if (window.scrollY >= 2500  && screenWidth < 768) {

            setTimeout(function() {
                btnOneStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 400);
            setTimeout(function() {
                btnTwoStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 800);
            setTimeout(function() {
                btnThreeStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 1200);

        }


    });