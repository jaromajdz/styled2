import { FormControlConfigT, FormControlTypesT, elementTypesEnum , FormValidationT, FormConfigT} from "./form.control";



export const authFormConfig: FormConfigT = {
  login:  {
    name: "Login",
    type: elementTypesEnum.input,
     validators: [
        {
            name: 'required',
            validatorFunction: (value: string)=>(value===undefined || value===""),
            errorMessage: "Login is required."        
         },
         {
            name: 'minLength',
            validatorFunction: (value: string)=>(value.length<8),
            errorMessage: "Logins should contain minimum 8 characters."
         }
        ]
        
        },
     password:  {
        name: "Password",
        type: elementTypesEnum.password,
         validators: [
            {
                name: 'required',
                validatorFunction: (value: string)=>(value===undefined || value===null),
                errorMessage: "Password is required."        
             },
             {
                name: 'minLength',
                validatorFunction: (value: string)=>(value.length<8),
                errorMessage: "Password should contain minimum 8 characters."
             }
            ]
       },
    
    }