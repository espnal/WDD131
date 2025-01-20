// window.onload = function () {
//   document.getElementById("currentyear").textContent = new Date().getFullYear();
//   document.getElementById("lastModified").textContent =
//     "Last modified: " + document.lastModified;
//   console.log(document.getElementById(`lastModified`).textContent);
// };
document.addEventListener("DOMContentLoaded", function () {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last modified: " + document.lastModified;
  } else {
    console.error("Element with ID 'lastModified' not found.");
  }
});
