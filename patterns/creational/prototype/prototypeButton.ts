class ButtonPrototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: ButtonPrototype) {
    this.prototype = prototype;
  }
}

const run = () => {
  const button1 = new ButtonPrototype();
  button1.primitive = 100;
  button1.component = new Date();
  button1.circularReference = new ComponentWithBackReference(button1);

  const button2 = button1.clone();

  if (button1.primitive === button2.primitive) {
    console.log(
      "Primitive field values have been carried over to a clone. Yay!"
    );
  } else {
    console.log("Primitive field values have not been copied. Booo!");
  }

  if (button1.component === button2.component) {
    console.log("Simple component has not been cloned. Booo!");
  } else {
    console.log("Simple component has been cloned. Yay!");
  }

  if (button1.circularReference === button2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (
    button1.circularReference.prototype === button2.circularReference.prototype
  ) {
    console.log(
      "Component with back reference is linked to original object. Booo!"
    );
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
};

export default run;
