(function () {
  'use strict';

  class PortfolioView {
    constructor(projects) {
      this._projects = projects;
    }

    renderPortfolioItem(item) {
      /*return `
      <div class="portfolio__list__item " ontouchstart="this.classList.toggle('hover');">
              <div class="portfolio_item__container">
                <div
                  class="front"
                  style="background: url(img/portfolio/${
                    item.frontImg
                  }); background-position: 0px -5px"
                >
                  <div class="inner">
                    <p>${item.header}</p>
                    <span>${item.descr}</span>
                  </div>
                </div>
                <div
                  class="back"
                  style="background-image: url(img/portfolio/${
                    item.backImg
                  }); background-position: center"
                >
                  <div class="inner">
                    <p>
                    ${item.backText}
                    </p>
                    <p><a href="https://${item.href}">View project</a></p>
                  </div>
                </div>
              </div>
            </div>
      `.trim();*/
      return `
   <a href="${item.link}">
    <div class="card">
          <figure class="front">
            <img src="img/portfolio/${item.backImg}" alt="front" />
            <div class="caption">
              <h2><span>${item.header}</span></h2>
              <p>${item.descr}</p>
            </div>
          </figure>

          <figure class="back">
            <img src="img/portfolio/${item.frontImg}" alt="back" />
            <div class="caption">
              <dl>
                <dt>Web</dt>
                <dd>${item.date}</dd>
              </dl>
            </div>
          </figure>
        </div>
       </a>
    `.trim();
    }

    renderPortfolio() {
      let result = ``;
      for (const it of this._projects) {
        result += this.renderPortfolioItem(it);
      }
      this._portfolioCode = result;
    }

    get portfolioCode() {
      if (this._portfolioCode) {
        return this._portfolioCode;
      } else {
        this.renderPortfolio();
        return this._portfolioCode;
      }
    }
  }

  class Portfolio {
    constructor(container) {
      this._projects = [
        {
          header: `Mitler`,
          descr: `HTML5, CSS3, Bootstrap 4 , JS`,
          frontImg: `diary-index.png`,
          backImg: `mitler.png`,
          link: `https://fostij.github.io/Mitler.github.io/`,
          backText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat
          velit quae suscipit c.`,
          date: `03.03.2019`,
        },
        {
          header: `Time`,
          descr: `HTML5, CSS3, Bootstrap 4 , JS`,
          frontImg: `quiz-index.png`,
          backImg: `time.png`,
          
          backText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat
        velit quae suscipit c.`,
          date: `15.01.2019`,
        },
        {
          header: `Treatwell`,
          descr: `HTML5, CSS3, Bootstrap 4 , JS`,
          frontImg: `pixelHunter-index.png`,
          backImg: `treatwell.jpg`,
          backText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat
        velit quae suscipit c.`,
          date: `13.11.2018`
        },
        {
          header: `Business`,
          descr: `HTML5, CSS3`,
          frontImg: `ileoo-index.png`,
          backImg: `business.jpg`,
          backText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat
        velit quae suscipit c.`,
          date: `05.07.2018`
        },
        {
          header: `Armata`,
          descr: `HTML, CSS, Bootstrap 4 , and jQuery `,
          frontImg: `mr_roof-index.png`,
          backImg: `armata.png`,
          backText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat
        velit quae suscipit c.`,
          date: `09.05.2018`
        },
        
      ];
      this.view = new PortfolioView(this._projects);
      this._portfolioContainer = document.querySelector(container);
    }

    show() {
      this._portfolioContainer.innerHTML = this.view.portfolioCode;
    }
  }

  const PortfolioList = new Portfolio(".portfolio_container");
  PortfolioList.show();

  $(".card").click(function(event) {
    const targetClass = event.target.className;
    if (!(targetClass == "portfolio_card__btn")) {
      event.preventDefault();
      $(this).toggleClass("flipped");
    }
  });

  /*menu toggle*/

  let menuToggle = document.querySelector(".main_menu__togle");
  let menu = document.querySelector(".main_menu");
  let overlay = document.querySelector(".overlay");
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("main_menu--open");
  });
  overlay.addEventListener("click", () => {
    menu.classList.toggle("main_menu--open");
  });

  /*smooth scrolling*/
  const isMobile = $("body").width() <= 767;
  const heightOfEditing = isMobile ? 54 : 59;

  $(".smooth_scrolling").bind("click", function() {
    const target = $(this).attr("href");
    const bl_top = $(target).offset().top - heightOfEditing;
    $("body, html").animate({ scrollTop: bl_top }, 400);
    return false;
  });

  if (isMobile) {
    $(".main_menu__list .smooth_scrolling").bind("click", function() {
      menu.classList.toggle("main_menu--open");
    });
  }

}());

//# sourceMappingURL=main.js.map
