// TODO: Add support for more colors
const names = ["dave", "stacy", "john", "death destroyer of man", "tina", "quinn"];
const prices = [131, 34, 123, 234 ,51, 5, 32];
const occupations = ["racecar driver", "intern at google", "was a intern at google"];
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  ];
const maxFreelancer = 13;

const addFreelancerIntervalId = setInterval(addFreelancer, 4000);
const updatePrices = setInterval(avePrice, 4000)

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares

  const thing = document.querySelector("#freelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("tr");
    const nameElement = document.createElement("td");
    nameElement.innerText=freelancer.name;
    const jobElement = document.createElement("td");
    jobElement.innerText=(freelancer.occupation);
    const priceElement = document.createElement("td");
    priceElement.innerText=(freelancer.price);
    element.append(nameElement,jobElement,priceElement)
    return element;
  });
  thing.replaceChildren(...freelancerElements);
}


function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
freelancers.push({name, price, occupation})
if (freelancers.length >= maxFreelancer){
  clearInterval(addFreelancerIntervalId)
}
render()
}

function avePrice(){
  console.log("average price")
  let sum = 0
  for (let i = 0; i < freelancers.length; i++){
    sum += freelancers[i].price
  }
    let averagePrice = sum / freelancers.length
    console.log(averagePrice)
    // const thing = document.querySelector("#avePrice");
    // const element = document.createElement("td");
    // element.innerText=(averagePrice);
    document.getElementById("avePrice").innerText = averagePrice
}
