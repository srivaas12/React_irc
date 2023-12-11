document.addEventListener('DOMContentLoaded', function () {
    const decrementButton = document.getElementById('decrementButton');
    const counterValue = document.getElementById('counterValue');
  
    let counter = 0;
  
    decrementButton.addEventListener('click', function () {
      counter--;
  
      counterValue.textContent = `Counter: ${counter}`;
    });
  });
  
