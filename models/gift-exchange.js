const { NotFoundError, BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    /* 
    if (!names){
      error
    }
    const isOdd = names.length % 2 === 1;
    if(isOdd){
      error
    }

    */
    if (names.length % 2 === 1)
      throw new BadRequestError("Length of names cannot be odd");

    let temp = [...names];
    let pairings = [];
    while (temp.length > 0) {
      let firstName = Math.floor(Math.random() * temp.length);
      let name1 = temp[firstName];
      temp.splice(firstName, 1);
      let secondName = Math.floor(Math.random() * temp.length);
      let name2 = temp[secondName];
      temp.splice(secondName, 1);
      pairings.push([name1, name2]);
    }
    return pairings;
  }

  static traditional(names) {
    let temp = [...names];
    let exchangeLines = [];
    // shuffles
    temp.sort(function () {
      return 0.5 - Math.random();
    });
    //let current = temp.pop()

    let current = temp[0];
    let last = temp[temp.length - 1];
    for (let i = 0; i < temp.length - 1; i++) {
      let name1 = temp[i];
      let name2 = temp[i + 1];
      exchangeLines.push(name1 + " is giving a gift to " + name2);
    }
    exchangeLines.push(last + " is giving a gift to " + current);
    return exchangeLines;
  }
}

module.exports = GiftExchange;
