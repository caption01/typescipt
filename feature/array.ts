const carMarkers: string[] = ["ford", "toyota", "chevy"];

const dates: Date[] = [new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"]];

// help with inference when exiting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// prevent incoming value
// carMarkers.push(100);

//help map/forEach
carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible type
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];

importantDates.push("2020-10-03");
importantDates.push(new Date());
