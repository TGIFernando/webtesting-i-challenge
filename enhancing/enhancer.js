module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enchancement === 20){
    return {... item}
  } else {
    return {... item, enchancement: item.enchancement + 1}
  } 
}

function fail(item) {
  if (item.enchancement === 20){
    return {...item, enchancement: item.enchancement - 5}
  } else if (item.enchancement > 10) {
    return {...item, enchancement: item.enchancement - 3}
  } else {
    return {... item, enchancement: item.enchancement - 1}
  }
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
