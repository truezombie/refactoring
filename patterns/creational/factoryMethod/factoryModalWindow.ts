interface ModalWindow {
  getModalWindowName(): string;
}

abstract class ModalWindowCreator {
  public abstract factoryMethod(): ModalWindow;

  public getModalWindowName(): string {
    const car = this.factoryMethod();

    return `Was called getModalWindowName() method for modalWindow: ${car.getModalWindowName()}`;
  }
}

class CreatorConfirmModalWindow extends ModalWindowCreator {
  public factoryMethod(): ModalWindow {
    return new ConfirmModalWindow();
  }
}

class CreatorFormModalWindow extends ModalWindowCreator {
  public factoryMethod(): ModalWindow {
    return new FormModalWindow();
  }
}

class ConfirmModalWindow implements ModalWindow {
  public getModalWindowName(): string {
    return "ConfirmModalWindow";
  }
}

class FormModalWindow implements ModalWindow {
  public getModalWindowName(): string {
    return "FormModalWindow";
  }
}

console.log("*** TEST FACTORY EXAMPLE ***");

const clientCode = (modalWindow: ModalWindow) => {
  console.log("CLIENT CODE");
  console.log(modalWindow.getModalWindowName());
};

const run = () => {
  const confirmModalWindow = new CreatorConfirmModalWindow();
  clientCode(confirmModalWindow);

  const formModalWindow = new CreatorFormModalWindow();
  clientCode(formModalWindow);
};

export default run;
