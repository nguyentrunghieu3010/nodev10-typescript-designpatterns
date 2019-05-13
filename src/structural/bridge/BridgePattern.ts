export namespace BridgePattern {

    /**
     * abstract class contain state (data members), implementation.
     * No need to create Shape as Interface
     */
    export abstract class Shape {
        iColor: IColor;

        constructor(iColor: IColor) {
            this.iColor = iColor;
        }

        public abstract selectedColor(): void;
    }

    export class Rectangle extends Shape {

        constructor(iColor: IColor) {
            super(iColor);
        }

        public selectedColor(): void {
            console.log('This is Rectangle');
            this.iColor.fillColor();
        }
    }

    export class Circle extends Shape {

        constructor(iColor: IColor) {
            super(iColor);
        }

        public selectedColor(): void {
            console.log('This is Circle');
            this.iColor.fillColor();
        }
    }

    export interface IColor {
        fillColor(): void;
    }

    export class RedColor implements IColor {

        fillColor(): void {
            console.log('Red Color');
        }
    }

    export class YellowColor implements IColor {
        fillColor(): void {
            console.log('Yellow Color');
        }
    }
}