import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(...args: Point[]) {
    super(args);
  }

  getType(): string {
    const firstPoint = this.points[0];
    const secondPoint = this.points[1];
    const thirdPoint = this.points[2];

    const a = secondPoint.distance(firstPoint.x, firstPoint.y);
    const b = thirdPoint.distance(secondPoint.x, secondPoint.y);
    const c = thirdPoint.distance(firstPoint.x, firstPoint.y);

    if (this.compateFloats(b, a) && this.compateFloats(c, b))
      return "equilateral triangle";
    else if (
      this.compateFloats(b, a) ||
      this.compateFloats(c, b) ||
      this.compateFloats(c, a)
    )
      return "isosceles triangle";
    else return "scalene triangle";
  }

  private compateFloats(a: number, b: number) {
    return Math.abs(a - b) < 0.001;
  }

  toString() {
    const pointsToString = this.points.reduce(
      (prev: string, next: Point, index) => {
        return `${prev}v${++index}=${next.toString()},`;
      },
      ""
    );

    const stringLiteral = `Triangle[${pointsToString.slice(0, -1)}]`;
    return stringLiteral;
  }
}
