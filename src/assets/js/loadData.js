fetch('data/data.json')  // YES, this is correct when using Live Server
  .then(response => response.json())
  .then(data => {
    const users = data.users;
    document.getElementById('userCount').innerText = users.length;
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });
