
window.addEventListener("load", function(){

    const projectsSlideshow = document.getElementById("projects__slideshow");

    const projectButton1 = document.getElementById("projects__control_1");
    const projectButton2 = document.getElementById("projects__control_2");
    const projectButton3 = document.getElementById("projects__control_3");
    

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
            projectsSlideshow.scrollTo(projectsSlideshow.offsetWidth*2, 0);
        }
    });

});