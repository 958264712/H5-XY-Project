// get form element
const bookingForm = document.getElementById("bookingForm");
const computed = document.getElementById("computed");
const computedCost = document.getElementById("computedCost");
const userArrival = bookingForm.querySelector("#userArrival");
const userDeparture = bookingForm.querySelector("#userDeparture");
const userSingle = bookingForm.querySelector("#userSingle");
const userDouble = bookingForm.querySelector("#userDouble");
const userAduits = bookingForm.querySelector("#userAduits");
const userChildren = bookingForm.querySelector("#userChildren");
const CalculateBtn = bookingForm.querySelector("#CalculateBtn");

const form = document.getElementById("cardForm");
const userTitle = form.querySelector("#userTitle");
var radioGroup = document.getElementsByName("pay");
const userFirstName = form.querySelector("#userFirstName");
const userCardholderName = form.querySelector("#userCardholderName");
const userLastName = form.querySelector("#userLastName");
const userCardNumber = form.querySelector("#userCardNumber");
const userEmail = form.querySelector("#userEmail");
const userCardExpiration = form.querySelector("#userCardExpiration");
const userPhoneNumber = form.querySelector("#userPhoneNumber");
const cvv = form.querySelector("#cvv");
const cancelButton = form.querySelector("#cancelButton");
const payNowButton = form.querySelector("#payNowButton");
const hid = document.getElementById("hidden");

function calculateStayDuration(checkInDate, checkOutDate) {
  // Converts a Date in string format to a date object
  var startDate = new Date(checkInDate);
  var endDate = new Date(checkOutDate);
  //Calculate the time difference between two dates, and the result is in milliseconds
  var timeDifference = endDate.getTime() - startDate.getTime();
  // Convert the time difference to days
  var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
}

// Add check-in message event listening
CalculateBtn.addEventListener("click", () => {
  // Check-in time verification
  var t1, t2, t3, t4;
  if (userArrival.value.trim() === "") {
    document.getElementById("required1").style.opacity = 1;
    t1 = false;
  } else {
    document.getElementById("required1").style.opacity = 0;
    t1 = true;
  }
  // Departure time verification
  if (userDeparture.value.trim() === "") {
    document.getElementById("required2").style.opacity = 1;
    t2 = false;
  } else {
    document.getElementById("required2").style.opacity = 0;
    t2 = true;
  }
  // Room type quantity verification
  if (userSingle.value < 1 && userDouble.value < 1) {
    document.getElementById("required3").style.opacity = 1;
    t3 = false;
  } else {
    document.getElementById("required3").style.opacity = 0;
    t3 = true;
  }
  // Room type quantity verification
  if (userSingle.value < 1 && userDouble.value < 1) {
    document.getElementById("required4").style.opacity = 1;
    t3 = false;
  } else {
    document.getElementById("required4").style.opacity = 0;
    t3 = true;
  }
  // Guest type number verification
  if (userAduits.value < 1 && userChildren.value < 1) {
    document.getElementById("required5").style.opacity = 1;
    t4 = false;
  } else {
    document.getElementById("required5").style.opacity = 0;
    t4 = true;
  }
  // Guest type number verification
  if (userAduits.value < 1 && userChildren.value < 1) {
    document.getElementById("required6").style.opacity = 1;
    t4 = false;
  } else {
    document.getElementById("required6").style.opacity = 0;
    t4 = true;
  }
  if (t1 && t2 && t3 && t4) {
    var single = 0,
      double = 0,
      dateNum = 0;
    if (userSingle.value > 0) {
      single = 200 * userSingle.value;
    }
    if (userDouble.value > 0) {
      double = 300 * userDouble.value;
    }
    if (userArrival.value.tirm !== 0 && userDeparture.value.tirm !== 0) {
      dateNum = calculateStayDuration(userArrival.value, userDeparture.value);
    }
    computedCost.innerText = single * dateNum + double * dateNum;
    computed.style.display = "inline-block";
    hid.style.display = "block";
  } else {
    computed.style.display = "none";
    hid.style.display = "none";
    return;
  }
});

var t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;

