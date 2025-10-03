document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("message").textContent = "✅ Thank you! Your order has been submitted.";
  this.reset();
});
