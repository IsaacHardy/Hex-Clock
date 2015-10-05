(function (){

  // Time function
  function clock () {

    // Create new Date
    var today = new Date();
    // Specify date hour/minute/second variables
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    // Jquery Assignment to text ID
    var hourZero = (hours < 10) 
      ? $('#hour').text('#0' + hours) : $('#hour').text('#' + hours);
    var minZero = (minutes < 10) 
      ? $('#minute').text('0' + minutes) : $('#minute').text(minutes);
    var secZero = (seconds < 10) 
      ? $('#second').text('0' + seconds) : $('#second').text(seconds);

    // Varable to combine time into one number
    var total = hourZero.text() + minZero.text() + secZero.text();
    console.log(total);

    // Changes background color based upon var total
    var totalNum = $('body').css('background-color', total);
    console.log(totalNum);

  };

  // Call clock Function
  clock();

  // Run function clock every 1000 miliseconds
  setInterval(clock,1000);

}());