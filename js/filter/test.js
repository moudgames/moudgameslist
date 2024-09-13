data = {
  "Catan": ["Negotiation", "LuckChance"],
  "SecretHitler": ["SocialDeduction"]
};

function myFunction(){
    Object.keys(data).forEach(function(key) {
      console.log('Key : ' + key + ', Value : ' + data[key])
      categories = ""
      for (var i = 0; i < data[key].length; i++) {
        categories += " cat-".concat(data[key][i])
      }
      $("<div />", { class:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 item filterDiv".concat(categories) })
       .append($("<a />", { href:"#"}))
       .append($("<span />", { class: "icon-expand" }))
       .append($("<img />", { src: "images/".concat(key), alt:"Image", class:"img-fluid" }))
       .appendTo(".example-output");
    })
}

