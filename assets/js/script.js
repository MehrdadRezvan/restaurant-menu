var categories = document.querySelector(".categories .wrapper")
var list = document.querySelector(".menu-items ul")
menuCategories.map(function(item,i) {
  var button = document.createElement("BUTTON")
  button.textContent = item.categoryFa
  button.setAttribute.id = item.category
  button.addEventListener("click", filterFn)
  function filterFn(e) {
    e.target.classList.add("selected")
  }  
  categories.appendChild(button)
})
var allItems = document.querySelector(".categories button:nth-child(1)")
allItems.classList.add("selected")
menuItems.map(function(item, i) {
  var li = document.createElement("LI")
  li.classList.add("col-3")
  var div = document.createElement("DIV")
  div.classList.add("relative", "pb-3")
  var img = document.createElement("IMG")
  img.src = item.photo
  div.appendChild(img)
  if (item.chefRec == true) {
    var chefRec = document.createElement("DIV")
    chefRec.textContent = "پیشنهاد سرآشپز"
    chefRec.classList.add("chef-rec","absolute")
    div.appendChild(chefRec)
  }
  var title = document.createElement("H6")
  title.classList.add("pb-2")
  title.textContent = item.name
  var ingr = document.createElement("P")
  ingr.classList.add("pb-3")
  ingr.textContent = item.ingredients
  var fee = document.createElement("SPAN")
  fee.textContent = item.price + " تومان"
  li.appendChild(div)
  li.appendChild(title)
  li.appendChild(ingr)
  li.appendChild(fee)
  list.appendChild(li)
})
