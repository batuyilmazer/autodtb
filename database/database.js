const brands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
]
listBrandItem(brands);

//TODO: Find a better solution to display "Not Found" error text.
var hasCreatedNotFoundLi;
//Search Button onclick
function brandSearchFunc(){
    var hasFoundMatches=false;
    var ul = document.getElementById("brandList");

    if(hasCreatedNotFoundLi==undefined){
        let notFoundLi = document.createElement("li");
        notFoundLi.appendChild(document.createTextNode("Not Found"));
        notFoundLi.setAttribute("id","notFoundLi");
        ul.appendChild(notFoundLi);
        hasCreatedNotFoundLi=true;
    }

    let brandSearchInput = document.getElementById("brandSearchInput").value;
    input = brandSearchInput.toLowerCase();
    let brandListItem = document.getElementsByClassName('brandListItem');

    for(i = 0; i < brandListItem.length ; i++){
        if(!brandListItem[i].innerHTML.toLowerCase().includes(input)){
            brandListItem[i].style.display="none";
        }
        else {
            brandListItem[i].style.display="list-item";
            hasFoundMatches=true;
        }
    }
    if(!hasFoundMatches){
        notFoundLi.style.display="list-item";
    } else {
        notFoundLi.style.display="none";
    }
}


// Create brandListItem
function listBrandItem(brand="unnamed brand"){
    var ul = document.getElementById("brandList");
    if(typeof(brand)=="object"){
        for (let i=0; i < brand.length; i++){
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(brand[i]));
            li.setAttribute("onclick","onBrandListItemClick()");
            ul.appendChild(li);
            li.setAttribute("class", "brandListItem");
        }
    }
    else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(brand));
        li.setAttribute("onclick","onBrandListItemClick()");
        ul.appendChild(li);
        li.setAttribute("class", "brandListItem");
    }
}

function onBrandListItemClick(){
    var rightpane = document.getElementById("rightpane");
    let foo = document.createElement("p");
    foo.appendChild(document.createTextNode("Clicked"));
    rightpane.appendChild(foo);
}