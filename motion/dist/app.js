import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/800/400");
        this.page.addChild(image);
        const video = new VideoComponent("Video Title", "https://www.youtube.com/embed/fCLyJcd3pZs");
        this.page.addChild(video);
        const note = new NoteComponent("Note Title", "Note Body");
        this.page.addChild(note);
        const todo = new TodoComponent("Todo Title", "Todo Body");
        this.page.addChild(todo);
    }
}
new App(document.querySelector(".document"));
