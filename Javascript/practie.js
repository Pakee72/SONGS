const multipleText = [
    "Basic code learner.",
    "Student.",
    "web designer.",
  ];
  
  const textToTypeElement = document.getElementById("multipleText"); // Corrected ID here
  
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isTyping = true;
  
  function typeText() {
    const text = multipleText[currentTextIndex];
    if (currentCharIndex < text.length) {
      textToTypeElement.textContent += text.charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeText, 150); // Adjust typing speed here (in milliseconds)
    } else {
      isTyping = false;
      setTimeout(eraseText, 1500); // Adjust delay before erasing (in milliseconds)
    }
  }
  
  function eraseText() {
    if (currentCharIndex >= 0) {
      textToTypeElement.textContent = multipleText[currentTextIndex].substring(0, currentCharIndex);
      currentCharIndex--;
      setTimeout(eraseText, 30); // Adjust erasing speed here (in milliseconds)
    } else {
      isTyping = true;
      currentTextIndex = (currentTextIndex + 1) % multipleText.length;
      setTimeout(typeText, 400); // Adjust delay before typing next text (in milliseconds)
    }
  }
  
  typeText(); // Start the typing effect when the page loads


 
  
  