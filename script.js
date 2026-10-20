
// Demo Data Array
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// Helper Function
function render(html) {
  document.getElementById('out').innerHTML = html
}

// Function 1 - List Foods
function listFoods() {
  let output = ''

  for (const food of foods) {
    output += `<p>${food}</p>`
  }

  render(output)
}

// Function 2 - Numbered Foods
function numberedFoods() {
  let output = `<ol class="list-group list-group-numbered">`

  for (let i = 0; i < foods.length; i++) {
    output += `<li class="list-group-item">${foods[i]}</li>`
  }

  output += '</ol>'
  render(output)
}

// Function 3 - Filter Foods
function filterFoods() {
  const letter = prompt('Enter a letter to filter foods:')

  if (!letter || !letter.trim()) {
    render(`<p class="text-muted">Please enter a letter!</p>`)
    return
  }

  const lower = letter.trim().toLowerCase()

  const matches = foods.filter(food =>
    food.toLowerCase().startsWith(lower)
  )

  if (matches.length === 0) {
    render(`<p class="text-danger">No foods found starting with "${letter}"</p>`)
    return
  }

  const list = matches
    .map(item => `<li class="list-group-item">${item}</li>`)
    .join('')

  render(`<ul class="list-group">${list}</ul>`)
}

// Function 4 - Food Cards
function forEachFoods() {
  let output = `<div class="row g-3 justify-content-center">`

  foods.forEach(food => {
    output += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
        <div class="card shadow-sm w-100">
          <div class="card-body text-center">
            <h5 class="card-title mb-0">${food}</h5>
          </div>
        </div>
      </div>
    `
  })

  output += '</div>'
  render(output)
}

// Original Event Listeners
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)


// ------------------------------------------
// STUDENT WORK SECTION
// ------------------------------------------

// Task 1 - Uppercase List
function uppercaseList() {
  const upperFoods = foods.map(food => food.toUpperCase())

  let output = '<ul class="list-group">'

  upperFoods.forEach(food => {
    output += `<li class="list-group-item">${food}</li>`
  })

  output += '</ul>'
  render(output)
}

// Task 2 - Reverse List
function reverseList() {
  const reversed = [...foods].reverse()

  let output = '<ul class="list-group">'

  reversed.forEach(food => {
    output += `<li class="list-group-item">${food}</li>`
  })

  output += '</ul>'
  render(output)
}

// Task 3 - Random Food Picker
function randomFoodPicker() {
  const random = Math.floor(Math.random() * foods.length)
  const food = foods[random]

  render(`
    <div class="card shadow-sm text-center">
      <div class="card-body">
        <h4>Today's Pick </h4>
        <h2>${food}</h2>
      </div>
    </div>
  `)
}

// Task 4 - Word Lengths
function wordLengths() {
  let output = '<ul class="list-group">'

  for (const food of foods) {
    output += `<li class="list-group-item">${food} — ${food.length} letters</li>`
  }

  output += '</ul>'
  render(output)
}

// Student Challenge Event Listeners
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
