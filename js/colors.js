var colorSchemeArray = [];
colorSchemeArray = [{
    schemeName: "standart",
    colorHeader: "rgb(135 170 170 / 59%)",
    colorSidebarLeft: "rgb(246 215 167 / 68%)",
    colorTopic: "rgb(246 234 190 / 54%)"
  },

  {
    schemeName: "sea",
    colorHeader: "rgb(124 131 253 / 58%)",
    colorSidebarLeft: "rgba(125, 237, 255, 0.53)",
    colorTopic: "rgb(150 186 255 / 52%)"
  },

  {
    schemeName: "cappuchino",
    colorHeader: "rgba(131, 88, 88, 0.7)",
    colorSidebarLeft: "#EBD4D4",
    colorTopic: "#FFF0F0"
  },
  
  {
    schemeName: "autumn",
    colorHeader: "rgb(156 61 84 / 76%)",
    colorSidebarLeft: "rgb(226 112 58 / 62%)",
    colorTopic: "rgb(238 183 107 / 75%)"
  },
  
  {
    schemeName: "bvb",
    colorHeader: "#595260",
    colorSidebarLeft: "#FFD523",
    colorTopic: "#B2B1B9",
  },
  
  {
    schemeName: "lime",
    colorHeader: "rgb(46 193 172 / 51%)",
    colorSidebarLeft: "rgb(210 230 3 / 49%)",
    colorTopic: "rgb(239 244 142 / 53%)",
  },
  
  {
    schemeName: "summer",
    colorHeader: "rgb(255 132 124 / 85%)",
    colorSidebarLeft: "rgb(153 184 152 / 65%)",
    colorTopic: "#FECEAB",
  },
  
  {
    schemeName: "sun",
    colorHeader: "#FFEC85",
    colorSidebarLeft: "#C9F0D6",
    colorTopic: "#F2FFDF",
  },
  
  {
    schemeName: "pastel",
    colorHeader: "#F7DAD9",
    colorSidebarLeft: "#FFF5DA",
    colorTopic: "#D6D2C4",
  }
]

// console.log(colorSchemeArray.length)

$(document).ready(function() {
  $(".color_schema_button").click(function() {
    var buttonId = $(this).attr('id');
    console.log(buttonId);
    for (var i = 0; i < colorSchemeArray.length; i++) {
      console.log(colorSchemeArray[i].schemeName)
      if (buttonId == colorSchemeArray[i].schemeName) {
        var styleId = i;
        $('.header').css('backgroundColor', colorSchemeArray[styleId].colorHeader);
        $('.sidebar_left').css('backgroundColor', colorSchemeArray[styleId].colorSidebarLeft);
        $('h4').css('backgroundColor', colorSchemeArray[styleId].colorTopic);
      }
    }
  });
})
