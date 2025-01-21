const sortOptions = [
  {
    value: "popularity",
    text: "Popularité",
  },
  {
    value: "date",
    text: "Date",
  },
  {
    value: "title",
    text: "Titre",
  },
]

/**
 * GET DOM ELEMENTS
 */
const dom_selectedOption = document.getElementById("sortbar-selectedOption")
const selectBtn = document.getElementById("sortbar-btn")
const chevron = document.getElementById("sortbar-chevron")
const dom_optionsList = document.getElementById("sortbar-options-list")

/**
 * INITIALIZE SORTBAR
 */
const selectedOption = sortOptions[0] // Select first option as default
dom_selectedOption.textContent = selectedOption.text // Display selected option

dom_optionsList.setAttribute("role", "listbox")

sortOptions.forEach((option) => {
  const li = document.createElement("li")
  li.textContent = option.text
  li.setAttribute("data-value", option.value)
  li.setAttribute("tabindex", "0")
  li.setAttribute("role", "option")

  option.value === selectedOption.value ? (li.style.display = "none") : null
  dom_optionsList.appendChild(li)
})

selectBtn.setAttribute(
  "aria-expanded",
  dom_optionsList.classList.contains("show").toString()
)

selectBtn.addEventListener("click", () => {
  dom_optionsList.classList.toggle("show") // Open or close list
  selectBtn.classList.toggle("sortbar-btn-open") // Change button style
  chevron.classList.toggle("sortbar-chevron-up") // Reverse chevron direction
})

/**
 * UPDATE SORTBAR (SELECTED OPTION & DISPLAYED LIST)
 * @param {string} selectedOption
 */
function updateSortBar(selectedOption) {
  dom_selectedOption.textContent = sortOptions.find(
    (option) => option.value === selectedOption
  ).text
  dom_optionsList.classList.remove("show")
  selectBtn.classList.remove("sortbar-btn-open")
  chevron.classList.remove("sortbar-chevron-up")
  const listItems = dom_optionsList.querySelectorAll("li")
  listItems.forEach((li) => {
    li.getAttribute("data-value") === selectedOption
      ? (li.style.display = "none")
      : (li.style.display = "block")
  })
}
