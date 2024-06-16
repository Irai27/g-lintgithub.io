function animateValue(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime * 2); 
    }

   
     animateValue("happyClients1", 1, 11000, 25000);
    animateValue("happyClients2", 10, 12000, 15000); 
    animateValue("happyClients3", 20, 20000, 20000); 
    animateValue("happyClients4", 90, 22000, 25000);