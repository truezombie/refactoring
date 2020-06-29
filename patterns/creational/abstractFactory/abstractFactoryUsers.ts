interface AbstractModalWindow {
  getElementName(): string;
}

interface AbstractButton {
  getElementName(): string;
}

interface AbstractFactoryGUI {
  createModalWindow(): AbstractModalWindow;

  createButton(): AbstractButton;
}

class FactoryMaterialUI implements AbstractFactoryGUI {
  public createModalWindow(): AbstractModalWindow {
    return new MaterialUIModalWindow();
  }

  public createButton(): AbstractButton {
    return new MaterialUIButton();
  }
}

class FactoryNativeUI implements AbstractFactoryGUI {
  public createModalWindow(): AbstractModalWindow {
    return new NativeUIModalWindow();
  }

  public createButton(): AbstractButton {
    return new NativeUIButton();
  }
}

class MaterialUIModalWindow implements AbstractModalWindow {
  public getElementName(): string {
    return "Material UI modal window";
  }
}

class MaterialUIButton implements AbstractButton {
  public getElementName(): string {
    return "Material UI button";
  }
}

class NativeUIModalWindow implements AbstractModalWindow {
  public getElementName(): string {
    return "Native UI modal window";
  }
}

class NativeUIButton implements AbstractButton {
  public getElementName(): string {
    return "Native UI button";
  }
}

console.log("*** TEST ABSTRACT FACTORY EXAMPLE ***");

const clientCode = (factory: AbstractFactoryGUI) => {
  console.log("CLIENT CODE");

  const modalWindow = factory.createModalWindow();
  const button = factory.createButton();

  console.log(modalWindow.getElementName());
  console.log(button.getElementName());
};

const run = () => {
  console.log("MaterialUI GUI elements");
  clientCode(new FactoryMaterialUI());

  console.log("Native GUI elements");
  clientCode(new FactoryNativeUI());
};

export default run;
