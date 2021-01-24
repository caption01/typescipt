class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Error")
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errMessage);
      }
    };
  };
}

new Boat().pilot("fast");
