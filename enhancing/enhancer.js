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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
