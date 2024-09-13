data = {
  "Catan": ["Negotiation", "LuckChance"],
  "Secret Hitler": ["SocialDeduction"],
  "Scout": ["Card"],
  "Coup": ["SocialDeduction", "Card"],
  "Parks": ["Others"],
  "Dead Of Winter": ["AdventureSurvival"],
  "Wingspan": ["EngineBuilder"],
  "Chinatown": ["Negotiation", "LuckChance"],
  "Taboo": ["Word", "Party"],
  "Codenames": ["Word", "Party"],
  "Citadels": ["SocialDeduction","Card"],
  "Ice Cool": ["Others"],
  "Scout": ["Card"],
  "Exploding Kittens": ["Card","Party"],
  "Bag Of Chips": ["Party","LuckChance"],
  "Singaporean Dream": ["Card"],
  "Hawker Wars": ["Card"],
  "Uno": ["Card"],
  "Bodyguard": ["SocialDeduction"],
  "Bruxelles 1897": ["Card"],
  "Avalon": ["SocialDeduction"],
  "Cheese Thief": ["SocialDeduction"],
  "7 Wonders": ["EngineBuilder","Card"],
  "A Little Wordy": ["Word", "Party"],
  "Munchkin - Adventure Time": ["Card","AdventureSurvival"],
  "Fallout": ["AdventureSurvival"],
  "Jenga": ["Party"],
  "Splendor": ["Card"],
  "Werewords": ["Word", "Party", "Social Deduction"]
};

function loadGames(){
    Object.keys(data).forEach(function(key) {
      console.log('Key : ' + key + ', Value : ' + data[key])
      categories = ""
      for (var i = 0; i < data[key].length; i++) {
        categories += " cat-".concat(data[key][i])
      }
      $("<div />", { class:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 item show filterDiv".concat(categories), abc:"1", "data-aos":"fade", "data-src": "images/".concat(key.concat('.png')) })
       .append($("<a />", { href:"#"}))
       .append($("<span />", { class: "icon-expand" }))
       .append($("<img />", { src: "images/".concat(key.concat('.png')), alt:"Image", class:"img-fluid" }))
       .appendTo(".example-output");
    })
}