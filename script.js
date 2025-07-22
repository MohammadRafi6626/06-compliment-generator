/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/

// 1. Get the button and output area from the HTML

const complimentBtn = document.getElementById("complimentBtn");
const complimentOutput = document.querySelector("#complimentOutput");

// 2. Create a list of compliments to choose from
const compliments = [
  "Your smile lights up the room.",
  "You have a natural talent for making people feel comfortable.",
  "I admire your determination and drive.",
  "You have a great sense of humor!",
  "You have a great sense of humor!",
  "You’re one of the most genuine people I know.",
  "Your style is always on point.",
  "You have such a positive energy.",
  "You’re really good at what you do.",
  "Your kindness makes a difference.",
  "I love the way you think outside the box.",
  "You have an amazing ability to see the best in people.",
  "Your confidence is contagious.",
  "You make even ordinary moments special.",
  "You’re a fantastic listener.",
];

// 3. Listen for a button click
let count = 0;
complimentBtn.addEventListener("click", () => {
  // 4. Pick a compliment at random
  const randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)];

  // 5. Update the page with the compliment and a random image
  complimentOutput.innerHTML = `
  <p>${randomCompliment}</p>
  <img src="https://picsum.photos/600/400?${count++}" alt="Random inspirational image" class="compliment-image" />
  `;
});
