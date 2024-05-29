const range = document.querySelector("#range")
range.addEventListener("input", () => {
    const min = range.min
    const max = range.max
    const currentValue = range.value

    range.style.backgroundSize = ((currentValue - min) / (max - min)) * 100 + "% 100%"
} )

const months = document.querySelectorAll(".month");
const pageview = document.querySelector(".pageview");
const pricingData = {
    "1": { price: 8.00, views: "10k" },
    "2": { price: 12.00, views: "50k" },
    "3": { price: 16.00, views: "100k" },
    "4": { price: 24.00, views: "500k" },
    "5": { price: 36.00, views: "1m" }
};
function updatePricing() {
    const data = pricingData[range.value];
    months.forEach(month => {
        if (billBtn.classList.contains("main__bill-btn--discount")) {
            const discountedPrice = data.price * 0.75;
            month.innerText = `$${discountedPrice.toFixed(2)}`;
        } else {
            month.innerText = `$${data.price.toFixed(2)}`;
        }
        month.style.opacity = 0.5;
        setTimeout(() => {
            month.style.opacity = 1;
        }, 200);
    });

    pageview.innerText = data.views;
    pageview.style.opacity = 0.5;
    setTimeout(() => {
        pageview.style.opacity = 1;
    }, 200);
}

range.addEventListener('input', updatePricing);

const billBtn = document.querySelector(".main__bill-btn")
billBtn.addEventListener('click', () => {
    billBtn.classList.toggle("main__bill-btn--discount");
    updatePricing();
});
