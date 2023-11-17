localStorage.setItem("Example","This is an example about localstorage");
var clearButton = document.getElementById("clearAll");
clearButton.addEventListener('click',function(){
    localStorage.clear();
    alert("The localStorage is clear");
});
var addButton = document.getElementById("addlocal");
var inputValue = document.getElementById("input1");
addButton.addEventListener('click',function(){
    localStorage.setItem('input1',inputValue.value)
})