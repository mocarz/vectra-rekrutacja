import { registerDecorator } from 'class-validator';
import { join } from 'path';
import * as fs from 'fs';

/**
 * Validates if the template file exists
 */
export function IsTemplateFileAvailable(templateRelativePath: string) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsTemplateAvailable',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: `${propertyName} template must exist`,
            },
            validator: {
                validate(value: any) {
                    if (!value) {
                        return false;
                    }
                    const templateName = value
                    const templateFile = templateName + ".html"
                    const templateFullPath = join(process.cwd(), templateRelativePath, templateFile)
                    return fs.existsSync(templateFullPath)
                },
            },
        });
    };
}
