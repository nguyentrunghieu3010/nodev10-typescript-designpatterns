
import { TemplatePattern } from './TemplatePattern';

export namespace TemplateDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Template Desgin Pattern----------');
            let pdf: TemplatePattern.PDFClass = new TemplatePattern.PDFClass(),
                csv: TemplatePattern.CSVClass = new TemplatePattern.CSVClass();

            pdf.templateMethod();
            csv.templateMethod();

            console.log('----------Start Template Desgin Pattern----------');
        }
    }
}
