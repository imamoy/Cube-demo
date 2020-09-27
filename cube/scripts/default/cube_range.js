var totalPrice_slider = document.getElementById('totalPrice_range');
var totalPrice_Value = document.getElementById('totalPrice_amount');
var pings_slider = document.getElementById('pings-range');
var pings_Value = document.getElementById('pings_amount');
var migration_slider = document.getElementById('migration-range');
var migration_Value = document.getElementById('migration_amount');
var MRT_slider = document.getElementById('MRT-range');
var MRT_Value = document.getElementById('MRT_amount');
var bus_slider = document.getElementById('bus-range');
var bus_Value = document.getElementById('bus_amount');
var mart_slider = document.getElementById('mart-range');
var mart_Value = document.getElementById('mart_amount');

// Total Price slider
noUiSlider.create(totalPrice_slider, {
    start: [500, 1500],
    connect: true,
    range: {
        'min': 0,
        'max': 3000
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
totalPrice_slider.noUiSlider.on('update', function (values) {
  totalPrice_Value.innerHTML = values.join(' - ');
});


// pings_slider
noUiSlider.create(pings_slider, {
  start: [20, 30],
  connect: true,
  range: {
      'min': 0,
      'max': 100
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
pings_slider.noUiSlider.on('update', function (values) {
pings_Value.innerHTML = values.join(' - ');
});


// migration_slider
noUiSlider.create(migration_slider, {
  start: [0, 3],
  step: 1,
  connect: true,
  range: {
      'min': -100,
      'max': 100
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
migration_slider.noUiSlider.on('update', function (values) {
migration_Value.innerHTML = values.join(' - ');
});

// MRT_slider
noUiSlider.create(MRT_slider, {
  start: 50,
  behaviour: 'tap',
  connect: [true,false],
  range: {
      'min': 0,
      'max': 60
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
MRT_slider.noUiSlider.on('update', function (values) {
  MRT_Value.innerHTML = values;
});

// bus_slider
noUiSlider.create(bus_slider, {
    start: 20,
    behaviour: 'tap',
    connect: [true,false],
    range: {
        'min': 0,
        'max': 60
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
bus_slider.noUiSlider.on('update', function (values) {
  bus_Value.innerHTML = values;
});

// bus_slider
noUiSlider.create(mart_slider, {
  start: 20,
  behaviour: 'tap',
  connect: [true,false],
  range: {
      'min': 0,
      'max': 60
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
mart_slider.noUiSlider.on('update', function (values) {
mart_Value.innerHTML = values;
});