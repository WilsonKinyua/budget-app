const reasonInput = document.querySelector("#input-reason");
const amount = document.querySelector("#input-amount");
const btnCancel = document.querySelector("#btn-cancel");
const btnConfirm = document.querySelector("#btn-add");
const expensesList = document.querySelector("#expenses-list");
const totalamt = document.querySelector("#total");

let totalExpense = 0;

const clear = () => {

    reasonInput.value = '';
    amount.value = '';
};

btnConfirm.addEventListener("click", () => {
   const reasonEntered = reasonInput.value
   const amt= amount.value;
   
   if(reasonEntered.trim().length <= 0 || amt.trim().length <= 0 || amt <= 0) {
       return;
   }
   const element = document.createElement('ion-item');
   element.textContent = reasonEntered + ' : $ ' + amt;

   expensesList.appendChild(element)

   totalExpense += +amt;
   totalamt.textContent = '$ ' + totalExpense;
   clear();
})

btnCancel.addEventListener("click", () => {
    clear();
})