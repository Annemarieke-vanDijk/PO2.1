  function show(divID) {
    var item = document.getElementById(divID);
    var item1 = document.getElementById('Home');
    var item2 = document.getElementById('Decimaal_Binair');
    var item3 = document.getElementById('Euro_Dollar');
    var item4 = document.getElementById('Inkomen');
    var item5 = document.getElementById('De_makers');
    
    if (item == item1) {
      item1.className = "visible";
      item2.className = "hidden";
      item3.className = "hidden";
      item4.className = "hidden";
      item5.className = "hidden";
    };
    if (item == item2) {
      item1.className = "hidden";
      item2.className = "visible";
      item3.className = "hidden";
      item4.className = "hidden";
      item5.className = "hidden";
    };
    if (item == item3) {
      item1.className = "hidden";
      item2.className = "hidden";
      item3.className = "visible";
      item4.className = "hidden";
      item5.className = "hidden";
    };
    if (item == item4) {
      item1.className = "hidden";
      item2.className = "hidden";
      item3.className = "hidden";
      item4.className = "visible";
      item5.className = "hidden";
    };
    if (item == item5) {
      item1.className = "hidden";
      item2.className = "hidden";
      item3.className = "hidden";
      item4.className = "hidden";
      item5.className = "visible";
    };
  }