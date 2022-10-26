const searchIcon=document.querySelector(".search-icon");
const input=document.querySelector(".main__input")
const searchItem=document.querySelectorAll(".search-item")
input.onfocus=function()
{
searchIcon.classList.add("search");
}
input.onblur=function()
{
searchIcon.classList.remove("search");
}
