$(document).ready(function() {
  $('.start').on('click', function() {
    var myClass = new MyClass();

    var a = function() {
      $.ajax({
        url: 'image.png',
        success: function() {
          alert('new complete');
          myClass.markDone();
        }
      });
    };

    myClass.register(a);
    myClass.callbackSetTimeAndExecute(1);
    myClass.start();
  });
});
