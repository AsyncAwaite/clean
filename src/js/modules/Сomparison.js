export default class Сomparison {
  constructor({parent}) {
      this.parent = document.querySelectorAll(parent); // Родительский єлемент для фотографий.
  }
  renderEl() {
    this.parent.forEach((item) => {
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
    this.change();
  }
  change() {
    this.parent.forEach((item) => {
      const before = item.querySelector(".slide__before");
      const beforeImage = item.firstElementChild.querySelector('img');
      const resizer = item.querySelector(".slide__resizer");
      let active = false;
      document.addEventListener("DOMContentLoaded", function () {
        let width = item.offsetWidth;
        beforeImage.style.width = width + "px";
      });
      resizer.addEventListener("mousedown", function () {
        active = true;
        resizer.classList.add("resize");
      });

      document.body.addEventListener("mouseup", function () {
        active = false;
        resizer.classList.remove("resize");
      });

      document.body.addEventListener("mouseleave", function () {
        active = false;
        resizer.classList.remove("resize");
      });
      document.body.addEventListener("mousemove", function (e) {
        if (!active) return;
        let x = e.pageX;
        x -= item.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
      });
      resizer.addEventListener("touchstart", function () {
        active = true;
        resizer.classList.add("resize");
      });
      document.body.addEventListener("touchend", function () {
        active = false;
        resizer.classList.remove("resize");
      });

      document.body.addEventListener("touchcancel", function () {
        active = false;
        resizer.classList.remove("resize");
      });
      document.body.addEventListener("touchmove", function (e) {
        if (!active) return;
        let x;

        let i;
        for (i = 0; i < e.changedTouches.length; i++) {
          x = e.changedTouches[i].pageX;
        }

        x -= item.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
      });
      function slideIt(x) {
        let transform = Math.max(0, Math.min(x, item.offsetWidth));
        before.style.width = transform + "px";
        resizer.style.left = transform - 0 + "px";
      }
      function pauseEvent(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
      }
    });
  }
}
