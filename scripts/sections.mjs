// 1. Exported reusable function
export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}

// 2. Exported populateSections function
export function populateSections(sections) {
  const sectionList = document.querySelector("#sectionsList");

  sectionList.innerHTML = ""; // clear the list

  sections.forEach((section) => {
    const li = document.createElement("li");
    li.textContent = `Section ${section.sectionNumber} - ${section.enrolled} enrolled, Instructor: ${section.instructor}`;
    sectionList.appendChild(li);
  });
}
