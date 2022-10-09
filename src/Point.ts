export class Point {
  x: number;
  y: number;
  constructor();
  constructor(x: number);
  constructor(x: number, y: number);
  constructor(...args: number[]) {
    this.x = args[0] || 0;
    this.y = args[1] || 0;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(x: number, y: number): number;
  distance(...args: any[]): number {
    if (args.length === 1) {
      const other: Point = args[0];
      return this.calculateDistance(other.x, other.y);
    } else if (args.length === 2) {
      return this.calculateDistance(args[0], args[1]);
    } else {
      return this.calculateDistance(0, 0);
    }
  }

  private calculateDistance(x: number, y: number) {
    const squareX = (x - this.x) ** 2;
    const squareY = (y - this.y) ** 2;
    return Math.pow(squareX + squareY, 1 / 2);
  }
}
