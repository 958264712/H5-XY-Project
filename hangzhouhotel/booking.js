// get form element
const booking = document.getElementById("booking");
const computedDiv = document.getElementById("computedDiv");
const cost = document.getElementById("cost");
const Arrival = booking.querySelector("#Arrival");
const Departure = booking.querySelector("#Departure");
const Single = booking.querySelector("#Single");
const Double = booking.querySelector("#Double");
const Aduits = booking.querySelector("#Aduits");
const Children = booking.querySelector("#Children");
const CalculateBtn = booking.querySelector("#CalculateBtn");

const form = document.getElementById("cardForm");
const Title = form.querySelector("#Title");
var radioGroup = document.getElementsByName("pay");
const FirstName = form.querySelector("#FirstName");
const CardholderName = form.querySelector("#CardholderName");
const LastName = form.querySelector("#LastName");
const CardNumber = form.querySelector("#CardNumber");
const Email = form.querySelector("#Email");
const CardExpiration = form.querySelector("#CardExpiration");
const PhoneNumber = form.querySelector("#PhoneNumber");
const cvv = form.querySelector("#cvv");
const cancelButton = form.querySelector("#cancelButton");
const payNowButton = form.querySelector("#payNowButton");
const hid = document.getElementById("hidden");

var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14;


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
  verification()
  if (t1 && t2 && t3 && t4) {
    var single = 0,
      double = 0,
      dateNum = 0;
    if (Single.value > 0) {
      single = 200 * Single.value;
    }
    if (Double.value > 0) {
      double = 300 * Double.value;
    }
    if (Arrival.value.tirm !== 0 && Departure.value.tirm !== 0) {
      dateNum = calculateStayDuration(Arrival.value, Departure.value);
    }
    cost.innerText = single * dateNum + double * dateNum;
    computedDiv.style.display = "inline-block";
    hid.style.display = "block";
  } else {
    computedDiv.style.display = "none";
    hid.style.display = "none";
    return;
  }
});
function verification() {
  // Check-in time verification
  if (Arrival.value.trim() === "") {
    document.getElementById("reg1").style.opacity = 1;
    t1 = false;
  } else {
    document.getElementById("reg1").style.opacity = 0;
    t1 = true;
  }
  // Departure time verification
  if (Departure.value.trim() === "") {
    document.getElementById("reg2").style.opacity = 1;
    t2 = false;
  } else {
    document.getElementById("reg2").style.opacity = 0;
    t2 = true;
  }
  // Room type quantity verification
  if (Single.value < 1 && Double.value < 1) {
    document.getElementById("reg3").style.opacity = 1;
    t3 = false;
  } else {
    document.getElementById("reg3").style.opacity = 0;
    t3 = true;
  }
  // Room type quantity verification
  if (Single.value < 1 && Double.value < 1) {
    document.getElementById("reg4").style.opacity = 1;
    t3 = false;
  } else {
    document.getElementById("reg4").style.opacity = 0;
    t3 = true;
  }
  // Guest type number verification
  if (Aduits.value < 1 && Children.value < 1) {
    document.getElementById("reg5").style.opacity = 1;
    t4 = false;
  } else {
    document.getElementById("reg5").style.opacity = 0;
    t4 = true;
  }
  // Guest type number verification
  if (Aduits.value < 1 && Children.value < 1) {
    document.getElementById("reg6").style.opacity = 1;
    t4 = false;
  } else {
    document.getElementById("reg6").style.opacity = 0;
    t4 = true;
  }
}

