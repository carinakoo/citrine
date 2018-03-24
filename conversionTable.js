const conversionTable = {
  minute: {
    unit_name: 's',
    multiplication_factor: 60,
  },
  min: {
    unit_name: 's',
    multiplication_factor: 60,
  },
  hour: {
    unit_name: 's',
    multiplication_factor: 3600,
  },
  h: {
    unit_name: 's',
    multiplication_factor: 3600,
  },
  day: {
    unit_name: 's',
    multiplication_factor: 86400,
  },
  d: {
    unit_name: 's',
    multiplication_factor: 86400,
  },
  degree: {
    unit_name: 'rad',
    multiplication_factor: Math.PI / 180,
  },
  '°': {
    unit_name: 'rad',
    multiplication_factor: Math.PI / 180,
  },
  "'": {
    unit_name: 'rad',
    multiplication_factor: Math.PI / 10800,
  },
  second: {
    unit_name: 'rad',
    multiplication_factor: Math.PI / 648000,
  },
  '"': {
    unit_name: 'rad',
    multiplication_factor: Math.PI / 648000,
  },
  hectare: {
    unit_name: 'm_squared',
    multiplication_factor: 10000,
  },
  ha: {
    unit_name: 'm_squared',
    multiplication_factor: 10000,
  },
  litre: {
    unit_name: 'm_cubed',
    multiplication_factor: 0.001,
  },
  L: {
    unit_name: 'm_cubed',
    multiplication_factor: 0.001,
  },
  tonne: {
    unit_name: 'kg',
    multiplication_factor: 1000,
  },
  t: {
    unit_name: 'kg',
    multiplication_factor: 1000,
  },
};

module.exports = conversionTable;
