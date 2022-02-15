function updateValue(id, priceId, unitPrice, isMinus) {
  const input = document.getElementById(id);
  if (isNaN(parseInt(input.value))) {
    input.value = 0;
  } else if (isMinus && parseInt(input.value) > 0) {
    input.value--;
    document.getElementById(priceId).innerHTML =
      parseInt(input.value) * parseInt(unitPrice);
  } else if (parseInt(input.value) == 0 && !isMinus) {
    input.value++;
    document.getElementById("items-num").innerHTML =
      parseInt(document.getElementById("items-num").innerHTML) + 1;
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

function grossPriceUpdate() {
  if (parseFloat(document.getElementById("total-pay-now").innerText) == 0) {
    document.getElementById("total-cost").innerHTML = 0;
  }
  if (parseInt(document.getElementById("items-num").innerText) > 0) {
    document.getElementById("items-num").innerHTML =
      parseInt(document.getElementById("items-num").innerText) - 1;
  }
}

/* adding promo code */

function udateDisProperty(isGreen) {
  if (isGreen) {
    document.getElementById("promo-dis").innerText = "Promo discount applied";
    document.getElementById("promo-dis-colour").style.color = "green";
    document.getElementById("promo-dis-colour").style.border =
      "3px solid green";
    document.getElementById("promo-dis-colour").style.borderRadius = ".5rem";
  } else {
    document.getElementById("promo-dis").innerText =
      "Promo discount not applied";
    document.getElementById("promo-dis-colour").style.color = "red";
    document.getElementById("promo-dis-colour").style.border = "3px solid red";
    document.getElementById("promo-dis-colour").style.borderRadius = ".5rem";
  }
}

document.getElementById("promo-code-btn").addEventListener("click", () => {
  let totalCostBeforePromo = document.getElementById("total-pay-now").innerText;
  if (document.getElementById("promo-code-input").value == "PROMO1") {
    document.getElementById("promo-code").innerText = 99.23;
    udateDisProperty(true);
  } else if (document.getElementById("promo-code-input").value == "PROMO2") {
    document.getElementById("promo-code").innerText = 69.23;
    udateDisProperty(true);
  } else if (document.getElementById("promo-code-input").value == "PROMO3") {
    document.getElementById("promo-code").innerText = 49.23;
    udateDisProperty(true);
  } else {
    document.getElementById("promo-code").innerText = "0.00";
    udateDisProperty(false);
  }
  document.getElementById("total-pay-now").innerText = (
    totalCostBeforePromo -
    parseFloat(document.getElementById("promo-code").innerText)
  ).toFixed(2);
  document.getElementById("promo-code-btn").disabled = true;
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
  document.getElementById("input-1").value = 0;
  document.getElementById("price-1").innerHTML = 0;
  updateTotalCost();
  grossPriceUpdate();
});
document.getElementById("delete-2").addEventListener("click", function () {
  document.getElementById("input-2").value = 0;
  document.getElementById("price-2").innerHTML = 0;
  updateTotalCost();
  grossPriceUpdate();
});
document.getElementById("delete-3").addEventListener("click", function () {
  document.getElementById("input-3").value = 0;
  document.getElementById("price-3").innerHTML = 0;
  updateTotalCost();
  grossPriceUpdate();
});
