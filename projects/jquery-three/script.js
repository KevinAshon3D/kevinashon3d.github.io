$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
  var allGuardians = $.merge(oldGuardians, newGuardians);
  console.log(allGuardians);
  
  var allNames = $.map(allGuardians, function(element, index){
      return element.name;
  });
  
  console.log(allNames);
  
  var allFirstNames = $.map(allGuardians, function(element, index){
      return element.name.split(" ")[0];
  });
  
  console.log(allFirstNames);
  
  
  
  
  
  // ALL YOUR CODE ABOVE HERE //
});