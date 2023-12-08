document.getElementById('searchByName').addEventListener('click', function(e) {
    e.preventDefault();
    // Code to search by name only
  });
  
  document.getElementById('searchByProduct').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.search-options').style.display = 'block';
    // Code to search by product with additional options
  });
  
  document.getElementById('searchButton').addEventListener('click', function(e) {
    e.preventDefault();
    let searchInput = document.getElementById('searchInput').value;
    let category = document.getElementById('category').value;
    let priceMin = document.getElementById('priceMin').value;
    let priceMax = document.getElementById('priceMax').value;
    // Code to search with the input values
  });
  document.getElementById('searchByName').addEventListener('click', function(e) {
    e.preventDefault();
    // Code to search by name only
  });
  
  document.getElementById('searchByProduct').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.search-options').style.display = 'block';
    // Code to search by product with additional options
  });
  
  document.getElementById('searchButton').addEventListener('click', function(e) {
    e.preventDefault();
    let searchInput = document.getElementById('searchInput').value;
    let category = document.getElementById('category').value;
    let priceMin = document.getElementById('priceMin').value;
    let priceMax = document.getElementById('priceMax').value;
    // Code to search with the input values
  });
  
  document.querySelector('.dropdown-button').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
  });
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };