const priceCards = function (){
  const itemBtns = document.querySelectorAll('.item-price__btn');




  itemBtns.forEach(btn => { 
      btn.addEventListener('click', activeCard);
      function activeCard() {    
          const content = this.parentNode;
          const mainItem = content.parentNode;
          if (!this.classList.contains('active')) {
              this.classList.add('active', 'spin-icon');         
              mainItem.classList.add('active');
          } else {
              this.classList.remove('active', 'spin-icon');
              mainItem.classList.remove('active');   
          }
      }
});
}
export default priceCards;