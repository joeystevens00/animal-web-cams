function modifyCategoryState(elementId)
{
  var category = document.querySelector("div.category#" + elementId);
  var categoryUl = category.querySelector("ul");
  if (categoryUl.style.display === "none")
  {
    categoryUl.style.display="";
  }
  else
  {
    categoryUl.style.display="none";
  }
}
