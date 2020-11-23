import {useState} from "react";

type TmpErrorsType = {
    [key: string]: boolean | null | undefined | string
}
const requiredFieldValidator = (value: string): string | boolean => value.length ? false : 'Required field';
const minLengthValidator = (value: string, min: number): string | boolean => value.length >= min ? false : `Minimum length: ${min}`;
const emailValidator = (value: string): string | boolean => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) ? false : 'Please enter valid email';
export const useValidation = () => {
    const [formErrors, setFormErrors] = useState({} as any);

    function validateAll(formData: any): boolean {
        // let key: keyof typeof formData;
        let tmpErrors: TmpErrorsType = {};
        for (let key in formData) {
            const value = formData[key];
            const validationResult = validateField(key, value);
            if (validationResult) {
                tmpErrors[key] = validationResult;
            }
        }
        setFormErrors(tmpErrors);
        return !Object.keys(tmpErrors).length;
    }

    function validateField(name: string, value: string): boolean | string {
        switch (name) {
            case 'name':
                return requiredFieldValidator(value);
            case 'email':
                return emailValidator(value);
            case 'password':
                return requiredFieldValidator(value) || minLengthValidator(value, 8);
            case 'authCode':
                return requiredFieldValidator(value) || minLengthValidator(value, 6);
            default:
                return false;
        }
    }

    return [formErrors, setFormErrors, validateAll, validateField];
};