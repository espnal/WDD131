window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last modified: " + document.lastModified;
  console.log(document.getElementById(`lastModified`).textContent);
};
