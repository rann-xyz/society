// =====================================
// SOCIETY WEB SCRIPT
// =====================================


// ===============================
// Navbar Blur On Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Scroll Reveal
// ===============================

const hiddenElements = document.querySelectorAll(

".about,.services,.why,.socials,.faq,.card,.social-card,.faq-item"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(el=>{

    observer.observe(el);

});


// ===============================
// Hero Mouse Parallax
// ===============================

const hero = document.querySelector(".hero-content");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth / 2 - e.clientX) / 35;
    let y = (window.innerHeight / 2 - e.clientY) / 35;

    hero.style.transform =
    `translate(${x}px,${y}px)`;

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// FAQ Accordion
// ===============================

document.querySelectorAll(".faq-item").forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("open");

    });

});


// ===============================
// Scroll Progress
// ===============================

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    let totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    let progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});


// ===============================
// Back To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Loading Screen
// ===============================

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.classList.add("loader-hide");

    }

});


// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".primary,.secondary,.btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


// ===============================
// Console Message
// ===============================

console.log("%cWelcome to Society","font-size:22px;color:#3b82f6;font-weight:bold");

console.log("Discover Alpha. Stay Informed.");
