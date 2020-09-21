{

	'use strict';

  let xlScreen = window.matchMedia("(min-width: 1400px)");

  let xScreen = window.matchMedia("(min-width: 1199px) and (max-width: 1399px)");

  let mScreen = window.matchMedia("(min-width: 700px) and (max-width: 1198px)");

  let pScreen = window.matchMedia("(min-width: 0px) and (max-width: 699px)");

  let carousel = document.querySelector('.logosCarousel');

  let pasta = 'img/Clientes/';

  let logosFileNames = [
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_actt.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_albe.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_alla.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_andr.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_argo.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_baby.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_basi.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_bcf.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_cham.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_cia-.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_ciam.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_conc.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_cone.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_cpo-.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_cuta.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_danp.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_data.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_debo.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_delf.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_dr-t.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_ease1.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_ease.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_edit.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_edua.jpg',
  'digital-trix-inteligencia-em-relacoes-publicas_clientes_ekko.jpg'
  ];

  let logosLinks = [
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link',
  'link'
  ];

  let cont = logosFileNames.length;

  let contGrid = 0;

  // console.log(logosFileNames);

  function matchMediaa(xl,x,m,p) {
    if (xl.matches) {
    	contGrid = 8;
    	console.log('xl');
    } else if (x.matches) {
    	contGrid = 6;
    	console.log('x');
    } else if (m.matches) {
    	contGrid = 5;
    	console.log('m');
    } else if (p.matches) {
    	contGrid = 3;
    	console.log('p');
    };
  };

  matchMediaa(xlScreen, xScreen, mScreen, pScreen);


  class Slides {
    constructor(pathh, imgsArr, linkAdressArr) {
      this.pathh = pathh;
      this.imgsArr = imgsArr;
      this.linkAdressArr = linkAdressArr;
    }

    createDiv() {
      let logosSlide = document.createElement('div');
      logosSlide.className = 'logosArea flex';
      carousel.appendChild(logosSlide);
    }

    createAlink(num) {
      let logoWrapper = document.createElement('a');
      logoWrapper.setAttribute('href', this.linkAdressArr[num]);
      let logo = document.createElement('amp-img');
      logo.setAttribute('layout', 'fill');
      logo.setAttribute('src', this.pathh + this.imgsArr[num]);
      logo.className = 'contain';
      logoWrapper.appendChild(logo);
      carousel.lastElementChild.appendChild(logoWrapper);
    }

    createSlides() {
      let x = 0;
      let contSlides = Math.floor(cont / contGrid);
      this.imgsArr.forEach((el,index) => {
        console.log(el);
        console.log(index);
        if(x === 0) {
          this.createDiv();
          this.createAlink(index);
          x++;
        } else {
          if(x <= contGrid - 1) {
            this.createAlink(index);
            x++
          } else {
            x = 0;
          }
        }
      });
      console.log(contSlides);
    }
  }


  let criarSlides = new Slides(pasta, logosFileNames, logosLinks);


  criarSlides.createSlides();

}