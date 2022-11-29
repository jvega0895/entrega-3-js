const pizzas = [
  {
    nombre: "Pizza de Muzzarella",
    id: 1,
    ingredientes: [" Sus ingredientes son", "muzzarella","oregano","aceitunas"],
    precio: 750,
    imagen: `<img src="./pizzas/pizza_muzza.jpg"/>`

},
{
  nombre: "Pizza de Cebolla",
  id:2,
  ingredientes: [ " Sus ingredientes son", "muzzarella", "cebolla"],
  precio:800,
  imagen: `<img src="./pizzas/pizza_fuggazzeta.jpg"/>`
},
{
  nombre: "Pizza de 4 quesos",
  id:3,
  ingredientes: [ " Sus ingredientes son","queso Fontina", "queso Muzzarella", "queso Azul", "queso Parmesano"],
  precio:1100,
  imagen: `<img src="./pizzas/pizza_4quesos.jpg"/>`
},
{
  nombre:"Pizza  de Anchoas",
  id:4,
  ingredientes: [ " Sus ingredientes son","Muzzarella", "tomate", "morron", "anchoas"],
  precio:1150,
  imagen: `<img src="./pizzas/pizza_anchoas.jpg"/>`
},
{
  nombre: "Pizza de Panceta",
  id:5,
  ingredientes: ["Sus ingredientes son:","queso", "panceta", "tomate"],
  precio: 1320,
  imagen: `<img src="./pizzas/pizza_panceta.jpg"/>`
},
{
  nombre: "Pizza Bomba",
  id: 6,
  ingredientes: ["Sus ingredientes son:", "Muzzarella","Cebolla","Jamon","Morron","Panceta","Palmito","Anchoas", "Aceitunas"],
  precio: 2000,
  imagen: `<img src="./pizzas/pizza_bomba.jpg"/>`
}]

const resultContainer = document.getElementById("result__container")
const form = document.getElementById("form")
const input = document.querySelector(".input__number")

const searchPizza = value => pizzas.find(pizza => pizza.id === value)

const mostrarErrorVacio = () => {
  resultContainer.innerHTML = `
  <style>
    .card__container{
     display:flex;
    }
    </style>

    <div class="card__container">
         <img src="./mensajes/menu.png" alt="Icono__menu">
         <h2 class="msj-error">Por favor ingresa un numero, para ver nuestras pizzas del menu.</h2>
    </div>
  `
}
const renderPizza = (pizza) =>{
  if(!pizza){
    resultContainer.innerHTML = `
    <style>
    .card__container{
     display:flex;
    }
    </style>

    <div class="card__container">
         <img src="./mensajes/icono error.png" alt="Icono__error">
         <h2 class="msj-error">El valor ingresado no pertenece a una pizza del menu</h2>
    </div>`
  }else{
    resultContainer.innerHTML = `
    <style>
    .card__container{
     display:flex;
    }
    </style>
    
    
    <div class="card__container">
          <h2 class="pizza-nombre">${pizza.nombre}</h2>
          <h3>${pizza.imagen}</h3>
          <h4 class="pizza-precio"> Precio: $${pizza.precio}</h4>   
        </div>
    `
  }

}

const resultadoBusqueda = (e) => {
  e.preventDefault();
  const searchedValue = input.value;
  if(!searchedValue){
    mostrarErrorVacio();
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue))
  renderPizza(searchedPizza)
}

const init = () =>{
form.addEventListener("submit", resultadoBusqueda)
} 
init()

function guardarLocalStorager () {
  localStorage.setItem("Busqueda", JSON.stringify(renderPizza))
}