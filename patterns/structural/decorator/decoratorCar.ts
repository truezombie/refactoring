interface CarProps {
  getPrice(): number;
  getDescription(): string;
}

class Car implements CarProps {
  public price: number;
  public model: string;

  constructor() {
    this.price = 10000;
    this.model = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();

    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  public car: CarProps;

  constructor(car: CarProps) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  public car: CarProps;

  constructor(car: CarProps) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

const run = () => {
  const teslaReference = new Tesla();

  const teslaWithAutopilot = new Autopilot(teslaReference);
  const teslaWithAutopilotAndParktronic = new Parktronic(teslaWithAutopilot);

  console.log(
    teslaWithAutopilotAndParktronic.getPrice(),
    teslaWithAutopilotAndParktronic.getDescription()
  );

  const teslaWithAutopilot2 = new Autopilot(teslaReference);
  console.log(
    teslaWithAutopilot2.getPrice(),
    teslaWithAutopilot2.getDescription()
  );
};

export default run;
