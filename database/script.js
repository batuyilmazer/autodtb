function brandSearchFunc(){
    document.getElementById("brandSearchButton").innerHTML = "clicked";
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