chrome.storage.local.get(['movies'], (result)=>{
    for(const show of result.movies){
        renderMovie(show)
    }
})


function renderMovie(show){
    const showDiv = document.createElement("div")


    const title= document.createElement("h3")
    title.textContent = show.show.name

    const images= document.createElement("img")
    images.src=show.show.image ? show.show.image.medium : null
    
    showDiv.appendChild(title)
    showDiv.appendChild(images)

    document.body.appendChild(showDiv)
}