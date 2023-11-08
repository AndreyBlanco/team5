import { loadHeaderFooter, alertMessage, removeAllAlerts } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

/*document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutProcess.checkout(e.target);
});*/

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  removeAllAlerts();
  var myForm = document.forms[0];
  var inputs = document.forms[0].getElementsByTagName('input');
  console.log(inputs);
  /*console.log(myForm.reportValidity());*/
  var chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if (chk_status) {
    checkoutProcess.checkout(myForm);
  } else {
    for (var i = 8; i > -1; i--) {
      var chk_input_status = inputs[i].checkValidity();
      console.log(chk_input_status);
      if (!chk_input_status) {
        alertMessage(i);
      };
    };
  }
});
