// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import nav from "/components/navbar.js";

document.getElementById("navbar").innerHTML = nav();
let query = 'tesla';
let api = `https://masai-mock-api.herokuapp.com/news?q=${query}`
fetch(api)
        .then(response => response.json())
        .then(data => show(data.articles));

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