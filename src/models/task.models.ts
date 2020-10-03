import { observable } from "mobx";

export default class Task {
  private text: string = "";
  private key: number = 0;
  private isDone: Boolean = false;

  constructor(text: string, key: number) {
    this.key = key;
    this.text = text;
    this.isDone = false;
  }

  public get getText(): string {
    return this.text;
  }
  public get getKey(): number {
    return this.key;
  }
  public get getIsDone(): Boolean {
    return this.isDone;
  }

  public setIsDone(done: Boolean) {
    this.isDone = done;
  }
}
