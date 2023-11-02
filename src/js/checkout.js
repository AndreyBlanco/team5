import { loadHeaderFooter, alertMessage } from "./utils.mjs";
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
  var myForm = document.forms[0];
  /*console.log(myForm.reportValidity());*/
  var chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if (chk_status) {
    checkoutProcess.checkout(myForm);
  } else {
    alertMessage(myForm.reportValidity());
  }
});
