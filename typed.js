(function() {
    let i = 0;
    let txt = 'Dion Arya Pamungkas';
    let speed = 90;
    typeWriter();

  function typeWriter() {
   
    if (i < txt.length) {
      document.getElementById("name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  
    }
 })();
