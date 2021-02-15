var x = 0;
function myFunction2() {
    document.getElementById("scrolled").innerHTML = x += 1;
}

var getData = function () {

    let name = document.querySelector("#firtsname").value;
    let lastName = document.querySelector("#lastname").value;
    let age = document.querySelector("#age").value;

    const person = {};
    person["name"] = name;
    person["lastName"] = lastName;
    person["age"] = age;

    //const nameM = [];
    const primeraLetraMayuscula = (cadena) => cadena[0].toUpperCase().concat(cadena.substring(1, cadena.length));

    for (const key in person) {
        person[key] = primeraLetraMayuscula(person[key]);
    }

    console.log(person);
    document.querySelector("#firtsname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#age").value = "";

    var node = document.createElement("OL");
    var textnode = document.createTextNode(`${person.name} ${person.lastName}, tengo ${person.age} años`);
    node.appendChild(textnode);
    document.getElementById("lista1").appendChild(node);
}
/*function myFunction() {
    var list = document.getElementById("lista1");
    list.removeChild(list.childNodes[10]);
}*/

var sendData = function () {
    const car = {};
    car["marca"] = document.querySelector("#marca").value;
    car["color"] = document.querySelector("#color").value;
    car["año"] = document.querySelector("#año").value;
    car["km"] = document.querySelector("#km").value;
    car["observaciones"] = document.querySelector("#observaciones").value;

    car["dueño"] = {
        "nombre": document.querySelector("#nombre").value,
        "apellido": document.querySelector("#apellido").value
    };
    car["contacto"] = {
        "lugar": document.querySelector("#lugar").value,
        "telefono": document.querySelector("#telefono").value
    };
    console.log(car);

    /*const primeraLetraMayuscula = (cadena) => cadena[0].toUpperCase().concat(cadena.substring(1, cadena.length));

    for (const key in car) {
        car[key] = primeraLetraMayuscula(car[key]);
    }
    console.log(car);*/

let formInformation = document.querySelectorAll(".information");

for (let i = 0; i < formInformation.length; i++) {

        formInformation[i].value= "";
}
    var node1 = document.createElement("LI");
    var textnode1 = document.createTextNode(`Vendo ${car.marca} de color ${car.color} del año ${car.año}, 
   tiene ${car.km} km. ${car.observaciones}. Mi nombre es ${car.dueño.nombre} ${car.dueño.apellido}, el coche está en  
    ${car.contacto.lugar}, si quieres más información puedes contactar en el ${car.contacto.telefono}`);
    node1.appendChild(textnode1);
    document.getElementById("lista2").appendChild(node1);
}
function deleteList() {
    var eliminarLista = document.querySelector("#lista2");
     while (eliminarLista.firstChild) {
        eliminarLista.removeChild(eliminarLista.firstChild);
    }
}