//Click to check if the input is valid
userFirstName.addEventListener("blur", () => {
  if (userFirstName.value.trim() === "") {
    document.getElementById("required7").style.opacity = 1;
    t5 = false;
  } else {
    document.getElementById("required7").style.opacity = 0;
    t5 = true;
  }
});
userCardholderName.addEventListener("blur", () => {
  if (userCardholderName.value.trim() === "") {
    document.getElementById("required8").style.opacity = 1;
    t6 = false;
  } else {
    document.getElementById("required8").style.opacity = 0;
    t6 = true;
  }
});
userLastName.addEventListener("blur", () => {
  if (userLastName.value.trim() === "") {
    document.getElementById("required9").style.opacity = 1;
    t7 = false;
  } else {
    document.getElementById("required9").style.opacity = 0;
    t7 = true;
  }
});
userCardNumber.addEventListener("blur", () => {
  if (userCardNumber.value.trim()?.length !== 16) {
    document.getElementById("required10").style.opacity = 1;
    t8 = false;
  } else {
    document.getElementById("required10").style.opacity = 0;
    t8 = true;
  }
});
userEmail.addEventListener("blur", () => {
  const reg = /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/;
  if (!reg.test(userEmail.value)) {
    document.getElementById("required11").style.opacity = 1;
    t9 = false;
  } else {
    document.getElementById("required11").style.opacity = 0;
    t9 = true;
  }
});
userPhoneNumber.addEventListener("blur", () => {
  if (userPhoneNumber.value.trim()?.length !== 11) {
    document.getElementById("required12").style.opacity = 1;
    t10 = false;
  } else {
    document.getElementById("required12").style.opacity = 0;
    t10 = true;
  }
});
cvv.addEventListener("blur", () => {
  if (cvv.value.trim()?.length !== 3) {
    document.getElementById("required13").style.opacity = 1;
    t11 = false;
  } else {
    document.getElementById("required13").style.opacity = 0;
    t11 = true;
  }
});
userTitle.addEventListener("blur", () => {
  if (userTitle.value.trim() === "") {
    document.getElementById("required14").style.opacity = 1;
    t12 = false;
  } else {
    document.getElementById("required14").style.opacity = 0;
    t12 = true;
  }
});
var lastFocusedRadio = null;
form.addEventListener("focusin", function (event) {
  if (event.target.type === "radio") {
    lastFocusedRadio = event.target;
  }
});
var isChecked = false;
// give every radio button added blur
var radios = form.querySelectorAll('input[type="radio"]');
radios.forEach(function (radio) {
  radio.addEventListener("blur", function () {
    if (lastFocusedRadio !== this) {
      return;
    }
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        isChecked = true;
        break;
      }
    }
    if (!isChecked) {
      document.getElementById("required15").style.opacity = 1;
      t13 = false;
    } else {
      document.getElementById("required15").style.opacity = 0;
      t13 = true;
    }
  });
});
userCardExpiration.addEventListener("blur", () => {
  if (userCardExpiration.value.trim() === "") {
    document.getElementById("required16").style.opacity = 1;
    t14 = false;
  } else {
    document.getElementById("required16").style.opacity = 0;
    t14 = true;
  }
});
cancelButton.addEventListener("click", () => {
  // Clear form data
  bookingForm.reset();
  form.reset();
  hid.style.display = "none";
  computed.style.display = "none";
  document.getElementById("reg7").style.opacity = 0;
  document.getElementById("reg8").style.opacity = 0;
  document.getElementById("reg9").style.opacity = 0;
  document.getElementById("reg10").style.opacity = 0;
  document.getElementById("reg11").style.opacity = 0;
  document.getElementById("reg12").style.opacity = 0;
  document.getElementById("reg13").style.opacity = 0;
  document.getElementById("reg14").style.opacity = 0;
  document.getElementById("reg15").style.opacity = 0;
  document.getElementById("reg16").style.opacity = 0;
});

// Determine whether the payment is valid
payNowButton.addEventListener("click", () => {
  if (userTitle.value.trim() === "") {
    document.getElementById("required14").style.opacity = 1;
    t12 = false;
  } else {
    document.getElementById("required14").style.opacity = 0;
    t12 = true;
  }
  for (var i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    document.getElementById("required15").style.opacity = 1;
    t13 = false;
  } else {
    document.getElementById("required15").style.opacity = 0;
    t13 = true;
  }
  if (userFirstName.value.trim() === "") {
    document.getElementById("required7").style.opacity = 1;
    t5 = false;
  } else {
    document.getElementById("required7").style.opacity = 0;
    t5 = true;
  }
  if (userCardholderName.value.trim() === "") {
    document.getElementById("required8").style.opacity = 1;
    t6 = false;
  } else {
    document.getElementById("required8").style.opacity = 0;
    t6 = true;
  }
  if (userLastName.value.trim() === "") {
    document.getElementById("required9").style.opacity = 1;
    t7 = false;
  } else {
    document.getElementById("required9").style.opacity = 0;
    t7 = true;
  }
  if (userCardNumber.value.trim()?.length !== 16) {
    document.getElementById("required10").style.opacity = 1;
    t8 = false;
  } else {
    document.getElementById("required10").style.opacity = 0;
    t8 = true;
  }
  const reg = /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/;
  if (!reg.test(userEmail.value)) {
    document.getElementById("required11").style.opacity = 1;
    t9 = false;
  } else {
    document.getElementById("required11").style.opacity = 0;
    t9 = true;
  }
  if (userPhoneNumber.value.trim()?.length !== 11) {
    document.getElementById("required12").style.opacity = 1;
    t10 = false;
  } else {
    document.getElementById("required12").style.opacity = 0;
    t10 = true;
  }
  if (cvv.value.trim()?.length !== 3) {
    document.getElementById("required13").style.opacity = 1;
    t11 = false;
  } else {
    document.getElementById("required13").style.opacity = 0;
    t11 = true;
  }
  if (userCardExpiration.value.trim() === "") {
    document.getElementById("required16").style.opacity = 1;
    t14 = false;
  } else {
    document.getElementById("required16").style.opacity = 0;
    t14 = true;
  }
  if (t5 && t6 && t7 && t8 && t9 && t10 && t11 && t12 && t13 && t14) {
    alert("Booking Successful!");
  }
});
