function selectBox(boxNumber) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('selected'));
  
    const selectedBox = boxes[boxNumber - 1];
    selectedBox.classList.add('selected');
  
    const totalElement = document.querySelector('.total');
  
    if (boxNumber === 1) {
      totalElement.textContent = `Total: $10.00 USD`;
    } else if (boxNumber === 2) {
      totalElement.textContent = `Total: $18.00 USD`;
    } else {
      totalElement.textContent = `Total: $24.00 USD`;
    }
  }
  