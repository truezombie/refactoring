interface ImplementsColor {
  get(): string;
}

class Model {
  public color: ImplementsColor;

  constructor(color: ImplementsColor) {
    this.color = color;
  }
}

class Color implements ImplementsColor {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}

class SilbrigColor extends Color {
  constructor() {
    super("Silbermetallic");
  }
}

class Audi extends Model {
  constructor(color: Color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color: Color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const run = () => {
  const blackBmw = new Bmw(new BlackColor());

  console.log(blackBmw.paint());
};

export default run;
