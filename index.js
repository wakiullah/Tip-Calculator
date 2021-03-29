document.getElementById('form').onchange = function() {
    let ammount = Number(document.getElementById('inp').value);
    let Disount = document.getElementById('range').value;
    let showDisount = document.getElementById('rangeView');
    let onlyDoscount = document.getElementById('tipAmmount')
    let withOutDisount = document.getElementById('fullAmmount')
    let result = document.getElementById('resultDiv')


    let finalDisount = ammount * (Disount / 100)
    let DiscountAmmount = ammount - finalDisount

    onlyDoscount.value = finalDisount.toFixed(2)
    withOutDisount.value = DiscountAmmount.toFixed(2)
    showDisount.innerHTML = `${Disount}%`

    result.style.display = 'block'
}