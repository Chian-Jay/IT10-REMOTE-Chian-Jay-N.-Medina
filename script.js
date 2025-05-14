let count = Number(sessionStorage.getItem("count")) || 0;
document.getElementById("visitCount").textContent = count;

function increaseCount(){
    count++;
    update();
}
function resetCounter(){
    count=0;
    update();
}
function update(){
    document.getElementById("visitCount").textContent = count;
    sessionStorage.setItem("count", count);
}