class JavaBuzz {
    _isDivisibleBy(number, divisor) {
        return(number % divisor === 0);
    }

    isDivisibleByFifteen(number) {
      return(this._isDivisibleBy(number,15));
    }

    isDivisibleByFive(number) {
      return(this._isDivisibleBy(number,5));
    }

    isDivisibleByThree(number) {
      return(this._isDivisibleBy(number,3));
    }

    game(number) {
      if (this.isDivisibleByFifteen(number)) {
        return "JavaBuzz";
      }
      if (this.isDivisibleByThree(number)) {
        return "Java";
      }
      if (this.isDivisibleByFive(number)) {
        return "Buzz";
      }
      return number;
    }


}
