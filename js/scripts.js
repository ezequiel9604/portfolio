
let first_time = false;

window.addEventListener("load", function(){

    let navigation_links_content = document.querySelector(".navigation__links__content");
    let max_height = document.body.offsetHeight;

    if(max_height - this.scrollY <= 100){
        navigation_links_content.style.animationName = "navigation-show-animation";
    }

    window.addEventListener("scroll", function(ev){
        let y_position = this.scrollY;
        if(max_height - y_position <= 100){
            navigation_links_content.style.animationName = "navigation-show-animation";
            first_time = true;
        }
        else{
            if(first_time){
                navigation_links_content.style.animationName = "navigation-hide-animation";
            } 
        }
    });


    // -----------------------------------------------------------------------------


    const projectsSlideshow = document.getElementById("projects__slideshow");

    const projectButton1 = document.getElementById("projects__control_1");
    const projectButton2 = document.getElementById("projects__control_2");
    const projectButton3 = document.getElementById("projects__control_3");
    const projectButton4 = document.getElementById("projects__control_4");   

    projectButton1.addEventListener("click", function(ev){
        if(projectsSlideshow.scrollLeft > 0){
            projectsSlideshow.scrollTo(0, 0);
        }
    });

    projectButton2.addEventListener("click", function(ev){
        if(projectsSlideshow.scrollLeft == 0 || projectsSlideshow.scrollLeft > 0){
            projectsSlideshow.scrollTo((projectsSlideshow.offsetWidth*1), 0);
        }
    });

    projectButton3.addEventListener("click", function(ev){
        if(projectsSlideshow.scrollLeft == 0 || projectsSlideshow.scrollLeft > 0){
            projectsSlideshow.scrollTo((projectsSlideshow.offsetWidth*2), 0);
        }
    });

    projectButton4.addEventListener("click", function(ev){
        if(projectsSlideshow.scrollLeft == 0 || projectsSlideshow.scrollLeft > 0){
            projectsSlideshow.scrollTo((projectsSlideshow.offsetWidth*3), 0);
        }
    });

    // -----------------------------------------------------------------------------


    const referencesSlideshow = document.getElementById("references__slideshow");

    const referenceButton1 = document.getElementById("references__control_left");
    const referenceButton2 = document.getElementById("references__control_right");

    referenceButton1.addEventListener("click", function(ev){
        if(referencesSlideshow.scrollLeft > 0){
            referencesSlideshow.scrollTo(0, 0);
        }
    });

    referenceButton2.addEventListener("click", function(ev){
        if(referencesSlideshow.scrollLeft == 0 || referencesSlideshow.scrollLeft > 0){
            referencesSlideshow.scrollTo((referencesSlideshow.offsetWidth*1), 0);
        }
    });


});