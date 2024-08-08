document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

function copiarTexto() {
    // Selecciona el elemento que contiene el texto
    const texto = document.getElementById('texto-copiar').innerText;

    // Crea un elemento temporal para copiar el texto
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);

    // Selecciona el texto del área de texto
    textarea.select();
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(textarea);

    alert('Texto copiado al portapapeles!');
}