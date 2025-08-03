# 📅 Day 16 of 21-Day DSA Challenge

## 📌 Topic: Insertion Sort in JavaScript

### ✅ Goal:
Implement the Insertion Sort algorithm from scratch using JavaScript and understand how element comparisons and placements work step-by-step.

---

## 🧠 What I Learned:
- How Insertion Sort works by shifting elements to insert the current value at the right position.
- How nested loops manage ordering in real-time as the array is traversed.
- Importance of dry-run and debugging using console logs and terminal.

---

## 📂 Code Snippet:

```js
const arr = [8, 2, 4, 3, 1];

function Sorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

let res = Sorted(arr);
console.log(res);  // Output: [1, 2, 3, 4, 8]


---

🧪 Output:

[1, 2, 3, 4, 8]


---

🚀 How to Run:

1. Open terminal in your project folder.


2. Run the file using Node.js:



node InsertionSort.js


---

🔚 Summary:

Insertion Sort is a great starting point for understanding how basic sorting works. Though not efficient for large datasets, it's powerful for learning the underlying mechanism behind more complex algorithms.


---

📌 Tags:

#DSAChallenge #Day16 #InsertionSort #JavaScript #SortingAlgorithms #CodeNewbie #100DaysOfCode



