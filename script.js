let circle = document.querySelector('#circle');
const button = document.querySelector('#button');
var hello = gsap.timeline();
const svgPart = document.querySelector('svg');

window.addEventListener(  'mousemove',function(details){    
    let xValue = details.clientX;
    let yValue = details.clientY;

    this.setTimeout(function(){
        circle.style.top = `${yValue}px`;
    circle.style.left = `${xValue}px`;
    },70)

});

button.addEventListener('click', function(){
   hello.reverse();
   setTimeout(function(){
       svgPart.classList.add('animate');
   },8500)
})







hello
.from('#wrapper', {
    duration: 3,
    scale: .10,
    ease: 'Expo.easeInOut',
    opacity: 0
})

.from('#strip', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut',
    })

.from('#blackcard', {
    duration: 2.5,
    scale:.10,
    opacity: 0,
    ease: 'Expo.easeInOut',
    },'-=1')

    .from('#blackcard p', {
        duration: 1.2,
        y :30,
        opacity: 0,
        ease: 'Expo.easeInOut',
     }, '-=1.2')     

.from('#lineElem', {
     duration: 1,
     scale:.10,
     opacity: 0,
     ease: 'Expo.easeInOut',
     },'-=.5')

     

.from('#lineElem .line', {
     duration: 2.5,
     width: 0,
     opacity: 0,
     ease: 'Expo.easeInOut',
     })     

     .from('#sidetext', {
        duration:4,
        y :150,
        opacity: 0,
        ease: 'Expo.easeInOut',
     }, '-=3.3')  
    