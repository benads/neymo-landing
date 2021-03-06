let sections;
let prevRatio;

const createObserver = element => {
    console.log(element);

    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > prevRatio) {
                let img = element.querySelector('img');
                gsap.fromTo(element, {opacity: 0, y: "-25",}, {opacity: 1, y:0, duration: 2});
                let tl = gsap.timeline();
                tl.fromTo(img, {opacity: 0, y: "-25", x:"25" }, {opacity: 1, y: 0, x:0, duration: 1});
            } else {
              console.log(entry);
            }
        
            prevRatio = entry.intersectionRatio;
          });
    }, options);

    observer.observe(element);
}

window.addEventListener('load', ()=>{
    sections =  document.querySelectorAll('.section');
    sections.forEach(element => {
        console.log(element);
        createObserver(element)
    });
});
