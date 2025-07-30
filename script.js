//your JS code here. If required.
let container = document.querySelector(".container")
let numberOfSquare = 800

for(let i=0; i<numberOfSquare; i++){
	let squarebox = document.createElement("div")
	 squarebox.classList.add('square');

	squarebox.addEventListener("mouseover",()=>{
		let color = getRandomColor()
		squarebox.style.background = color
         setTimeout(()=>{
		squarebox.style.background = "#222"
		},1000)
	})
	container.append(squarebox)
}
function getRandomColor() {
	const colors = ['#ff595e', '#1982c4', '#6a4c93', '#8ac926', '#ffca3a'];
  return colors[Math.floor(Math.random() * colors.length)];
}
