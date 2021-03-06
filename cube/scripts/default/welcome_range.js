var confidence_slider = document.getElementById('confidence_range');
var confidence_Value = document.getElementById('confidence_amount');

// confidence
noUiSlider.create(confidence_slider, {
    start: [0, 10],
    connect: true,
    range: {
        'min': 0,
        'max': 10
    },
    format: {
      from: function(value) {
              return parseInt(value);
          },
      to: function(value) {
              return parseInt(value);
      }
    }
});
confidence_slider.noUiSlider.on('update', function (values) {
  confidence_Value.innerHTML = values.join(' - ');
});


var confidence_slider2 = document.getElementById('confidence_range2');
var confidence_Value2 = document.getElementById('confidence_amount2');

// confidence
noUiSlider.create(confidence_slider2, {
    start: [0, 10],
    connect: true,
    range: {
        'min': 0,
        'max': 10
    },
    format: {
      from: function(value) {
              return parseInt(value);
          },
      to: function(value) {
              return parseInt(value);
      }
    }
});
confidence_slider2.noUiSlider.on('update', function (values) {
  confidence_Value2.innerHTML = values.join(' - ');
});
