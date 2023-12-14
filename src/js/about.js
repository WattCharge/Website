
    // Get the elements
    let headerBox = document.getElementById('header');

    window.addEventListener('scroll', () => {

        const screenWidth = window.innerWidth;
        if (window.scrollY >= 50  && screenWidth > 768) {

            headerBox.style.cssText = "border-bottom: 1px solid white !important; background-color: #212534f1; !important;"
        }else if (window.scrollY >= 50  && screenWidth < 768) {
            headerBox.style.cssText = "border-bottom: 1px solid white !important; background-color: #212534f1; !important;"
        }else{
            headerBox.style.cssText  = "border-bottom: 1px solid transparent !important;"
        }



    });