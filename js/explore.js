const alumni = [
  { name: "Spurthisuresh", role: "AI Engineer", batch: "Batch 2022" },
  { name: "Trisha", role: "Software Developer", batch: "Batch 2021" },
  { name: "Harini", role: "Data Analyst", batch: "Batch 2020" },
  { name: "Pallavi", role: "Machine Learning Specialist", batch: "Batch 2022" },
];

const grid = document.getElementById("alumni-grid");
const searchInput = document.getElementById("search-input");
const departmentFilter = document.getElementById("department-filter");

function renderAlumni(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p style='grid-column: 1 / -1; text-align:center;'>No alumni found.</p>";
    return;
  }

  list.forEach((person) => {
    const card = document.createElement("div");
    card.className = "alumni-card";
    card.innerHTML = `
      <div class="avatar-circle"></div>
      <h3>${person.name}</h3>
      <p class="role">${person.role}</p>
      <p class="batch">${person.batch}</p>
    `;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const dept = departmentFilter.value;

  const filtered = alumni.filter((person) => {
    const matchesName = person.name.toLowerCase().includes(query);
    const matchesDept = dept === "all" || person.role === dept;
    return matchesName && matchesDept;
  });

  renderAlumni(filtered);
}

searchInput.addEventListener("input", applyFilters);
departmentFilter.addEventListener("change", applyFilters);

renderAlumni(alumni);
