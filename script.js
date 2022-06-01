let tincome = 0;
let texpense = 0;
let tamt = 0;
function find(evt){
    var amount = document.getElementById('amount').value;
    var text = document.getElementById('text').value;
    var income = document.getElementById('money-plus');
    var expense = document.getElementById('money-minus');
    var balance = document.querySelector('h1');
    if(amount>0){
    tincome += Number(amount);
    tamt += Number(amount);
    }
    else if(amount<0){
    texpense = texpense + Number(amount);
    tamt = tamt + Number(amount);
    }
    income.innerHTML = "$"+tincome;
    expense.innerHTML = "$"+texpense;
    balance.innerHTML = "$"+tamt;
    var history = document.getElementById('list');
    text = '<li class="minus">'+text+'<span>'+amount+'</span><button class="delete-btn">x</button></li>';
    history.innerHTML += text;
}
function removelist(event){
    if(!event.target.classList.contains('delete-btn')){
        return;
    }
    event.target.closest('li').remove();

}
document.querySelector('button').addEventListener('click',find);
document.querySelector('.list').addEventListener('click',removelist);
