export namespace TemplatePattern {
    export abstract class AbstractDataMiner {
        public extractPDF(): void {
            throw new Error('Abstract Data Miner');
        }

        public extractCSV(): void {
            throw new Error('Abstract Data Miner');
        }

        public templateMethod(): void {
            console.log('templateMethod is being called');
            this.extractCSV();
            this.extractPDF();
        }
    }

    export class PDFClass extends AbstractDataMiner {
        public extractPDF(): void {
            console.log('extractPDF of PDFClass');
        }

        public extractCSV(): void {
            console.log('extractCSV of PDFClass');
        }
    }

    export class CSVClass extends AbstractDataMiner {
        public extractPDF(): void {
            console.log('extractPDF of CSVClass');
        }

        public extractCSV(): void {
            console.log('extractCSV of CSVClass');
        }
    }
}