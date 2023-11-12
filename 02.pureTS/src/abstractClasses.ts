abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Twitter extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log('sepia introduced');
  }
}

const mnn = new Twitter('test', 'test');
