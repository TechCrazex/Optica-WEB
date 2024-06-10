// Animaciones R
//AOS.init();
// 

 AOS.init({
  disable: 'phone', // Desactiva AOS en dispositivos móviles
});

document.querySelectorAll('[data-aos]').forEach(element => {

  switch (element.dataset.aos) {
    case 'fade-right':
      element.style.transform = 'translateX(0)';
      element.addEventListener('aos:in', () => {
        element.style.transform = 'translateX(100px)';
      });
      break;
    case 'zoom-in-right':
      element.style.transform = 'scale(1)';
      element.addEventListener('aos:in', () => {
        element.style.transform = 'scale(1.2) translateX(50px)';
      });
      break;
    case 'zoom-in-left':
      element.style.transform = 'scale(1)';
      element.addEventListener('aos:in', () => {
        element.style.transform = 'scale(1.2) translateX(-50px)';
      });
      break;
    case 'zoom-in':
      element.style.transform = 'scale(1)';
      element.addEventListener('aos:in', () => {
        element.style.transform = 'scale(1.2)';
      });
      break;
  }

  element.addEventListener('aos:out', () => {
    element.style.transform = '';
  });
});

/////////////////////////////////////////////////////////
let img1Btn = document.getElementById("img-1.1");
let img2Btn = document.getElementById("img-2.2");
let img3Btn = document.getElementById("img-3.3");
let img4Btn = document.getElementById("img-4.4");
let imgchange = document.getElementById("imgchange");

img1Btn.onclick = function(){
    imgchange.src = "../img/Group 70 (1).png";
}
img2Btn.onclick = function(){
    imgchange.src = "../img/2.png";
}
img3Btn.onclick = function(){
    imgchange.src = "../img/1.png";
}
img4Btn.onclick = function(){
    imgchange.src = "../img/3.png";
}

// Estilo de las estrellas hover
const starsGold = document.querySelectorAll('.starw');
starsGold.forEach(function(starBi ,index){
	starBi.addEventListener('click', function(){
		for (let i=0; i<=index; i++){
			starsGold[i].classList.add('checked');
		}
		for (let i=index+1; i<starsGold.length; i++){
			starsGold[i].classList.remove('checked');
		}
	})	
})

// Animacion del ZOOM para ver los detalles de la imagen
const container = document.getElementById('zoom-container');
const previewBox = document.querySelector('.preview-box');

container.addEventListener('mousemove', function(event) {
  const containerRect = container.getBoundingClientRect();
  const x = event.clientX - containerRect.left;
  const y = event.clientY - containerRect.top;

  const image = document.getElementById('imgchange');
  const imageRect = image.getBoundingClientRect();
  const imageX = (x / containerRect.width) * imageRect.width;
  const imageY = (y / containerRect.height) * imageRect.height;

  previewBox.style.left = `${x - 35}px`;
  previewBox.style.top = `${y - 35}px`;

  container.style.setProperty('--x', `${imageX}px`);
  container.style.setProperty('--y', `${imageY}px`);
});

container.addEventListener('mouseenter', function() {
  container.classList.add('zoomed');
  previewBox.style.display = 'block';
});

container.addEventListener('mouseleave', function() {
  container.classList.remove('zoomed');
  previewBox.style.display = 'none';
});

// About animacion
function cambiarTexto1(elemento) {
    elemento.classList.remove('rotar'); 
    setTimeout(function() {
        elemento.classList.add('rotar'); 
    }, 10);
    elemento.innerHTML = "<p>° Gafas de sol con diferentes tipos de filtros para protección UV.<br>° Lentes de sol polarizadas para reducir el deslumbramiento.<br>° Gafas deportivas con características específicas para diferentes actividades.  </p>   ";
}

function restaurarTexto1(elemento) {
    elemento.classList.remove('rotar');
    elemento.innerHTML = '<picture class="ajustes-img"><img src="../img/BLUEGAFAS.png" alt=""></picture>';
}
