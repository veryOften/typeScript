import { BaseComponent } from "./../../component.js";
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
                <h2 class="todo__title"></h2>
                <input type="checkbox" class="todo-checkBox">
            </section>`);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo-checkBox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);
  }
}
