export default class Generator {
  constructor({ container = null, activeClass = null }) {
    try {
      this.container = document.querySelectorAll(container); // Контейнер для фотографий. 
      this.activeClass = activeClass;
      this.wrapper = document.querySelector(".aa1")
      
    } catch (e) {}
  }
  renderEl() {
    this.container.forEach((item) => {
      const images = item.querySelectorAll("img");
      const fragment = document.createDocumentFragment();
      const beforeEl = document.createElement("div");
      const afterEl = document.createElement("div");
      const resizerEl = document.createElement("div");
      beforeEl.classList.add("slide__before");
      beforeEl.appendChild(images[0]);
      afterEl.classList.add("slide__after");
      afterEl.appendChild(images[1]);
      resizerEl.classList.add("slide__resizer");
      fragment.appendChild(beforeEl);
      fragment.appendChild(afterEl);
      fragment.appendChild(resizerEl);
      item.appendChild(fragment);     
    });
  }
  init() {
    this.renderEl();
   
  }
  change() {
    
  /*
    const slider = document.querySelector('.swiper-slide-active');
  
  const before = slider.querySelector('.slide__before');

  const beforeImage = before.querySelector('img');
  const resizer = slider.querySelector('.slide__resizer');
  let active = false;
  document.addEventListener("DOMContentLoaded", function() {
      let width = slider.offsetWidth; 
      beforeImage.style.width = width + 'px';
  });
            
      resizer.addEventListener('mousedown',function(){
        active = true;
      resizer.classList.add('resize');
      
      });
      
      document.body.addEventListener('mouseup',function(){
        active = false;
      resizer.classList.remove('resize');
      });
      
      document.body.addEventListener('mouseleave', function() {
        active = false;
        resizer.classList.remove('resize');
      });
      
      document.body.addEventListener('mousemove',function(e){
        if (!active) return;
        let x = e.pageX;
        x -= slider.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
      });
      
      resizer.addEventListener('touchstart',function(){
        active = true;
        resizer.classList.add('resize');
      });
      
      document.body.addEventListener('touchend',function(){
        active = false;
        resizer.classList.remove('resize');
      });
      
      document.body.addEventListener('touchcancel',function(){
        active = false;
        resizer.classList.remove('resize');
      });
      
      //calculation for dragging on touch devices
      document.body.addEventListener('touchmove',function(e){
        if (!active) return;
        let x;
        
        let i;
        for (i=0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX; 
        }
        
        x -= slider.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
      });
      
      function slideIt(x){
          let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
          before.style.width = transform+"px";
          resizer.style.left = transform-0+"px";
      }
      
      //stop divs being selected.
      function pauseEvent(e){
          if(e.stopPropagation) e.stopPropagation();
          if(e.preventDefault) e.preventDefault();
          e.cancelBubble=true;
          e.returnValue=false;
          return false;
      }
  
  
 

  */
     

  // slides.forEach(slide => {
  //   const images = slide.querySelectorAll('img');
  //   const fragment = document.createDocumentFragment();
  //   const beforeEl = document.createElement('div');
  //   beforeEl.classList.add('slide__before');
  //   beforeEl.appendChild(images[0]);
  //   const after = document.createElement('div');
  //   after.classList.add('slide__after');
  //   after.appendChild(images[1]);
  //   const Elresizer = document.createElement('div');
  //   Elresizer.classList.add('slide__resizer');
  //   fragment.appendChild(beforeEl);
  //   fragment.appendChild(after);
  //   fragment.appendChild(Elresizer);
  //   slide.appendChild(fragment);

  //  })
}
}