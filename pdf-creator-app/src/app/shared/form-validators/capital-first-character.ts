import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function capitalFirstCharacter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return { capitalFirstCharacter: { value: control.value } }
        }

        const first = control.value[0]

        return first.toUpperCase() == first ? null : { capitalFirstCharacter: { value: control.value } };
    };
}