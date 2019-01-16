import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return;
    }
    return `assets/dummy_images/${value}`;
  }
}
