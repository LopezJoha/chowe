function changeButtonClasses(buttonName){
    let botonContenedor = document.getElementById("opcionesMenuContenedor");
    let botones = botonContenedor.getElementsByClassName("Menu-Option");
    
    for(let i = 0; i < botones.length; i++){
        if(botones[i].id !== buttonName){
            botones[i].classList.remove('activo');
        } else {
            botones[i].classList.add('activo');
        }     
    } 
};

function getMenuItems(opcionMenu){
    changeButtonClasses(opcionMenu);

   if (opcionMenu !== "combos"){
        esconderTexto();
    }else{
       mostrarTexto();
    };

    let lista = '';
    
    if (opcionMenu !== "salsas"){
        lista += "<ul class=\"food-List\">";
                
        for(let i = 0; i < menuItems[opcionMenu].length; i++){
            var obj= menuItems[opcionMenu][i];
            
            lista+= 
            `<li class="food-List_element">
                <div class="List-element" > 
                    <img src=${obj.imagen} class="img-list-element" />
                </div>

                <div class="List-element-one">
                    <div class="List-sub-element-one">
                        <h1 class="sub-menu">${obj.title}</h1>
                        <p class="parrafo-menu">$${obj.price}</p>
                    </div>
                    <p class="parrafo-menu List-element-two">${obj.par}</p>
                </div>
            </li>`
        }
    }else{
        lista += "<ul style=\"display: flex; flex-direction: column; justify-content: center;\">";

        for(let i = 0; i < menuItems[opcionMenu].length; i++){
            var obj= menuItems[opcionMenu][i];
            
            lista+=
            `<li class="food-List_else">
                <p class="parrafo_else"> ${obj.nombre} </p>
            </li>`
        }
        
    }
    lista +="</ul>"
    var contenido = document.getElementById("allTheFood");
    contenido.innerHTML=lista;  
        
}


var menuItems = {
    entradas:[
        {
        imagen:"/public/Small/smallAros.jpg",
        title:"Aros de cebolla",
        par:"Deliciosos aritos de cebolla crujientes.",
        price:4000
        },
        {
        imagen:"/public/Small/smallChicharron.jpg",
        title:"Chicharrones",
        par:"Trocitos de chicharron.",
        price:4000
        },
        {
        imagen:"/public/Small/smallPapas2.jpg",
        title:"Papas a la Francesa",
        par:"Bastoncitos de papas freidos.",
        price:4000
        },
        {
        imagen:"/public/Small/smallPapas3.jpg",
        title:"Papas Artesanales",
        par:"Deliciosas papas en cascos.",
        price:4000
        },
        {
        imagen:"/public/Small/smallYuquitas.jpg",
        title:"Croquetas de Yuca",
        par:"Deliciosas tiras de Yuca freidas.",
        price:4000
        },
        {
        imagen:"/public/Small/smallYuquitas.jpg",
        title:"Croquetas de Yuca",
        par:"Deliciosas tiras de Yuca freidas.",
        price:4000
        },
    ],
    combos:[{
        imagen:"/public/Small/small1.jpg",
        title:`<span id="numeroAlitas">08</span> Piezas <span class="alitas">de alitas </span>`,
        par:"Bañadas en 1 salsa",
        price: 15900
        },
        {
        imagen:"/public/Small/small2.jpg",
        title:`<span id="numeroAlitas">16</span> Piezas <span class="alitas">de alitas</span>`,
        par:"Bañadas en 2 salsas", 
        price: 27900
            },
        {
        imagen:"/public/Small/small3.jpg",
        title:`<span id="numeroAlitas">24</span> Piezas <span class="alitas">de alitas</span>`,
        par:"Bañadas en 3 salsas",
        price: 37900
        },
        {
        imagen:"/public/Small/small4.jpg",
        title:`<span id="numeroAlitas">32</span> Piezas <span class="alitas">de alitas</span>`,
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
    bebidas:[
        {
        imagen:"/public/Small/smallSoda.jpg",
        title:"Gaseosa 400 ml",
        par:"Productos marca Postobón",
        price:2500
        },
        {
        imagen:"/public/Small/smallSoda.jpg",
        title:"Gaseosa 1.5 L",
        par:"Productos marca Postobón",
        price:4000
        },
        {
        imagen:"/public/Small/smallSoda.jpg",
        title:"Gaseosa 3.125 L",
        par:"Productos marca Postobón",
        price:6000
        },
        {
        imagen:"/public/Small/smallSoda.jpg",
        title:"Gaseosa 3.125 L",
        par:"Productos marca Postobón",
        price:6000
        },
        ]
};

function esconderTexto(){
    document.getElementById("esconderTexto").style.visibility="hidden";
    document.getElementById("esconderTexto").style.height="0";
};

function mostrarTexto(){
    document.getElementById("esconderTexto").style.visibility="visible"; 
    document.getElementById("esconderTexto").style.height="auto";
}


