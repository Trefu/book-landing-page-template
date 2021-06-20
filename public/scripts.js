const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");
const VERSE_HEADER = document.getElementById("verse");

/* 
toggleBtn.onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }

  mobileMenu.classList.toggle("transform");
};
 */

toggleBtn.addEventListener("click", () => {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
  mobileMenu.classList.toggle("transform");
});

const fadeOutHeader = () => {
  setTimeout(() => {
    VERSE_HEADER.classList.add("opacity-0");
    setTimeout(() => {
      VERSE_HEADER.textContent =
        '" Produciendo una veta en ellas y a la tinta al fin llegar "';
      VERSE_HEADER.classList.toggle("opacity-0");
    }, 1000);
  }, 6500);
};

const init = () => {
  setTimeout(() => {
    const body = document.body;
    body.classList.remove("overflow-hidden");
    const loader = document.getElementById("loading");
    loader.remove();

    fadeOutHeader();
  }, 1000);
};
document.onload = init();

/* const AJEDREZ_POEMA = `Apasionante juego tal vez como el desafiante Ajedrez!!\n
decidida pujante un paso atrás otro para adelante!\n
Empuñando finas letras, temiendo fueran arrebatar.\n
Por años cobijando ese tesoro en papel que "lindoslocosrecuerdos" saben entender...\n
Caminando en aventuras tratando de revelar\n
aquella nomble escritura que lograste publicar.\n
Sobre unpqueño libro de cuentos, \n
Hadas fantasias y más...\n
sueños majestuosos para contar metióse\n
la aventura como arañas en telar\n
al cuento entretejiendo, compartiendo los momentos\n
desafiando esa mision!!!\n
Desvelado por las noches\n
palpitados recuerdos sosteniendo fuerte el timón!\n
Cómo el arca de Noé, llevando especies de gran valor\n
metida entre las viñas recibiendo uvas frescas\n
compartiendo el honor sellando antologías publicadas\n
con pasión sopla el viento, abren velas...\n
Zarpa el barco, el viaje empieza\n
con coraje y solo un lápiez de equipaje\n
conociendo personajes suben duendes a babor\n
trazando el desnivel para llegar hasta "Rey"\n
tu tesoro de papel!!!\n
`; */
