
let wrapCard = document.querySelector(".card-wrap")

function getUniversity() {
    let name = document.querySelector("input").value
    let country = document.querySelector("select").value
    fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)
        .then((res) => {
            res.json().then(res2 => {
                let htmlArr = res2.map(el => {
                    return `
                <div class="card">
                    <h2> ${el.name} </h2>
                    <p> country : ${el.country} </p>
                    <div>
                    ${htmlLinks(el.web_pages)}
                    
                    </div>
                </div>`
                })
                let htmlSt = htmlArr.join("")
                wrapCard.innerHTML = htmlSt

            })
        })
        .catch((er) => {
            console.log(er);
        })

}
function htmlLinks(links) {
    let linksHtml = links.map(el => `<a href="${el}"> ${el} </a>`)

    let strLinks = linksHtml.join("")
    return strLinks
}

getUniversity()