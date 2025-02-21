// Object to store overlay data for each image
const imageData = {
    "enchantedForest": {
      title: "The Enchanted Forest",
      price: "$199.99",
      description: "A mystical place filled with magic and wonder.",
      imgSrc: "1.jpeg"
    },
    "futuristicCity": {
      title: "Futuristic City",
      price: "$499.99",
      description: "A high-tech metropolis with neon lights and endless possibilities.",
      imgSrc: "2.jpeg"
    },
    "fantasyPath": {
      title: "Mystical Pathway",
      price: "$129.99",
      description: "A secret path leading to unknown adventures.",
      imgSrc: "3.jpeg"
    },
    "nightCity": {
      title: "Cyberpunk Night City",
      price: "$599.99",
      description: "A neon-lit cyberpunk paradise full of mystery and danger.",
      imgSrc: "4.jpeg"
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize the extraText element's display state
    document.getElementById('extraText').style.display = 'none';
  });
  
  // Update the main image and overlay dynamically
  function displayImage(imageKey) {
    let mainImage = document.getElementById("mainImage");
    let overlayTitle = document.getElementById("overlayTitle");
    let overlayPrice = document.getElementById("overlayPrice");
    let overlayDescription = document.getElementById("overlayDescription");
  
    let data = imageData[imageKey];
  
    mainImage.src = data.imgSrc;
    overlayTitle.textContent = data.title;
    overlayPrice.textContent = data.price;
    overlayDescription.textContent = data.description;
  }
  
  // Show the overlay when mouse is over the main image
  function showOverlay() {
    document.getElementById("imageOverlay").classList.add("visible");
  }
  
  // Hide overlay when mouse leaves
  function hideOverlay() {
    document.getElementById("imageOverlay").classList.remove("visible");
  }
  
  // Toggle extra text
  function toggleText() {
    let extraText = document.getElementById("extraText");
    extraText.style.display = extraText.style.display === "none" ? "block" : "none";
  }
  
  // Show hover text dynamically
  function showHoverText(text) {
    document.getElementById("hoverText").textContent = text;
  }
  
  function clearHoverText() {
    document.getElementById("hoverText").textContent = "";
  }
  