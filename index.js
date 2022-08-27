let MyCart= JSON.parse(localStorage.getItem("ProCart")) || [];
let sum=0;


    let Data2=[{image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313381151_RLLZ_1_1800x1800.jpg?v=1661238774",
    name:"MOCHINO LOGO LEATHER SNEAKER",rate:"309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-sneakers/products/bf-105562489-19wo?id=6939513028740"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1452115305_RLLZ_1_1800x1800.jpg?v=1661238347",
    name:"THIA MARIN DRAPPED COCTAIL DRESS",rate:"309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-clothing-dresses-cocktail-party-dresses/products/bf-105561083-3z47?id=6939505361028"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313507843_RLLZ_1_1800x1800.jpg?v=1661238755",
    name:"JIMMY CHOOD DIAMOND LIGHT MAXI/F LEATHER SNEAKER",rate:"309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-sneakers/products/bf-105561472-srnh?id=6939512602756"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312401597_RLLZ_1_1800x1800.jpg?v=1661455242",
    name:"BOTTEGA VENNETA SPEEDSTER LEATHER & MESH SNEAKER ",rate:"309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/men-shoes-sneakers/products/bf-105567862-wgkd?id=6939511586948"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313407285_RLLZ_1_1800x1800.jpg?v=1661238661",
    name:"VALENTINO ROCKSTUD CAGED LEATHER ANKLE",rate:"309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-sandals/products/bf-105577535-4ncw?id=6939510767748"}];
    let Data=[{image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411212007_RLLZ_2_large.jpg?v=1661173093",
    name:"DRESSES",link1:"https://www.bluefly.com/collections/women-clothing-dresses"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313382839_RLLZ_2_large.jpg?v=1661153030",
    name:"PUMPS AND HILLS",link1:"https://www.bluefly.com/collections/women-shoes-pumps-heels"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/81mks7hegzl._ul1500_19fda006-368e-4686-9b3f-9e12d3befea6_large.jpg?v=1654138030",
    name:"HANDBAG",link1:"https://www.bluefly.com/collections/women-handbags"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/CatStyleDior-2-S45SQ-2_large.jpg?v=1609777433",
    name:"SUNGLASSES",link1:"https://www.bluefly.com/collections/women-accessories-sunglasses"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313807526_RLLZ_2_large.jpg?v=1661502004",
    name:"WOMENS SNEAKER",link1:"https://www.bluefly.com/collections/women-shoes-sneakers"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1991687_large.jpg?v=1658878048",
    name:"MENS SNEAKER",link1:"https://www.bluefly.com/collections/men-shoes-sneakers"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010274815_RLLZ_2_large.jpg?v=1659106793",
    name:"MENS T-SHIRTS",link1:"https://www.bluefly.com/collections/men-clothing-t-shirts"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411578302_RLLZ_2_large.jpg?v=1661423874",
    name:"WOMENS TOP",link1:"https://www.bluefly.com/collections/women-clothing-tops"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/noutH4ms3oVDrEiWN5wgtAevJT1SlmGy-25_large.jpg?v=1661228230",
    name:"WOMENS DENIM",link1:"https://www.bluefly.com/collections/women-clothing-jeans-denim"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/60e8559a20216_large.jpg?v=1661356176",
    name:"JEWELRY",link1:"https://www.bluefly.com/collections/women-jewelry"}];


    let Data3=[{image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311726855_RLLZ_1_1800x1800.jpg?v=1641646938",
    name:"MOCHINO LOGO LEATHER SNEAKER",rate:"$309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-boots-over-the-knee/products/bf-100681335-josn?id=5114452508804"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_1800x1800.jpg?v=1607399172",
    name:"THIA MARIN DRAPPED COCTAIL DRESS",rate:"$309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-clothing-coats-jackets-down-puffer/products/bf-100740355-4ugo?id=5117764370564"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1885926_720x.jpg?v=1637852303",
    name:"JIMMY CHOOD DIAMOND LIGHT MAXI/F LEATHER SNEAKER",rate:"$309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-handbags-crossbody-bags/products/bf-103229952-2gup?id=6658707652740"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784189_RLLZ_1_1800x1800.jpg?v=1641397915",
    name:"BOTTEGA VENNETA SPEEDSTER LEATHER & MESH SNEAKER ",rate:"$309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-boots-over-the-knee/products/bf-102335113-rz6o?id=6606544765060"},
    {image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313407285_RLLZ_1_1800x1800.jpg?v=1661238661",
    name:"VALENTINO ROCKSTUD CAGED LEATHER ANKLE",rate:"$309.99",saving:"Save 24%",link1:"https://www.bluefly.com/collections/women-shoes-sneakers/products/bf-102309440-i3y2?id=6604543852676"}];


        Data.forEach(function(ele){
        let box=document.createElement("div");
        box.setAttribute("id","boximg");
        box.addEventListener("click",redirected);
        let Image=document.createElement("img");
        Image.src=ele.image;
        let Name=document.createElement("p");
        Name.innerText=ele.name;
        
        box.append(Image,Name);
        document.getElementById("shopbycategory").append(box);

        function redirected(linkbag){
            window.location.href=ele.link1;
        }
    })

    Data2.forEach(function(ele,index){
        let box=document.createElement("div");
        box.setAttribute("id","NewArrpro");
        let Image=document.createElement("img");
        Image.src=ele.image;
        Image.addEventListener("click",redirected);
        let Name=document.createElement("p");
        Name.innerText=ele.name;
        let Rate=document.createElement("p");
        Rate.innerText=ele.rate;
        let Saving=document.createElement("span");
        Saving.innerText=ele.saving;
        Saving.style.color="red";
        let Cartbtn=document.createElement("button");
        Cartbtn.innerText="Add to Cart";
        Cartbtn.addEventListener("click",function(){
            AddToCart(ele,index);
            document.getElementById("cartboxa").style.display="block";
        })
        Cartbtn.setAttribute("id","cartbtn");
        box.append(Image,Name,Rate,Saving,Cartbtn);
        document.getElementById("NewArr").append(box);

        for(let i=0;i<MyCart.length;i++){
            sum+=Number(ele.rate);
        }

        document.getElementById("amount").innerText=sum;
    })
    Data3.forEach(function(ele){
        let box=document.createElement("div");
        box.style.cursor="pointer";
        box.addEventListener("click",redirected);
        let Image=document.createElement("img");
        Image.src=ele.image;
        let Name=document.createElement("p");
        Name.innerText=ele.name;
        let Rate=document.createElement("p");
        Rate.innerText=ele.rate;
        let Saving=document.createElement("span");
        Saving.innerText=ele.saving;
        Saving.style.color="red";
        let Cartbtn=document.createElement("button");
        Cartbtn.innerText="Add to Cart";
        Cartbtn.addEventListener("click",function(){
            AddToCart(ele,index);
            document.getElementById("cartboxa").style.display="block";
        })
        Cartbtn.setAttribute("id","cartbtn");
        box.append(Image,Name,Rate,Saving,Cartbtn);
        document.getElementById("trending").append(box);

        function redirected(linkbag){
            window.location.href=ele.link1;
        }
    })

    function AddToCart(ele,index){
        MyCart.push(ele);
        localStorage.setItem("ProCart",JSON.stringify(MyCart));
    }

    document.getElementById("hide").onclick=function(){
        document.getElementById("cartboxa").style.display="none";
    } 

    function redirected(linkbag){
        window.location.href=ele.link1;
    }
    function Showcart(){
        document.getElementById("cartboxa").style.display="block";
    }

    