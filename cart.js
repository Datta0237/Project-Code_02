let CartData=JSON.parse(localStorage.getItem("ProCart")) || [];

displayT(CartData);

function displayT(CartData){
    document.getElementById("cartproducts").innerHTML="";
    CartData.forEach(function(ele,index){
        let box=document.createElement("div");
        box.setAttribute("id","CartBox");
        let Image=document.createElement("img");
        Image.src=ele.image;
        let Name=document.createElement("p");
        Name.innerText=ele.name;
        let Rate=document.createElement("p");
        Rate.innerText=ele.rate;
        
        box.append(Image,Name,Rate);
        document.getElementById("cartproducts").append(box);
        
    })
}

