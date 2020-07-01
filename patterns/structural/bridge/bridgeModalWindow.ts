class AbstractionModalWindow {
  protected implementation: ModalWindowImplementation;

  constructor(implementation: ModalWindowImplementation) {
    this.implementation = implementation;
  }

  public open(): void {
    this.implementation.setOpen();
  }

  public showModalState(): void {
    console.log(this.implementation.getModalWindowState());
  }
}

class CustomAbstractionModalWindow extends AbstractionModalWindow {
  public showModalState(): void {
    console.log(`CUSTOM: ${this.implementation.getModalWindowState()}`);
  }
}

interface ModalWindowImplementation {
  isOpen: boolean;
  setOpen(): void;
  getModalWindowState(): string;
}

class ConfirmModalWindow implements ModalWindowImplementation {
  public isOpen = false;

  public setOpen(): void {
    this.isOpen = !this.isOpen;
  }

  public getModalWindowState() {
    return `Modal window state: ${this.isOpen}`;
  }
}

class CustomModalWindow implements ModalWindowImplementation {
  public isOpen = false;

  public setOpen(): void {
    this.isOpen = !this.isOpen;
  }

  public getModalWindowState() {
    return `Modal window state: ${this.isOpen}`;
  }
}

const run = () => {
  const confirmModalWindow = new AbstractionModalWindow(
    new ConfirmModalWindow()
  );

  confirmModalWindow.open();
  confirmModalWindow.showModalState();
  console.log("---");

  const customModalWindow = new CustomAbstractionModalWindow(
    new CustomModalWindow()
  );
  customModalWindow.open();
  customModalWindow.showModalState();
};

export default run;
