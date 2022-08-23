const input = document.getElementById("input")
const grid =document.getElementsByClassName("grid")[0];

input.addEventListener('keydown', function(event) {
    if(event.key === "Enter")
    loadImg();
})

function removeImages (){
    grid.innerHTML = "";
}

function loadImg() {
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=6&orientation=landscape&client_id=XYsZU4vahhHNhMEs3NQJttXa90B3Tkl-rc1Y7hq806Q'

    fetch(url)

    .then(response =>{
        if(response.ok)
          return response.json();
        else
          alert (response.status)
    })

    .then (data=>{
        const imageNodes=[];
        for(let i=0; i<data.results.length; i++){
            imageNodes[i]=document.createElement('div');
            imageNodes[i].className="img";
            imageNodes[i].style.backgroundImage='url('+data.results[i].urls.raw + ')';
            grid.appendChild(imageNodes[i]);
        }
    })
}


