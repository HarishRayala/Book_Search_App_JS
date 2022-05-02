// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
    fetch (url)
    .then(function(res){
      return  res.json()
    })
    .then(function(res){
        // console.log(res)
        appendData(res)
    })
    .catch(function(err){
        console.log("err:",err)
    })

function appendData(data){
    console.log(data)
    let container= document.getElementById("results");
    let p1=document.createElement("p")
    p1.innerHTML=data.author
    container.append(p1)
}



