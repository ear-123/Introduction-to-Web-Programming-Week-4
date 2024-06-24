

const searchButton = document.getElementById("submit-data")
let showContainer = document.getElementsByClassName("show-container").item(0)


searchButton.addEventListener("click", () => search())

async function search() {
    showContainer.innerHTML = ""
    const searchText = document.getElementById("input-show").value
    const url = "https://api.tvmaze.com/search/shows?q=" + searchText
    const dataPromise = await fetch(url)
    //console.log(dataPromise)
    const data = await dataPromise.json()
    console.log(data)

    data.forEach(show => {
        let showData = document.createElement("div")
        showData.className = "show-data"

        let image = document.createElement("img")
        image.src = show.show.image.medium
        showData.appendChild(image)
        
        let showInfo = document.createElement("div")
        showInfo.className = "show-info"
        
        let showTitle = document.createElement("h1")
        showTitle.innerText = show.show.name

        
        //let showSummary1 = document.createElement("p")
        //console.log(showSummary1.innerHTML);
        let showSummary = show.show.summary
        //console.log(showSummary);

        showInfo.appendChild(showTitle)
        showInfo.innerHTML = showInfo.innerHTML + showSummary

        showData.appendChild(showInfo)
        //console.log(showData);

        
        showContainer.appendChild(showData)
    });
    
}
    








