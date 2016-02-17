import { PassThrough, Stream } from 'stream';

export class SmashStreams extends PassThrough {

  private sources: any[] = [];

  constructor(...streams: any[]) {
    super({ objectMode: true });
    this.setMaxListeners(0);
    this.on('unpipe', (src: any) => this.remove(src));
    streams.forEach((src: any) => this.add(src));
  }

  private consumeStream: Function = (...args: any[]) => this.push.apply(this, args);

  public add(source: Stream | Stream[]): SmashStreams {
    if (Array.isArray(source)) {
      source.forEach((src: any) => this.add(src));
      return this;
    } else {
      this.sources.push(source);

      source.once('end', () => this.remove(source));
      source.on('data', this.consumeStream);
      // source.pipe(this, { end: false });
    }
    return this;
  }

  public remove(source: Stream): SmashStreams {
    this.sources = this.sources.filter((it: any) => {
      let remove: boolean = it !== source;
      if (!remove) {
        source.removeListener('data', this.consumeStream);
      }
      return remove;
    });
    if (this.isEmpty() && this.readable) {
        this.end();
    }
    return this;
  }

  public isEmpty(): boolean {
    return this.length() === 0;
  }

  public length(): number {
    return this.sources.length;
  }

}

export function smashStreams(...streams: Stream[]): SmashStreams {
  return new SmashStreams(streams);
}
