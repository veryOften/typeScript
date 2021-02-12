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
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".viedo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=fCLyJcd3pZs&t=2904s&ab_channel=%EB%88%88%EC%97%90%EB%9D%A0%EB%84%A4
  // https://youtu.be/fCLyJcd3pZs

  // output
  // https://www.youtube.com/embed/fCLyJcd3pZs
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
