const hamberger = document.querySelector('[data-menu]');
const navbar = document.querySelector('[data-mobile-nav]');
const backButton = document.querySelector('.back-button');
let sliderArr = ['image/slider4.png','image/slider1.png','image/slider2.png','image/slider3.png','image/slider4.png','image/slider1.png']

let image = '';
const sliderWrapper = document.querySelector('.slider-wrapper');

const render = ()=>{
    for(let i = 0; i < sliderArr.length; i++){
        image += `<img alt="" class="team-img" src="${sliderArr[i]}">`;
    }
    sliderWrapper.innerHTML = image;
}

render()

console.log(sliderArr)


const sliderImage = document.querySelectorAll('.slider-wrapper img');
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
let counter = 1;
const size = sliderImage[0].clientHeight;

const loadMore = document.querySelector('.button-load-more');

loadMore.addEventListener('click', ()=>{
      fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data =>{
            sliderArr.push(data.file)
            console.log(data.file)
            render();
        })
})


for(let i = 0; i < sliderArr.length; i++){
    image += `<img alt="" class="team-img" src="${sliderArr[i]}">`;
}

sliderWrapper.innerHTML = image;


hamberger.addEventListener('click', (e)=>{
    navbar.classList.toggle('open');

})

const funcButton = () =>{
    if(document.documentElement.scrollTop <= 330){
        backButton.style.display = 'none';
    } else {
        backButton.style.display = 'block';
    }
}

funcButton();

backButton.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

document.addEventListener('scroll', (e) => {
    funcButton();
})


nextBtn.addEventListener('click', ()=> {
    
    sliderWrapper.style.transition = `transform 400ms ease-in-out`;
    counter++;
    sliderWrapper.style.transform = 'translateX(' +(-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    sliderWrapper.style.transition = `transform 400ms ease-in-out`;
    counter--;
    sliderWrapper.style.transform = 'translateX(' +(-size * counter) + 'px)';
})



