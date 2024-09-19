import { registerDecorator } from 'class-validator';

/**
 * Validates polish personal identity number
 */
export function IsValidPesel() {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsValidPesel',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: `${propertyName} is invalid`,
            },
            validator: {
                validate(value: any) {
                    if (!value) {
                        return false;
                    }

                    return isValidPesel(value);
                },
            },
        });
    };
}

function isValidPesel(pesel: string) {
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    const controlNumber = parseInt(pesel.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
        sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
    }
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber;
}
