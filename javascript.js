class Book {
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

const laRiojaIndigena = new Book ("La Rioja Indigena", "Victor Hugo Robledo", 600, true);

const tresMosqueteros = new Book ("Los Tres Mosqueteros", "Alejandro Dumas", 500, true);

const rayuela = new Book ("Rayuela", "Julio Cortazar", 450, true);

const hijosDelCosmos = new Book ("Hijos Del Cosmos", "Dionisio Aizcorbe", 300, false);

console.log(laRiojaIndigena);
console.log(laRiojaIndigena.info());

console.log(tresMosqueteros);
console.log(tresMosqueteros.info());

console.log(rayuela);
console.log(rayuela.info());

console.log(hijosDelCosmos);
console.log(hijosDelCosmos.info());