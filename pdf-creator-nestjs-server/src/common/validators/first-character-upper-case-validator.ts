import { registerDecorator } from 'class-validator';

/**
 * Validates if the first character is upper case
 */
export function IsFirstCharacterUpperCase() {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsFirstCharacterUpperCase',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: `${propertyName} must start with an upper case letter`,
            },
            validator: {
                validate(value: any) {
                    if (!value || value.length == 0) {
                        return false;
                    }

                    const first = value[0];
                    return first.toUpperCase() == first;
                },
            },
        });
    };
}
