var tooltips = document.querySelectorAll(".pwr-tooltip");
if (tooltips) {
  tooltips.forEach((function(tooltip){
    initPopperTooltip(tooltip.querySelector(".pwr-tooltip__icon"), tooltip.querySelectorAll(".pwr-tooltip__text-wrapper"), {
      placement: "top",
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 10]
        }
      }, {
        name: "flip",
        options: {
          fallbackPlacements: ["bottom", "right", "left"]
        }
      }]
    })
  }
                   ));
}