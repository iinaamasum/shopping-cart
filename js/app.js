function updateValue(id, priceId, unitPrice, isMinus) {
  const input = document.getElementById(id);
  if (isNaN(parseInt(input.value))) {
    input.value = 0;
  } else if (isMinus && parseInt(input.value) > 0) {
    input.value--;
    document.getElementById(priceId).innerHTML =
      parseInt(input.value) * parseInt(unitPrice);
  } else if (!isMinus) {
    input.value++;
    document.getElementById(priceId).innerHTML =
      parseInt(input.value) * parseInt(unitPrice);
  }
}

function updateTotalCost() {
  const totalCost = document.getElementById("total-cost");
  const totalCostValue =
    parseFloat(document.getElementById("price-1").innerHTML) +
    parseFloat(document.getElementById("price-2").innerHTML) +
    parseFloat(document.getElementById("price-3").innerHTML);

  if (totalCostValue == 0) {
    document.getElementById("total-pay-now").innerText = 0;
    document.getElementById("total-vat").innerHTML = 0;
    document.getElementById("total-shipping").innerText = 0;
  } else {
    totalCost.innerHTML = totalCostValue;
    document.getElementById("total-shipping").innerText = (
      totalCostValue + 60.99
    ).toFixed(2);

    document.getElementById("total-vat").innerHTML = (
      totalCostValue / 10
    ).toFixed(2);
    document.getElementById("total-pay-now").innerText = (
      parseFloat(document.getElementById("total-shipping").innerText) +
      parseFloat(document.getElementById("total-vat").innerHTML) +
      parseFloat(document.getElementById("promo-code").innerHTML)
    ).toFixed(2);
  }
}

let totalCostBeforePromo = document.getElementById("total-pay-now").innerText;

document.getElementById("promo-code-btn").addEventListener("click", () => {
  if (document.getElementById("promo-code-input").value == "PROMO1") {
    document.getElementById("promo-code").innerText = 99.23;
  } else if (document.getElementById("promo-code-input").value == "PROMO2") {
    document.getElementById("promo-code").innerText = 69.23;
  } else if (document.getElementById("promo-code-input").value == "PROMO3") {
    document.getElementById("promo-code").innerText = 49.23;
  } else {
    document.getElementById("promo-code").innerText = "0.00";
  }
  document.getElementById("total-pay-now").innerText = (
    totalCostBeforePromo -
    parseFloat(document.getElementById("promo-code").innerText)
  ).toFixed(2);
});

document.getElementById("minus-1").addEventListener("click", function () {
  updateValue("input-1", "price-1", 100, true);
  updateTotalCost();
});
document.getElementById("minus-2").addEventListener("click", function () {
  updateValue("input-2", "price-2", 70, true);
  updateTotalCost();
});
document.getElementById("minus-3").addEventListener("click", function () {
  updateValue("input-3", "price-3", 30, true);
  updateTotalCost();
});
document.getElementById("plus-1").addEventListener("click", function () {
  updateValue("input-1", "price-1", 100, false);
  updateTotalCost();
});
document.getElementById("plus-2").addEventListener("click", function () {
  updateValue("input-2", "price-2", 70, false);
  updateTotalCost();
});
document.getElementById("plus-3").addEventListener("click", function () {
  updateValue("input-3", "price-3", 30, false);
  updateTotalCost();
});

document.getElementById("delete-1").addEventListener("click", function () {
  document.getElementById("bag").style.textDecoration = "line-through";
  document.getElementById("bag").style.color = "red";
  document.getElementById("input-1").value = 0;
});
document.getElementById("delete-2").addEventListener("click", function () {
  document.getElementById("shoes").style.textDecoration = "line-through";
  document.getElementById("shoes").style.color = "red";
  document.getElementById("input-2").value = 0;
});
document.getElementById("delete-3").addEventListener("click", function () {
  document.getElementById("watch").style.color = "red";
  document.getElementById("input-3").value = 0;
});
