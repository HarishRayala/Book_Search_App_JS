// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import nav from "/components/navbar.js";

document.getElementById("navbar").innerHTML = nav();

document.getElementById("search_input").addEventListener("keypress", searchNews);
document.querySelector("#in").addEventListener("click", function(){
    selectCon("in")
})
document.querySelector("#ch").addEventListener("click", function(){
    selectCon("ch")
})
document.querySelector("#us").addEventListener("click", function(){
    selectCon("us")
})
document.querySelector("#uk").addEventListener("click", function(){
    selectCon("uk")
})
document.querySelector("#nz").addEventListener("click", function(){
    selectCon("nz")
})


function selectCon(country){
    // console.log(country)
    displayData(country)
}

function displayData(country){
    let api = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
    fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data.articles) 
                show(data.articles)});

   function show(data){
    let results = document.getElementById("results")
    results.innerHTML = null;
       data.map(function(ele){
            
            let news = document.createElement("div");
            news.className = "news";

            let img =  document.createElement("img");
            img.src = ele.urlToImage

            let div = document.createElement("div")
            div.className = "title"

                let titl = document.createElement("h4");
                titl.innerText = ele.title

                let disciptio = document.createElement("p");
                disciptio.innerText = ele.description

            div.append(titl, disciptio)
            news.append(img, div)
            results.append(news)
       });

   } 
}
function searchNews(){
    if(event.key == "Enter"){
        event.preventDefault();
        // console.log(`hello`)
        let query = document.getElementById("search_input").value;
        window.location.href = "search.html";
   

    }
}
