// Task 1,2,3,4 – Paragraph highlight
const paragraph = document.getElementById('myParagraph');

document.getElementById('addBtn').addEventListener('click', () => {
  paragraph.classList.add('highlight');
});

document.getElementById('removeBtn').addEventListener('click', () => {
  paragraph.classList.remove('highlight');
});

document.getElementById('toggleBtn').addEventListener('click', () => {
  paragraph.classList.toggle('highlight');
});

document.getElementById('checkBtn').addEventListener('click', () => {
  if (paragraph.classList.contains('highlight')) {
    alert('Class exists');
  } else {
    alert('Class not exists');
  }
});

// Task 5 – Active button state (toggle)
const buyBtn = document.getElementById('buyNowBtn');

buyBtn.addEventListener('click', () => {
  buyBtn.classList.toggle('active-btn');
});

// Task 6 – Dark mode for the whole page
const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
