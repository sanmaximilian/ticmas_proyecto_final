console.log("Listo JS")
console.log("Hacer que el javascript oculte el form cuando se de enviar y aparezca un mensaje")

function agregGreet(){

    var demo1 = document.createElement("h1");
    var placing = document.createTextNode("The Heading One is Creaated");
    demo1.appendChild(placing);
}

function ocultaForm(){
    let mensaje= "Gracias por enviar sus datos, en breve sera contactado"
    
    document.getElementById("contactoR").style.display="none"
    // document.getElementById("contacT").
    
    // document.createElement("h1")
    
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("");
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    // var currentDiv = document.getElementById("contacT").innerHTML("Gracias");
   document.getElementById("contacT").innerHTML="Gracias por dejar sus datos, en breve me contactare!!!";
    // currentDiv.innerText("<h1>Gracias</h1>") Agregar para que cree un h1 con el texto de gracias por su contacto
    // document.body.insertBefore(newDiv, currentDiv);
    



    console.log("Aca esto deberia de ocultar el form poner algun mensaje de gracias y usar el nombre del que lo lleno con un gracias")
}