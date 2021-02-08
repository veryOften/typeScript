import { BaseComponent } from "./../../component.js";
export class VideoComponent extends BaseComponent<HTMLVideoElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="viedo__title"></h3>
        </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = url; // url -> videoId -> embed

    const titleElement = this.element.querySelector(
      ".viedo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// input
// https://www.youtube.com/watch?v=fCLyJcd3pZs&t=2904s&ab_channel=%EB%88%88%EC%97%90%EB%9D%A0%EB%84%A4
// https://youtu.be/fCLyJcd3pZs

// output
// https://www.youtube.com/embed/fCLyJcd3pZs

// <iframe width="560" height="315" src="https://www.youtube.com/embed/fCLyJcd3pZs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
