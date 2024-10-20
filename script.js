let currentslide = 0;

function showSlide(index){
    const slider = document.getElementById("slider");
    const slides =document.getElementsByClassName("slide");
    const indicators =document.getElementById("indicators").children;
    if(index >= slides.length){
        currentslide = 0;
    }else if(index < 0){
        currentslide =slides.length-1;
    }else{
        currentslide = index;
    }
    slider.style.transform = `translateX(${-currentslide * 100}%)`;
    for(i = 0;i < indicators.length;i++){
        indicators[i].classList.remove('active');
    }
    indicators[currentslide].classList.add('active');
}
function nextslide(){
    showSlide(currentslide + 1);
}
function prevslide(){
    showSlide(currentslide - 1);
}

function autoslide(){
    nextslide();
}

function docd(){
    nextslide();
}

setInterval(autoslide, 5000);



const slider = document.getElementById('slider');
const slides = document.getElementsByClassName('slide');
const indicatorsContainer = document.getElementById('indicators');

for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.addEventListener('click', i) = function (i) {
    showSlide(i);
  };
  indicatorsContainer.appendChild(indicator);
}

// Show the initial slide
showSlide(currentslide);
