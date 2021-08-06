const generateSlide =  function () {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    const images = slide.querySelectorAll('img');
    const fragment = document.createDocumentFragment();
    const beforeEl = document.createElement('div');
    beforeEl.classList.add('slide__before');
    beforeEl.appendChild(images[0]);
    const after = document.createElement('div');
    after.classList.add('slide__after');
    after.appendChild(images[1]);
    const Elresizer = document.createElement('div');
    Elresizer.classList.add('slide__resizer');
    fragment.appendChild(beforeEl);
    fragment.appendChild(after);
    fragment.appendChild(Elresizer);
    slide.appendChild(fragment);
  });

  

  

}
export default generateSlide;