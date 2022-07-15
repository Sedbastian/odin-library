let biblioteca = [];

class Libro {
    constructor(titulo, autore, paginas, leido) {
        this.titulo = titulo
        this.autore = autore
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
        return `"${this.titulo}" por ${this.autore}, ${this.paginas} páginas, ${estadoLeido}.`;
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

function mostrarBibliotecaFija () {
    for (let libro in biblioteca) {
        function removerLibroFijo () {
            biblioteca.splice(botonRemover.getAttribute("data-indice"), 1);
            let fichas = document.querySelectorAll(".ficha");
            fichas.forEach(ficha => {
                ficha.remove();
            });
            mostrarBibliotecaFija();
        };
        
        
        const fichaLibro = document.createElement("div");
        fichaLibro.setAttribute("class", "ficha");
        fichaLibro.textContent = biblioteca[libro].info();
        
        const botonRemover = document.createElement("button");
        botonRemover.setAttribute("class", "botonRemover");
        botonRemover.setAttribute("data-indice", `${libro}`);
        botonRemover.addEventListener("click", removerLibroFijo);
        fichaLibro.appendChild(botonRemover);

        cuerpi.appendChild(fichaLibro);
    };
};

mostrarBibliotecaFija();

function formularioAgregarLibro () {
    function agregarNuevoLibro () {
        function removerLibroAgregado () {
            biblioteca.splice(botonRemover.getAttribute("data-indice"), 1);
            let fichas = document.querySelectorAll(".ficha");
            fichas.forEach(ficha => {
                ficha.remove();
            });
            mostrarBibliotecaFija();
        };

        biblioteca.push(new Libro (`${inputTitulo.value}`, `${inputAutore.value}`, `${inputPaginas.value}`, inputLeido.checked));
        const nuevaFicha = document.createElement("div");
        nuevaFicha.setAttribute("class", "ficha");
        nuevaFicha.textContent = biblioteca[biblioteca.length-1].info();

        const botonRemover = document.createElement("button");
        botonRemover.setAttribute("class", "botonRemover");
        botonRemover.setAttribute("data-indice", `${biblioteca.length-1}`);
        botonRemover.addEventListener("click", removerLibroAgregado);
        nuevaFicha.appendChild(botonRemover);

        cuerpi.appendChild(nuevaFicha);
        cuerpi.removeChild(divFormulario);
};
    
    const divFormulario = document.createElement("div");
    divFormulario.classList.add("divFormulario");

    const labelTitulo =  document.createElement("label");
    labelTitulo.setAttribute("for", "titulo");
    labelTitulo.textContent = "Titulo:";
    divFormulario.appendChild(labelTitulo);
   
    const inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("type", "text");
    inputTitulo.setAttribute("id", "titulo");
    divFormulario.appendChild(inputTitulo);
    
    const labelAutore = document.createElement("label");
    labelAutore.setAttribute("for", "autore");
    labelAutore.textContent = "Autor(a):";
    divFormulario.appendChild(labelAutore);

    const inputAutore = document.createElement("input");
    inputAutore.setAttribute("type", "text");
    inputAutore.setAttribute("id", "autore");
    divFormulario.appendChild(inputAutore);

    const labelPaginas = document.createElement("label");
    labelPaginas.setAttribute("for", "paginas");
    labelPaginas.textContent = "Paginas:";
    divFormulario.appendChild(labelPaginas);

    const inputPaginas = document.createElement("input");
    inputPaginas.setAttribute("type", "number");
    inputPaginas.setAttribute("id", "paginas");
    inputPaginas.setAttribute("min", "1");
    divFormulario.appendChild(inputPaginas);

    const labelLeido = document.createElement("label");
    labelLeido.setAttribute("for", "leido");
    labelLeido.textContent = "¿Leido?";
    divFormulario.appendChild(labelLeido);

    const inputLeido = document.createElement("input");
    inputLeido.setAttribute("type", "checkbox");
    inputLeido.setAttribute("id", "leido");
    divFormulario.appendChild(inputLeido);

    const botonAgregar = document.createElement("button");
    botonAgregar.addEventListener("click", agregarNuevoLibro);
    botonAgregar.textContent = "Agregar Libro";
    divFormulario.appendChild(botonAgregar);

    cuerpi.appendChild(divFormulario);
};

const botonAgregarLibro = document.querySelector(".agregarLibro");
botonAgregarLibro.addEventListener("click", formularioAgregarLibro);