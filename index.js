const nombre = "Gerardo"
const apellido = "Beltran"
const nombreCompleto = {
    nombre,
    apellido
}

//sessionStorage.setItem("objetoNombre",JSON.stringify(nombreCompleto))
//localStorage.setItem("objetoNombre",JSON.stringify(nombreCompleto))
nombreParse = JSON.stringify(nombreCompleto)

//document.cookie = `objetoNombre=${nombreParse}; expires=` + new Date(2022,7,24,1910)