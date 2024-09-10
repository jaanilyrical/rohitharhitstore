function outputGram() {
    var rate = document.querySelector('.rate').value;
    var rupee = document.querySelector('.rupee').value;
    var gram = (rupee * 1000) / rate;
  
}
function outputRupee() {
    var rate = document.querySelector('.rate').value;
    var gram = document.querySelector('.gram').value;
    var rupee = (gram * rate) / 1000;
}

