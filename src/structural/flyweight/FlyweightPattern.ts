export namespace FlyWeightPattern {

    enum BrushSize {
        THIN, MEDIUM, THICK
    }

    export interface Pen {
        draw(content: string): void;
    }

    export class ThickPen implements Pen {

        brushSize: BrushSize = BrushSize.THICK; // intrinsic
        private color: string; // extrinsic

        constructor(color: string) {
            this.color = color;
        }

        draw(content: string): void {
            console.log(this.brushSize + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class ThinPen implements Pen {

        brushSize: BrushSize = BrushSize.THIN; // intrinsic
        private color: string; // extrinsic

        constructor(color: string) {
            this.color = color;
        }

        draw(content: string): void {
            console.log(this.brushSize + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class MediumPen implements Pen {

        brushSize: BrushSize = BrushSize.MEDIUM; // intrinsic
        private color: string; // extrinsic

        constructor(color: string) {
            this.color = color;
        }

        draw(content: string): void {
            console.log(this.brushSize + ' Drawing THIN content in color : ' + content + this.color);
        }
    }

    export class PenFlyWeightFactory {

        private pensMap: { [s: string]: Pen; } = <any>{};

        constructor() { }

        public getFlyweight(penType: string, color: string): Pen {

            let penMapValue = this.pensMap[penType];

            if (penMapValue === undefined || null) {
                switch (penType) {
                    case 'THICK': {
                        console.log('ThickPen Created');
                        penMapValue = new ThickPen(color);
                        break;
                    }
                    case 'THIN': {
                        console.log('ThinPen Created');
                        penMapValue = new ThinPen(color);
                        break;
                    }
                    case 'MEDIUM': {
                        console.log('MediumPen Created');
                        penMapValue = new MediumPen(color);
                        break;
                    }
                }
                this.pensMap[penType] = penMapValue;
            }
            return this.pensMap[penType];
        }

    }
}