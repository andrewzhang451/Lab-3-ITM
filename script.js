document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    form.addEventListener('input', function() {
      const billTotal = parseFloat(document.getElementById('billTotal').value);
      const tipSlider = parseFloat(document.getElementById('tipSlider').value);
      
      if(isNaN(billTotal)) {
        alert("Please enter a valid number for Bill Total");
        return;
      }
      
      const tipPercentage = tipSlider;
      const tipAmount = (billTotal * tipPercentage / 100).toFixed(2);
      const totalBill = (billTotal + parseFloat(tipAmount)).toFixed(2);
      
      document.getElementById('tipPercentage').value = tipPercentage;
      document.getElementById('tipAmount').value = tipAmount;
      document.getElementById('totalBill').value = totalBill;
        
    });
  });
  
