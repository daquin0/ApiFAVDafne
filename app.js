//import { request } from "http";
const btnAgregar = document.getElementById("btnAgregar").addEventListener("click", (e) => {
  var xhr= new XMLHttpRequest();
  let nombre =(document.getElementById("txtNombre").value);
  let ID = parseInt(document.getElementById("txtID").value);
  let cantidad = parseInt(document.getElementById("txtCantidad").value);
  let costo = parseInt(document.getElementById("txtCosto").value);
  let color =(document.getElementById("txtColor").value);

  xhr.open("POST","http://localhost:3005/usuarios/",true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.onreadystatechange=function(){
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
    let divDetails = document.getElementById("details");
    details.innerHTML +=`
    <div>
      <p><strong>ID: ${this.response} </p>
    </div>`;
    }
  }
  xhr.send("nombre=" + nombre + "&id=" + ID + "&cantidad=" + cantidad + "&costo=" + costo + "&color=" + color);
});

const btnLeer = document.getElementById("btnConsultar");
btnLeer.addEventListener("click", (e) => {

var request= new XMLHttpRequest()
request.open("GET", "http://localhost:3005/usuarios/", true)
request.onload = function() {
    let details = document.getElementById("details");
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status <400){
        details.innerHTML +="<div><p>" + this.response + "</p></div>"
    }else{
        console.log("ERROR")
        details.innerHTML += "Error en la llamada a la API";
    }
}
request.send()

});

/*const btnEliminar = document.getElementById("btnDelete").addEventListener("click", (e) => {
  var xhrr= new XMLHttpRequest();
  let ID = parseInt(document.getElementById("txtID").value);

  xhrr.open("DELET","http://localhost:3005/usuarios/",true);
  xhrr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhrr.onreadystatechange=function(){
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
    let divDetails = document.getElementById("details");
    details.innerHTML +=`
    <div>
      <p><strong>ID: ${this.response} </p>
    </div>`;
    }
  }
  xhrr.send("id=" + ID);
});*/
