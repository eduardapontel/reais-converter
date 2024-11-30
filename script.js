const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('footer');
const description = document.querySelector('#description');
const result = document.querySelector('h1');

amount.oninput = () => {
    const charactersRegex = /\D+/g;
    amount.value = amount.value.replace(charactersRegex, '');
};

form.onsubmit = (e) => {
    e.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, '$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
    }
};

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;
        let total = amount * price;
        total = formatCurrencyBRL(total).replace('R$', '');
        result.textContent = `${total} Reais`;
        footer.classList.add('show-result');
    } catch (e) {
        footer.classList.remove('show-result');
        console.log(e);
        alert('It was not possible to convert, please try again later.');
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('en', {
        style: 'currency',
        currency: 'BRL',
    });
}
