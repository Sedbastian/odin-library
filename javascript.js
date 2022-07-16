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
    cambiarEstadoLeido() {
        this.leido = !(this.leido);
    };
};

const laRiojaIndigena = new Libro ("La Rioja Indigena", "Victor Hugo Robledo", 600, true);

const tresMosqueteros = new Libro ("Los Tres Mosqueteros", "Alejandro Dumas", 500, true);

const rayuela = new Libro ("Rayuela", "Julio Cortazar", 450, true);

const hijosDelCosmos = new Libro ("Hijos Del Cosmos", "Dionisio Aizcorbe", 300, false);

biblioteca.push(laRiojaIndigena);
biblioteca.push(tresMosqueteros);
biblioteca.push(rayuela);
biblioteca.push(hijosDelCosmos);

let cuerpi = document.querySelector("body");

function mostrarBiblioteca () {
    let fichas = document.querySelectorAll(".ficha");
    fichas.forEach(ficha => {
        ficha.remove();
    });

    for (let libro in biblioteca) {
        function removerLibroFijo () {
            biblioteca.splice(botonRemover.getAttribute("data-indice"), 1);
            let fichas = document.querySelectorAll(".ficha");
            fichas.forEach(ficha => {
                ficha.remove();
            });
            mostrarBiblioteca();
        };
        
        function cambiarEstadoLeido () {
            (biblioteca[botonCambiarLeido.getAttribute("data-indice")]).cambiarEstadoLeido();
            mostrarBiblioteca();
        };

        const fichaLibro = document.createElement("div");
        fichaLibro.setAttribute("class", "ficha");
        const divInfo = document.createElement("div");
        divInfo.setAttribute("class", "divInfo");
        divInfo.textContent = biblioteca[libro].info();
        fichaLibro.appendChild(divInfo);
        
        const botonRemover = document.createElement("button");
        botonRemover.setAttribute("class", "botonRemover");
        botonRemover.setAttribute("data-indice", `${libro}`);
        botonRemover.textContent = "Remover Libro";
        botonRemover.addEventListener("click", removerLibroFijo);
        fichaLibro.appendChild(botonRemover);

        const botonCambiarLeido = document.createElement("button");
        botonCambiarLeido.setAttribute("class", "botonCambiarLeido");
        botonCambiarLeido.setAttribute("data-indice", `${libro}`);
        botonCambiarLeido.textContent = "Cambiar Estado Leido";
        botonCambiarLeido.addEventListener("click", cambiarEstadoLeido);
        fichaLibro.appendChild(botonCambiarLeido);

        cuerpi.appendChild(fichaLibro);
    };
};

mostrarBiblioteca();

function formularioAgregarLibro () {
    function agregarNuevoLibro () {
        biblioteca.push(new Libro (`${inputTitulo.value}`, `${inputAutore.value}`, `${inputPaginas.value}`, inputLeido.checked));
        cuerpi.removeChild(divFormulario);
        mostrarBiblioteca();
    };
    
    function cancelarFormulario () {
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
    botonAgregar.setAttribute("class", "botonFormulario");
    botonAgregar.textContent = "Agregar Libro";
    divFormulario.appendChild(botonAgregar);

    const botonCancelar = document.createElement("button");
    botonCancelar.addEventListener("click", cancelarFormulario);
    botonCancelar.setAttribute("class", "botonFormulario");
    botonCancelar.textContent = "Cancelar";
    divFormulario.appendChild(botonCancelar);

    cuerpi.appendChild(divFormulario);
};

const botonAgregarLibro = document.querySelector(".agregarLibro");
botonAgregarLibro.addEventListener("click", formularioAgregarLibro);