// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
const name = prompt("What is your Name?")
if(!name){
  render("<p> No name Given!</p>")
  return
}
render(`<p>Hello, ${name}</p>`)

}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here

  const nums = prompt("Enter Numbers Seperated by Comas:")
  if (!nums){
    render("<p> No Numbers Given!</p>")
  return
  }

  const givenNums = nums.split(',').map(n => parseFloat(n.trim()))


  const sum = givenNums.reduce((a,b) => a + b, 0)
  const avg = sum / givenNums.length
  const list = givenNums.map(n => `<li class="list-group-item"> ${n} </li>`)
render(`<p> Average: <strong> ${avg.toFixed(2)} </strong></p> 
<ul class="list-group">${list}</ul>`)
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here
  const h = new Date().getHours()
  let msg = ''
  if (h<12) {msg = 'Top of the morning'}
  else if ( h < 18) {msg = 'Good Afternoon'}
  else { msg = 'Good evening'}
  render(`<p> ${msg} </p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
  const min = parseInt(prompt(`Enter a MIn Number`))
  const max = parseInt(prompt(`Enter a Max Number`))

  if(isNaN(min) || isNaN(max)){
    render("<p> Please Enter valid Number</p>")
    return
  }
  if(min>max){
      render(`<p class="text-danger"> Min is less than MAx</p>`)
    return
  }
  const rndNum = Math.floor(Math.random()* (max-min + 1) + min )
  render(
    `<p> random number between ${min} and ${max}: <strong> ${rndNum}</strong></p>`
  )

}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  render("Output cleared.")
}

// pg title 
function changePageTitle() {
  const title = document.getElementById('pageTitle')
  title.textContent = "Chris's JS Demo "
  render("<p>Page title changed!</p>")
}


//background
function randomBackgroundColor() {
  const outBox = document.getElementById('out')

 
  const randomColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")

 
  outBox.style.backgroundColor = randomColor

  
  render(`<p>Background color changed to: <strong>${randomColor}</strong></p>`)
}


// number 
function doubleNumber() {
  
  const input = prompt("Enter a number to double:")

  
  const num = parseFloat(input)

 
  if (isNaN(num)) {
    render("<p class='text-danger'>That is not a valid number!</p>")
    return
  }


  const doubled = num * 2


  render(`<p>The number <strong>${num}</strong> doubled is <strong>${doubled}</strong>.</p>`)
}


// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnChangeTitle').addEventListener('click', changePageTitle)
document.getElementById('btnRandomBg').addEventListener('click', randomBackgroundColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)









/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
