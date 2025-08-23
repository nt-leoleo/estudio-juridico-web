const texto = document.getElementById("copyMe");

texto.addEventListener("click", () => {
const contenido = texto.innerText;

if (navigator.clipboard && navigator.clipboard.writeText) {
    // Método moderno (soportado en la mayoría)
    navigator.clipboard.writeText(contenido)
    .then(() => alert("Texto copiado ✅"))
    .catch(err => console.error("Error al copiar: ", err));
} else {
    // Fallback para celulares o navegadores viejos
    const inputOculto = document.createElement("textarea");
    inputOculto.value = contenido;
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand("copy");
    document.body.removeChild(inputOculto);
    alert("Texto copiado ✅");
}
});