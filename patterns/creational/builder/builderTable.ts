interface BuilderTable {
  addMinimalTable(): void;
  addCheckboxes(): void;
  addPagination(): void;
  addSearch(): void;
  addTotals(): void;
}

class ConcreteTable implements BuilderTable {
  private table: Table;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.table = new Table();
  }

  public addMinimalTable(): void {
    this.table.parts.push("DEFAULT");
  }

  public addCheckboxes(): void {
    this.table.parts.push("CHECKBOXES");
  }

  public addPagination(): void {
    this.table.parts.push("PAGINATION");
  }

  public addSearch(): void {
    this.table.parts.push("SEARCH");
  }

  public addTotals(): void {
    this.table.parts.push("TOTALS");
  }

  public getTable(): Table {
    const result = this.table;
    this.reset();
    return result;
  }
}

class Table {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Table parts: ${this.parts.join(", ")}\n`);
  }
}

class TableDirector {
  private builder: BuilderTable;

  public setBuilder(builder: BuilderTable): void {
    this.builder = builder;
  }

  public buildMinimalTable(): void {
    this.builder.addMinimalTable();
  }

  public buildFullFeaturesTable(): void {
    this.builder.addMinimalTable();
    this.builder.addCheckboxes();
    this.builder.addPagination();
    this.builder.addSearch();
    this.builder.addTotals();
  }
}

console.log("*** TEST BUILDER EXAMPLE ***");

const clientCode = (director: TableDirector) => {
  const builder = new ConcreteTable();
  director.setBuilder(builder);

  console.log("BASIC TABLE");
  director.buildMinimalTable();
  builder.getTable().listParts();

  console.log("FULL FEATURES TABLES");
  director.buildFullFeaturesTable();
  builder.getTable().listParts();

  console.log("CUSTOM PRODUCT");
  builder.addMinimalTable();
  builder.addCheckboxes();
  builder.getTable().listParts();
};

const run = () => {
  const director = new TableDirector();

  clientCode(director);
};

export default run;
