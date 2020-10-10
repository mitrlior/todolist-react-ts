import { action, computed, makeObservable, observable } from "mobx";

export default class Task {
  private text: string = "";
  private key: number = 0;
  @observable private isDone: Boolean = false;

  constructor(text: string, key: number) {
    this.key = key;
    this.text = text;
    this.isDone = false;
    makeObservable(this);
  }

  public get getText(): string {
    return this.text;
  }
  public get getKey(): number {
    return this.key;
  }
  @computed
  public get getIsDone(): Boolean {
    return this.isDone;
  }
  @action
  public setIsDone(done: Boolean) {
    this.isDone = done;
  }
}
