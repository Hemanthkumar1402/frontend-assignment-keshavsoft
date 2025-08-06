// assets/js/userTable.js

let originalData = [];

fetch('data/data.json')
  .then(res => res.json())
  .then(data => {
    originalData = data.users;
    displayUsers(originalData);
  })
  .catch(err => {
    console.error("Failed to load users:", err);
  });

function displayUsers(users) {
  const tbody = document.getElementById('userRows');
  tbody.innerHTML = "";

  users.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.skills.join(', ')}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 🔍 Search Function
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = originalData.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.role.toLowerCase().includes(query)
  );
  displayUsers(filtered);
});

// ⬍ Sort Table Columns
function sortTable(colIndex) {
  const rows = [...originalData];
  const keyMap = ["name", "email", "role"];

  rows.sort((a, b) => {
    const key = keyMap[colIndex];
    return a[key].localeCompare(b[key]);
  });

  displayUsers(rows);
}
