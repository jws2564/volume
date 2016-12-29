import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  getWindow() : any {
  // return the global native browser window object
  return window;
  }

  get nativeWindow() : any {
    return this.getWindow();
  }

}



