function loadPage(event, page) {
    event.preventDefault(); 
    const contentArea = document.getElementById("content");
  
    fetch(page)
      .then(response => response.text())
      .then(data => {
        contentArea.innerHTML = data; 
      })
      .catch(error => {
        console.error("Error loading page:", error);
        contentArea.innerHTML = "<p>Failed to load page. Please try again later.</p>";
      });
  }    


  
