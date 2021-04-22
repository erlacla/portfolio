const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week 2 notes",
    url: "week2/index.html",
  },
];

let i = 0;

links.forEach(() => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", links[i].url);
  a.innerHTML = links[i].label;
  li.appendChild(a);
  i++;
  document.getElementById("display").appendChild(li);
});
