
function produceDrivingRange ( blockRange ) {
  return function ( startTrip, endTrip ) {

    let start = parseInt( startTrip )
    let end = parseInt ( endTrip )
    let distance = Math.abs ( end - start )
    let difference = blockRange - distance

    if ( difference > 0 ){
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

const produceTipCalculator = function (percent) {
  return function (fare){
    return fare * percent;
  }
}

function createDriver(){
  let driverID = 0
  return class {
    constructor(name){
      this.id = ++driverID;
      this.name = name;
    }
  }
}
