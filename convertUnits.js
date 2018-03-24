const conversionTable = require('./conversionTable');

function convertUnits(units) {
  // base case
  const simpleUnit = units.match(
    /^(minute|min|hour|h|day|d|degree|°|'|second|"|hectare|ha|litre|L|tonne|t)$/,
  );
  if (simpleUnit) {
    const unit = simpleUnit[1];
    return conversionTable[unit];
  }

  // string with outer parens
  const parens = units.match(/^\((.+)\)$/);
  if (parens) {
    const converted = convertUnits(parens[1]);
    if (!converted) return null;
    return {
      unit_name: `(${converted.unit_name})`,
      multiplication_factor: converted.multiplication_factor,
    };
  }

  // string with multiplication, optional inner parens
  const multiplyRegex = /^((?:\(.+\))|(?:[^()]+))\*((?:\(.+\))|(?:[^()]+))$/;
  const multiply = units.match(multiplyRegex);
  if (multiply) {
    const factor1 = convertUnits(multiply[1]);
    const factor2 = convertUnits(multiply[2]);
    if (!factor1 || !factor2) return null;
    return {
      unit_name: `${factor1.unit_name}*${factor2.unit_name}`,
      multiplication_factor: factor1.multiplication_factor * factor2.multiplication_factor,
    };
  }

  // string with division, optional parens
  const divideRegex = /^((?:\(.+\))|(?:[^()]+))\/((?:\(.+\))|(?:[^()]+))$/;
  const divide = units.match(divideRegex);
  if (divide) {
    const numerator = convertUnits(divide[1]);
    const denominator = convertUnits(divide[2]);
    if (!(numerator && denominator)) return null;
    return {
      unit_name: `${numerator.unit_name}/${denominator.unit_name}`,
      multiplication_factor: numerator.multiplication_factor / denominator.multiplication_factor,
    };
  }

  return null;
}

module.exports = convertUnits;
