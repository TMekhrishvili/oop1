import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], ...args: any[]) {
    this.points = points;
    this.color = args[0] || "green";
    this.filled = args[1] === undefined ? true : args[1];

    if (this.points.length < 3)
      throw new Error("'points' must contain at least 3 elements");
  }
  abstract getType(): string;

  toString() {
    const pointsToString = this.points.reduce((prev: string, next: Point) => {
      return prev + next.toString() + ", ";
    }, "");

    const stringLiteral = `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${pointsToString.slice(0, -2)}.`;

    return stringLiteral;
  }

  getPerimeter(): number {
    let perimeter = 0;
    // calculate the distance between every two adjacent points
    for (let i = 1; i < this.points.length; i++) {
      const el = this.points[i];
      const prevEl = this.points[i - 1];
      perimeter += el.distance(prevEl.x, prevEl.y);
    }
    // calculate the distance between the first and last point
    const firstEl = this.points[0];
    const lastEl = this.points[this.points.length - 1];
    perimeter += lastEl.distance(firstEl.x, firstEl.y);
    return perimeter;
  }
}
