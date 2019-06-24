const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
data.forEach(movie => {
  // console.table(movie.director, movie.rt_score)
const card = document.createElement('div')
card.setAttribute('class', 'card')

const h1 = document.createElement('h1')
h1.textContent = movie.title

const p = document.createElement('p')
movie.description = movie.description.substring(0, 400)
p.textContent = `${movie.description}...`

const h2 = document.createElement('h2')
h2.textContent = movie.producer
const h3 = document.createElement('h3')
h3.textContent = movie.release_date + ', ' + `${movie.rt_score}%` 

container.appendChild(card)
card.appendChild(h1)
card.appendChild(h2)
card.appendChild(h3)
card.appendChild(p)
})

} else
{
  console.log('error')
}
}
// Send request
request.send()
