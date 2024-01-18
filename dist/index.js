    /*=============== SEARCH ===============*/
    const searchbutton =document.getElementById("search-button"),
       closebutton= document.getElementById("search--close"),
       searchcontent= document.getElementById("search-content")



       if ( searchbutton) {
        searchbutton.addEventListener('click',(eo) => {
          searchcontent.classList.add("show")

        })
        
       }
       if (closebutton) {
        closebutton.addEventListener('click',() => {
          searchcontent.classList.remove("show")

        })
        
       }
    

/*=============== LOGIN ===============*/
const loginhbutton =document.getElementById("login-button"),
       loginclose= document.getElementById("login--close"),
       logincontent= document.getElementById("login-content")



       if ( loginhbutton) {
        loginhbutton.addEventListener('click',(eo) => {
          logincontent.classList.add("show-login")

        })
        
       }
       if (loginclose) {
        loginclose.addEventListener('click',() => {
          logincontent.classList.remove("show-login")

        })
        
       }

/*=============== ADD SHADOW HEADER ===============*/
const shadowheader = (params) => {
  const header= document.getElementById('header');
  if(this.scrolly>=50){
    header.classList.add('shadow-header');
  }else{
    header.classList.remove('shadow-header');
  }
}

/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home--swiper', {
  // Optional parameters
  loop: true,
  spaceBetween:-24,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSLides:'auto',
  autoplay:{
    delay:1000,
    disableOnInteraction:false,

  },
breakpoints:{
1220:{
  spaceBetween:-32,
}
}
  // If we need pagination

});
/*=============== FEATURED SWIPER ===============*/

let swipefeatured = new Swiper('.featured-swiper', {
  // Optional parameters
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSLides:'auto',
  navigation :{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
breakpoints:{
1150:{
slidesPerView:4,
centeredSLides:false,

}
}


});
/*=============== NEW SWIPER ===============*/

let swiperNew= new Swiper('.new-swiper', {
  // Optional parameters
  loop: true,
  spaceBetween:16,

  slidesPerView:'auto',


breakpoints:{
1150:{
slidesPerView:3,


}
}


});
/*=============== TESTIMONIAL SWIPER ===============*/


let swipertestimoial= new Swiper('.testimoial-swiper  ', {
  // Optional parameters
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSLides:'auto',
  navigation :{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
breakpoints:{
1150:{
slidesPerView:4,
centeredSLides:false,

}
}


});
/*=============== SHOW SCROLL UP ===============*/ 
let span =document.querySelector(".srcollup")
window.onscroll =function(){
  // console.log(this.scrollY)
  if(this.scrollY>=700){
    span.classList.add("show-srcoll");
  }else{
    span.classList.remove("show-srcoll");
  } 

}


span.onclick =function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id');
const srcollactive = (params) => {


  
  const srcolldownW=indow.srcollY;





  sections.forEach(currentItem => {
    const sectinHight= currentItem.offsetHeight,
    sectinTop= currentItem.offsetTop-58,
    sectionId=currentItem.getAttribute('id'),
    sectionclass= document.querySelector('.nav--menu a[href*='+sectionId+']'
    );
    if (srcolldownW>sectinTop&& srcolldownW<=sectinTop+sectinHight) {
      sectionclass.classList.add('active-link');

    }else{
      sectionclass.classList.remove('active-link');
    }
  });

}
// Window.addEventListener('srcoll', srcollactive)

/*=============== DARK LIGHT THEME ===============*/ 

let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('ri-sun-line', 'ri-moon-line');
   body.classList.add('dark-theme');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('ri-moon-line', 'ri-sun-line');
   body.classList.remove('dark-theme');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();


   }else{
      disableDarkMode();
   }
}
/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal(`.home--date ,.featured-container,.new-container,.join-date,.testimoial-container,.footer`)
sr.reveal(`.home-images`, {delay: 600})
sr.reveal(`.services--card`, {interval:100})
sr.reveal(`.discount-date`, {origin:'left'})
sr.reveal(`.discount-images`, {origin:'right'})


/*=============== form  login validation ===============*/

const form = document.querySelector(".login--form");
const inputs = form.querySelectorAll(".login--input");

form.addEventListener("submit", submitHanlder);

function submitHanlder(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.nextElementSibling.textContent = `${input.dataset.type} مطلوب`;
    }
    // check  password
    else if (
      (input.dataset.type === "password") &&
      input.value.trim().length <= 3
    ) {
      input.nextElementSibling.textContent = "الحد الأدنى لطول 4 أحرف";
    }
    // checlk email
    else if (
      input.dataset.type === "email" &&
      !input.value.trim().includes("@gmail.com")
    ) {
      input.nextElementSibling.textContent = `تنسيق البريد الإلكتروني غير صالح`;
    } else {
      input.nextElementSibling.textContent = "";
      
    }
  
  });
;
}
/*=============== form  validation  show  password  ===============*/

const loginpassworld = document.getElementById('login-passworld')
 const eyes= document.querySelector('.eye-close');
 eyes.addEventListener('click',(ee) => {
  if (loginpassworld.getAttribute("type")=== "password") {
    loginpassworld.setAttribute('type','text');
  }
  else{
    loginpassworld.setAttribute('type','password');
  }
 })






/*=============== Falling Snow Animation ===============*/
let canvas, ctx, w, h, snows, snows2;

function init() {
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext("2d");

	resizeReset();
	animationLoop();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;

	snows = [];
	for (let i = 0; i < 500; i++) {
		snows.push(new Snow());
	}
	snows2 = [];
	for (let i = 0; i < 500; i++) {
		snows2.push(new Snow2());
	}
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	drawScene();
	requestAnimationFrame(animationLoop);
}

function drawScene() {
	for (let i = 0; i < snows.length; i++) {
		snows[i].update();
		snows[i].draw();
	}
	for (let i = 0; i < snows2.length; i++) {
		snows2[i].update();
		snows2[i].draw();
	}
}

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

class Snow {
	constructor() {
		this.reset();
		this.rgb = "255, 255, 255";
	}
	reset() {
		this.x = getRandomInt(0, w);
		this.xc = ((this.x - (w / 2)) / (w / 2)) / 2;
		this.y = getRandomInt(-(h * 0.3), h);
		this.yc = getRandomInt(10, 15) / 10;
		this.size = getRandomInt(10, 20) / 10;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = getRandomInt(3, 5) / 100;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	update() {
		this.x += this.xc;
		this.y += this.yc;
		this.a += this.ac;
		if (this.a > 2) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}

class Snow2 {
	constructor() {
		this.reset();
		this.rgb = "255, 255, 255";
	}
	reset() {
		this.x = getRandomInt(0, w);
		this.y = getRandomInt(0, h);
		this.size = getRandomInt(0, 5) / 10;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = 0.01;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	update() {
		this.y -= 0.1;
		this.a += this.ac;
		if (this.a > 1.5) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
/*=============== loader-container ===============*/
// const loader=  document.querySelector('.loader-container').classList.add('active');
// const fedeout = (params) => {
//   setTimeout(loader,3000)
// }

const loader=  document.querySelector('.loader-container');

// function fedeout() {
// setTimeout(loader,1000);
// }
setTimeout(() => {
  loader.remove();
}, 4000);

