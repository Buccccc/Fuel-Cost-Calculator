const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
const calculateButton = document.querySelector('.calculate-button');
const output = document.querySelector('#output');

const economyUnit = document.querySelector('#fuel-economy-unit');
const economy = document.querySelector('#fuel-economy-value');
const priceUnit = document.querySelector('#fuel-price-unit');
const price = document.querySelector('#fuel-price-value');
const distanceUnit = document.querySelector('#trip-distance-unit');
const distance = document.querySelector('#trip-distance-value');

const convertToLitersPerKm = (value, unit) => {
    if (unit === 'l/100km') {
        return value / 100
    } else if (unit === 'km/l') {
        return value ** -1
    } else if (unit === 'mpg') {
        return value * 2.35214583
    }
}

const convertToPricePerL = (value, unit) => {
    if (unit === 'price/l') {
        return value
    } else if (unit === 'price/g') {
        return value/4.546092
    } else if (unit === 'price/bbl') {
        return value/158.987295
    }
}

const convertToDistanceInKm = (value, unit) => {
    if (unit === 'km') {
        return value
    } else if (unit === 'mi') {
        return value * 1.609344
    }
}

const calculateCost = () => {
    const litersPerKm = convertToLitersPerKm(economy.value, economyUnit.value);
    const pricePerL = convertToPricePerL(price.value, priceUnit.value);
    const distanceInKm = convertToDistanceInKm(distance.value, distanceUnit.value);
    return litersPerKm * pricePerL * distanceInKm;
}

calculateButton.onclick = () => {
    output.innerHTML = `<p id="output-text">Estimated cost of fuel: $${calculateCost().toFixed(2)}</p>`
}