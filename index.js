// console.log("Listo JS")
// console.log("Hacer que el javascript oculte el form cuando se de enviar y aparezca un mensaje")

function agregGreet(){

    var demo1 = document.createElement("h1");
    var placing = document.createTextNode("The Heading One is Creaated");
    demo1.appendChild(placing);
}

function ocultaForm(){
    let nombre=document.getElementById('nombre').value
    // console.log(nombre)
    let mensaje= `Gracias ${nombre.toUpperCase()} por enviar sus datos, en breve sera contactado`
    
    document.getElementById("contactoR").style.display="none"
    // document.getElementById("contacT").
    
    // document.createElement("h1")
    // añade el elemento creado y su contenido al DOM
    
    // agregar la variable nombre tomada del FORM
//    document.getElementById("contacT").innerHTML="Gracias por dejar sus datos, en breve me contactare!!!";
   document.getElementById("contacT").innerHTML=mensaje;
    // currentDiv.innerText="<h1>Gracias</h1>" Agregar para que cree un h1 con el texto de gracias por su contacto
    
    
    // document.body.style.backgroundColor = "red";
    
    document.getElementById("expre").style.color="darkred"
    const exp = document.getElementsByClassName("expre")
   


    // console.log("Aca esto deberia de ocultar el form poner algun mensaje de gracias y usar el nombre del que lo lleno con un gracias")
}


/* Aca levantamos el json lo parseamos y modificamos los datos hardcodeados*/

function leeJson(){
    data = fetch('./data.json')
        .then((response) => response.json())
        // .then((json) => console.log(json));
        .then((json=> cl(json.data.nombre) )) 
        
}


leeJson()

function cl(mensaje){
    console.log(mensaje)
}