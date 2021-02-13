import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
import { InputDialog, } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog("#new-image", MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog("#new-video", MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog("#new-note", TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog("#new-todo", TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
        this.page.addChild(new VideoComponent("Video Title", "https://youtu.be/D7cwvvA7cP0"));
        this.page.addChild(new NoteComponent("Note Title", "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
        this.page.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
        this.page.addChild(new VideoComponent("Video Title", "https://youtu.be/D7cwvvA7cP0"));
        this.page.addChild(new NoteComponent("Note Title", "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
    }
    bindElementToDialog(selector, inputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener("click", () => {
            const dialog = new InputDialog();
            const input = new inputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector(".document"), document.body);
