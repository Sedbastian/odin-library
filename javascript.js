let biblioteca = [];

class Libro {
    constructor(titulo, autor, paginas, leido) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.leido = leido
    };
    info() {
        let estadoLeido;
        if (this.leido === true) {
            estadoLeido = "ya leído";
        } else if (this.leido === false) {
            estadoLeido = "todavía no leído";
        } else {
            estadoLeido = "";
        };
        return `"${this.titulo}" por ${this.autor}, ${this.paginas} páginas, ${estadoLeido}.`;
    };
};

function agregarLibro (nuevoLibro) {
    biblioteca.push (nuevoLibro);
};

const laRiojaIndigena = new Libro ("La Rioja Indigena", "Victor Hugo Robledo", 600, true);

const tresMosqueteros = new Libro ("Los Tres Mosqueteros", "Alejandro Dumas", 500, true);

const rayuela = new Libro ("Rayuela", "Julio Cortazar", 450, true);

const hijosDelCosmos = new Libro ("Hijos Del Cosmos", "Dionisio Aizcorbe", 300, false);

agregarLibro (laRiojaIndigena);
agregarLibro (tresMosqueteros);
agregarLibro (rayuela);
agregarLibro (hijosDelCosmos);

let cuerpi = document.querySelector("body");

for (let libro in biblioteca) {
    const fichaLibro = document.createElement("div");
    fichaLibro.textContent = biblioteca[libro].info();
    cuerpi.appendChild (fichaLibro);
};