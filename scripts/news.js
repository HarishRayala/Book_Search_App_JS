// Ude Import export (MANDATORY)

async function apiCalls(url) {


   
try{
    let res= await fetch(url);
    let data= await res.json();
    return data;

}
catch(err){
    console.log('err:', err)
    
}

}


function appendArticles(articles, main) {



    articles.forEach(element => {
        let div=document.createElement("div");
       
        div.setAttribute("class","headings");
        div.addEventListener("click",function(){
            localStorage.setItem("article",JSON.stringify(element));
            window.location.href="news.html"
        });
        let title=document.createElement("h1");
        title.innerHTML=element.title;
        let descrip=document.createElement("p");
        descrip.innerHTML=element.description;
        let img=document.createElement("img");
        img.src=element.image;
      
        let div1=document.createElement("div");
        div1.append(title,descrip);
        div.append(img,div1);
        document.getElementById("main").append(div);
    });


}

export { apiCalls, appendArticles }
