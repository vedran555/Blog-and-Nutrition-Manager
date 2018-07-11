import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateComment(c: FormControl) {
    let regexp = new RegExp(/^\s+$/);
    return regexp.test(c.value) ? {
        validateComment: {
            valid: false
        }
    } : null
}

@Directive({
    selector: '[validateComment]',
    providers : [
        { provide: NG_VALIDATORS, useValue: validateComment, multi: true }
    ]
})

export class ValidateComment { }