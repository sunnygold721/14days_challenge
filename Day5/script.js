const genInput = document.querySelector('.gen');
const clearInput = document.querySelector('.clear');
 const input = document.querySelector('.num');
const numElement = document.querySelector('.numInput');

genInput.addEventListener("click", () => {
   
    const n = Number(input.value)
    if (!Number.isFinite(n) || n === 0 || n < 1 || n > 10){
        numElement.innerHTML = 'Go back and put any Number btw 1 - 10 🙄😤'
        numElement.style.color = 'red'
        return;
    }; 
    
    let result ='';
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}<br>`
    } numElement.innerHTML = result;
    numElement.style.color = 'black';   
});
clearInput.addEventListener("click", () => {
    input.value = '';
    numElement.innerHTML = '';
})