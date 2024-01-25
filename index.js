const questions = [
  {
    text: "Arrays in most programming languages are dynamic data structures that can grow or shrink in size during runtime.",
    answer: false,
  },
  {
    text: "A stack follows the Last In, First Out (LIFO) principle.",
    answer: true,
  },
  {
    text: "Binary Search can be applied to a linked list efficiently.",
    text: false,
  },
  {
    text: "Hash tables guarantee constant time complexity for both insertion and retrieval operations.",
    answer: false,
  },
  {
    text: "A breadth-first search (BFS) algorithm can be implemented using a stack data structure.",
    answer: false,
  },
  {
    text: "An AVL tree is a type of self-balancing binary search tree.",
    answer: true,
  },
  {
    text: "QuickSort has a worst-case time complexity of O(n^2).",
    answer: true,
  },
  {
    text: "A priority queue is a data structure that maintains elements in ascending order based on their values.",
    answer: false,
  },
  {
    text: "Depth-First Search (DFS) can be implemented using recursion or a stack data structure.",
    answer: true,
  },
  {
    text: "Dijkstra's algorithm guarantees the shortest path in a graph with negative-weight edges.",
    answer: false,
  },

  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
  const currentQ = questions[currentQuestion];
  questionText.textContent = currentQ.text;
}

function checkAnswer(userAnswer) {
  const currentQ = questions[currentQuestion];

  if (userAnswer === currentQ.answer) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    document.getElementById(
      userAnswer ? "true-btn" : "false-btn"
    ).style.backgroundColor = "#8FED8F"; // Light green for correct answer
  } else {
    document.getElementById(
      userAnswer ? "true-btn" : "false-btn"
    ).style.backgroundColor = "#FFB6C1"; // Light pink for wrong answer
  }

  trueBtn.disabled = true;
  falseBtn.disabled = true;
  nextBtn.disabled = false;
}

function nextQuestion() {
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  nextBtn.disabled = true;

  document.getElementById("true-btn").style.backgroundColor = "#fff";
  document.getElementById("false-btn").style.backgroundColor = "#fff";

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(`Quiz completed!\nFinal Score: ${score}`);
  }
}

loadQuestion();
