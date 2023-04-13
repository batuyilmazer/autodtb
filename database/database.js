var brands = ["BMW","Mercedes","Audi","Volkswagen","Porsche","Ford","Chevrolet","Dodge"];
listBrandItem(brands);

//Search Button onclick
function brandSearchFunc(){
    var ul = document.getElementById("brandList");
    let brandSearchInput = document.getElementById("brandSearchInput").value;
    input = brandSearchInput.toLowerCase();
    let brandListItem = document.getElementsByClassName('brandListItem');
    for(i = 0; i < brandListItem.length ; i++){
        if(!brandListItem[i].innerHTML.toLowerCase().includes(input)){
            brandListItem[i].style.display="none";
        }
        else {
            brandListItem[i].style.display="list-item";
        }
    }
}

// Create brandListItem
function listBrandItem(brand="unnamed brand"){
    var ul = document.getElementById("brandList");
    if(typeof(brand)=="object"){
        for (let i=0; i < brand.length; i++){
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(brand[i]));
            ul.appendChild(li);
            li.setAttribute("class", "brandListItem");
        }
    }
    else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(brand));
        ul.appendChild(li);
        li.setAttribute("class", "brandListItem");
    }
}