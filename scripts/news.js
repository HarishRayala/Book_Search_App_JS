// Ude Import export (MANDATORY)
function searchbyId(n){
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${n}`
    fetch (url)
    .then(function(res){
      return  res.json()
    })
    .then(function(res){
         console.log(res)
        appendData(res.articles)
    })
    .catch(function(err){
        console.log("err:",err)
    })
}

function appendData(data){
  
    let container= document.getElementById("results");
    
    data.map((ele)=>{
        let div=document.createElement('div');
        let h5=document.createElement('h5');
        h5.innerText=ele.title
        let img=document.createElement('img');
        img.src=ele.urlToImage;
        div.append(img,h5)
        div.style.display="flex"
        container.append(div)
       
    });
   

}
    
export default searchbyId