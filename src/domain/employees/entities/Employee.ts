// UMA ENTIDADE SEMPRE DEVE SE AUTOVALIDAR
import Entity from '../../@shared/entities/entity.abstract';

export default class Employee extends Entity {

  private _name: string = "";
  private _active: boolean = false;

  constructor(id: string, name: string) {
    super();
    this._id = id
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  validate(): void {
    if(this._name === '') {
      throw new Error('name must be filled');
    }

  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }
  
  activate() {
    if (this._name === '') {
      throw new Error('Name is mandatory to activate a employee');
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  isActive(): boolean {
    return this._active;
  }
}