
function getMenuItems(opcionMenu){
   if (opcionMenu!=="combos"){
        esconderTexto();
    }else{
       mostrarTexto();
    };
    
    if (opcionMenu !== "salsas"){
        let lista = "<ul style=\"display: flex; flex-wrap: wrap; justify-content: center;\">";
        
        
        for(let i = 0; i < menuItems[opcionMenu].length; i++){
            var obj= menuItems[opcionMenu][i];
            
            lista+= 
            `<li style="display: flex; width: 40%; height: 10rem; position: relative; padding-left: 110px;">
                <div style="position: absolute; top: 50%; left: 0; transform: translateY(-50%);"> 
                    <img src=${obj.imagen} height="100px" width="100px" style="border-radius: 50px;"/>
                </div>
                <div style="width: 75%; margin-left: 20px;">
                    <div style="display: flex; border-bottom: 2px dotted black; height: 50%; justify-content: space-between; align-items: center;">
                        <h1>${obj.title}</h1>
                        <p>$${obj.price}</p>
                    </div>
                    <p style="height: 50%; text-align: justify; top: 0; margin: 2.5px;">${obj.par}</p>
                </div>
            </li>`
        }
                            
        lista +="</ul>"
        
        var contenido = document.getElementById("allTheFood");
        contenido.innerHTML=lista;

    }else{
        let lista = "<ul style=\"display: flex; flex-direction: column; justify-content: center;\">";

        for(let i = 0; i < menuItems[opcionMenu].length; i++){
            var obj= menuItems[opcionMenu][i];
            
            lista+=
            `<li style="display: flex; flex-direction: column;">
                <p style=" text-align: justify; margin: 2.5px; font-size: 2rem; justify-content: center; align-items: center; padding: 1rem;">${obj.nombre}</p>
            </li>`
        }

        lista +="</ul>" 

        var contenido = document.getElementById("allTheFood");
        contenido.innerHTML=lista;
        
    }
        
}


var menuItems = {
    entradas:[
        {
            imagen:"/public/Imagen/aros.jpg",
            title:"Aros de cebolla",
            par:"Deliciosos aritos de cebolla, crujientes acompañados con la salsa de tu preferencia",
            price:4000
        },
        {
            imagen:"/public/Imagen/chicharron.jpg",
            title:"Chicharrones",
            par:"Trocitos de chicharron, acompañados piezas de maiz con la salsa de tu preferencia ",
            price:4000
        },
        {
            imagen:"/public/Imagen/papas1.jpg",
            title:"Papas a la Francesa",
            par:"Exquisitos bastoncitos de papas freidos,acompañados con la salsa de tu preferencia ",
            price:4000
        },
        {
            imagen:"/public/Imagen/papas2.jpg",
            title:"Papas Artesanales",
            par:"Deliciosas papas en casco, acompañados con la salsa de tu preferencia",
            price:4000
        },
        {
            imagen:"/public/Imagen/yuquitas.jpg",
            title:"Croquetas de Yuca",
            par:"Deliciosas tiras de Yuca freidas, acompañados con la salsa de tu preferencia",
            price:4000
        },
    ],
    combos:[{
        imagen:"/public/Imagen/opc1.jpg",
        title:`<span id="numeroAlitas">8</span>Piezas de Alitas`,
        par:"Bañadas en 1 salsa",
        price: 15900
        },
        {
            imagen:"/public/Imagen/opc2.jpg",
            title:`<span id="numeroAlitas">16</span>Piezas de Alitas`,
            par:"Bañadas en 2 salsas",
            price: 27900
            },
        {
            imagen:"/public/Imagen/opc3.jpg",
            title:`<span id="numeroAlitas">24</span>Piezas de Alitas`,
            par:"Bañadas en 3 salsas",
            price: 37900
            },
        {
            imagen:"/public/Imagen/opc5.jpg",
            title:`<span id="numeroAlitas">32</span>Piezas de Alitas`,
            par:"Bañadas en 4 salsas",
            price: 47900
            },        
    ],
    salsas:[
        {nombre: "Bbq Chowé"}, 
        {nombre: "Chipotle Dulce"}, 
        {nombre: "Bbq Dulce"},
        {nombre: "Miel Mostaza"}, 
        {nombre: "Teriyaki"}, 
        {nombre: "Búfalo Picante"}, 
        {nombre: "Especial Chowé"}],
    bebidas:[{
            imagen:"/public/Imagen/soda.jpg",
            title:"Gaseosa 400 ml",
            par:"Productos marca Postobón",
            price:2500
            },
            {
            imagen:"/public/Imagen/soda.jpg",
            title:"Gaseosa 1.5 L",
            par:"Productos marca Postobón",
            price:4000
            },
            {
            imagen:"/public/Imagen/soda.jpg",
            title:"Gaseosa 3.125 L",
            par:"Productos marca Postobón",
            price:6000
            },]
};

//LLAMADA A LA FUNCION PARA MOSTRAR CONTENIDO

getMenuItems("combos");

// AGREGANDO LA CLASE ACTIVA AL BOTON PRESIONADO 

let botonContenedor = document.getElementById("opcionesMenuContenedor");
let botones = botonContenedor.getElementsByClassName("Menu-Option")

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){

        let posicionActual = document.getElementsByClassName("activo");
        
        posicionActual[0].className = posicionActual[0].className.replace("activo", "");
        this.className += " activo";        
    });
} 


function esconderTexto(){
    document.getElementById("esconderTexto").style.visibility="hidden";
    document.getElementById("esconderTexto").style.height="0";
};

function mostrarTexto(){
    document.getElementById("esconderTexto").style.visibility="visible"; 
    document.getElementById("esconderTexto").style.height="auto";
}