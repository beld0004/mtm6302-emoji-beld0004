const emojis = [
    "&#x1F605;", "&#x1F60A;", "&#x1F60E;", "&#x1F60D;",
    "&#x1F618;", "&#x1F917;", "&#x1F604;", "&#x1F4A9;",
    "&#x1F609;", "&#x1F436;", "&#x1F525;", "&#129409;",
    "&#129409;", "&#129409;", "&#129409;", "&#129409;", 
  ];
  
  const emojiGallery = document.getElementById("emoji-gallery");
  
  emojis.forEach((emoji, index) => {
    const emojiCard = document.createElement("div");
    emojiCard.classList.add("emoji-card");
  
    const emojiSymbol = document.createElement("div");
    emojiSymbol.innerHTML = emoji;
    emojiCard.appendChild(emojiSymbol);
  
    const emojiCode = document.createElement("div");
    emojiCode.classList.add("emoji-code");
    emojiCode.textContent = `Code: ${emoji}`;
    emojiCard.appendChild(emojiCode);
  
    emojiGallery.appendChild(emojiCard);
  });
  

  

  
  
  

  