export namespace FlyWeightPattern {

    enum BrushSize {
        THIN, MEDIUM, THICK
    }

    export interface Pen {
        setColor(color: string): void;
        draw(content: string): void;
    }

    export class ThickPen implements Pen {

        private color: string;

        constructor(color: string) {
            this.color = color;
        }

        setColor(color: string): void {
            this.color = color;
        }

        draw(content: string): void {
            console.log(BrushSize.THICK + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class ThinPen implements Pen {
        private color!: string;

        setColor(color: string): void {
            this.color = color;
        }

        draw(content: string): void {
            console.log(BrushSize.THIN + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class MediumPen implements Pen {

        private color!: string;

        setColor(color: string): void {
            this.color = color;
        }

        draw(content: string): void {
            console.log(BrushSize.MEDIUM + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class PenFlyWeightFactory {

        private fliesMap: { [s: string]: Pen; } = <any>{};

        constructor() { }

        public getFlyweight(key: string): Pen {

            if (this.fliesMap[key] === undefined || null) {
                console.log('key:::' + key);
                this.fliesMap[key] = new ThickPen(key);
            }
            return this.fliesMap[key];
        }

    }
}