//Add blur events to all items in the form
var inputsAndSelects = form.querySelectorAll("input, select");
inputsAndSelects.forEach((item) => {
  item.addEventListener("blur", () => {
    if (item.id === "FirstName") {
      if (FirstName.value.trim() === "") {
        document.getElementById("reg7").style.opacity = 1;
        t5 = false;
      } else {
        document.getElementById("reg7").style.opacity = 0;
        t5 = true;
      }
    }
    if (item.id === "CardholderName") {
      if (CardholderName.value.trim() === "") {
        document.getElementById("reg8").style.opacity = 1;
        t6 = false;
      } else {
        document.getElementById("reg8").style.opacity = 0;
        t6 = true;
      }
    }
    if (item.id === "LastName") {
      if (LastName.value.trim() === "") {
        document.getElementById("reg9").style.opacity = 1;
        t7 = false;
      } else {
        document.getElementById("reg9").style.opacity = 0;
        t7 = true;
      }
    }
    if (item.id === "CardNumber") {
      if (CardNumber.value.trim()?.length !== 16) {
        document.getElementById("reg10").style.opacity = 1;
        t8 = false;
      } else {
        document.getElementById("reg10").style.opacity = 0;
        t8 = true;
      }
    }
    if (item.id === "Email") {
      const reg = /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/;
      if (!reg.test(Email.value)) {
        document.getElementById("reg11").style.opacity = 1;
        t9 = false;
      } else {
        document.getElementById("reg11").style.opacity = 0;
        t9 = true;
      }
    }
    if (item.id === "PhoneNumber") {
      if (PhoneNumber.value.trim()?.length !== 11) {
        document.getElementById("reg12").style.opacity = 1;
        t10 = false;
      } else {
        document.getElementById("reg12").style.opacity = 0;
        t10 = true;
      }
    }
    if (item.id === "cvv") {
      if (cvv.value.trim()?.length !== 3) {
        document.getElementById("reg13").style.opacity = 1;
        t11 = false;
      } else {
        document.getElementById("reg13").style.opacity = 0;
        t11 = true;
      }
    }
    if (item.id === "Title") {
      if (Title.value.trim() === "") {
        document.getElementById("reg14").style.opacity = 1;
        t12 = false;
      } else {
        document.getElementById("reg14").style.opacity = 0;
        t12 = true;
      }
    }
    if (item.id === "CardExpiration") {
      if (CardExpiration.value.trim() === "") {
        document.getElementById("reg16").style.opacity = 1;
        t14 = false;
      } else {
        document.getElementById("reg16").style.opacity = 0;
        t14 = true;
      }
    }
    
  });
});

var focusedRadio = null;
form.addEventListener("focusin", function (event) {
  if (event.target.type === "radio") {
    focusedRadio = event.target;
  }
});
var isChecked = false;
// give every radio button added blur
var radios = form.querySelectorAll('input[type="radio"]');
radios.forEach(function (radio) {
  radio.addEventListener("blur", function () {
    if (focusedRadio !== this) {
      return;
    }
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        isChecked = true;
        break;
      }
    }
    if (!isChecked) {
      document.getElementById("reg15").style.opacity = 1;
      t13 = false;
    } else {
      document.getElementById("reg15").style.opacity = 0;
      t13 = true;
    }
  });
});


cancelButton.addEventListener("click", () => {
  // Clear form data
  booking.reset();
  form.reset();
  hid.style.display = "none";
  computedDiv.style.display = "none";
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
  validFun()
  if (t5 && t6 && t7 && t8 && t9 && t10 && t11 && t12 && t13 && t14) {
    alert("Booking Successful!");
  }
});
function validFun() {
  if (Title.value.trim() === "") {
    document.getElementById("reg14").style.opacity = 1;
    t12 = false;
  } else {
    document.getElementById("reg14").style.opacity = 0;
    t12 = true;
  }
  for (var i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    document.getElementById("reg15").style.opacity = 1;
    t13 = false;
  } else {
    document.getElementById("reg15").style.opacity = 0;
    t13 = true;
  }
  if (FirstName.value.trim() === "") {
    document.getElementById("reg7").style.opacity = 1;
    t5 = false;
  } else {
    document.getElementById("reg7").style.opacity = 0;
    t5 = true;
  }
  if (CardholderName.value.trim() === "") {
    document.getElementById("reg8").style.opacity = 1;
    t6 = false;
  } else {
    document.getElementById("reg8").style.opacity = 0;
    t6 = true;
  }
  if (LastName.value.trim() === "") {
    document.getElementById("reg9").style.opacity = 1;
    t7 = false;
  } else {
    document.getElementById("reg9").style.opacity = 0;
    t7 = true;
  }
  if (CardNumber.value.trim()?.length !== 16) {
    document.getElementById("reg10").style.opacity = 1;
    t8 = false;
  } else {
    document.getElementById("reg10").style.opacity = 0;
    t8 = true;
  }
  const reg = /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/;
  if (!reg.test(Email.value)) {
    document.getElementById("reg11").style.opacity = 1;
    t9 = false;
  } else {
    document.getElementById("reg11").style.opacity = 0;
    t9 = true;
  }
  if (PhoneNumber.value.trim()?.length !== 11) {
    document.getElementById("reg12").style.opacity = 1;
    t10 = false;
  } else {
    document.getElementById("reg12").style.opacity = 0;
    t10 = true;
  }
  if (cvv.value.trim()?.length !== 3) {
    document.getElementById("reg13").style.opacity = 1;
    t11 = false;
  } else {
    document.getElementById("reg13").style.opacity = 0;
    t11 = true;
  }
  if (CardExpiration.value.trim() === "") {
    document.getElementById("reg16").style.opacity = 1;
    t14 = false;
  } else {
    document.getElementById("reg16").style.opacity = 0;
    t14 = true;
  }
}
