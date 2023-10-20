export enum elementTypesEnum {
    'input' = 'input',
    'password' = 'password',
    'dropdown' = 'dropdown',
    'checkbox' = 'checkbox'
}

export interface FormControlErrorT{
    error: string;
    errorMsg: string;
};

export interface FormControlT {
    value: string;
    touched: boolean;
    valid: boolean;
    errors: FormControlErrorT[];
};

export type  FormControlType = keyof FormControlTypesT 

export interface FormControlCommonSettingsType {
    value: string;
}

export interface InputSettings extends FormControlCommonSettingsType {

}

export interface DropdownSettings extends FormControlCommonSettingsType {
   set: {key: string |  number, value: string}[]    
}

export interface FormControlConfigT {
    name: string;
    type:  elementTypesEnum;
    validators?: ValidatorT[];
    value?: string;
    settings?: { valuesSet?: [string | number, string][] };
    touched?: boolean;
    valid?: boolean
}

export interface FormControlTypesT {
    [elementTypesEnum.input]: InputSettings;
    [elementTypesEnum.dropdown]: DropdownSettings;
    [elementTypesEnum.checkbox]: FormControlCommonSettingsType;
}

export interface ValidatorT {
    name: string;
    validatorFunction: (value: string)=>boolean;
    errorMessage: string;
}

export interface FormValidationT {
    valid?: boolean;
    touched?: boolean;
    validatiors?: ValidatorT[]
    }

 
 export type FormConfigT = {[key:string]: FormControlConfigT}