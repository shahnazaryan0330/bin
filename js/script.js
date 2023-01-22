

btn.addEventListener('click', () => {
   const amount = +document.querySelector('#amountInput').value
   const purchase = +document.querySelector('#purchaseInput').value
   const sell = +document.querySelector('#sellInput').value
   const btn = document.querySelector('#btn')
   const result = document.querySelector('.result')

   let temp = amount / purchase * sell

   result.innerHTML = temp > amount ? (temp - amount).toFixed(2) : (temp - amount).toFixed(2)
})