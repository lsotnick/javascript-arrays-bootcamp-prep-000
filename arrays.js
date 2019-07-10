var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

function addElementToBeginningOfArray () {
  var cities = ["NY", "SF"]
  return ["Philly", ...cities]
}

function destructivelyAddElementToBeginningOfArray () {
  var cities = ["SF", "Atlanta"]
  return cities.unshift("New York")
}