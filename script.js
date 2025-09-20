//your JS code here. If required.
const outputDiv = document.getElementById("output");

// Step 1: Initial Promise - resolves with [1,2,3,4] after 3s
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Step 2: Filter even numbers (with 1s delay)
function filterEvens(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter((num) => num % 2 === 0);
      outputDiv.textContent = evens.toString(); // show [2,4]
      resolve(evens);
    }, 1000);
  });
}

// Step 3: Multiply evens by 2 (with 2s delay)
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doubled = arr.map((num) => num * 2);
      outputDiv.textContent = doubled.toString(); // show [4,8]
      resolve(doubled);
    }, 2000);
  });
}

// Chaining
getInitialArray()
  .then((arr) => filterEvens(arr))
  .then((evens) => multiplyByTwo(evens))
  .catch((err) => {
    console.error("Error:", err);
  });
