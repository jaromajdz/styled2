import { useState } from "react"
import { FormConfigT, FormControlErrorT, FormControlT } from "./form.types"


export const useForm = (formConfig: FormConfigT)=>{

    const buildForm = (): Record<string, FormControlT>=> {
       const form: Record<string, FormControlT> = {}
        
       for(let key in formConfig){
            const one = formConfig[key]
            form[key as keyof FormConfigT] = {
                value: one.value?  one.value : "", 
                touched: one.touched? one.touched : false,
                valid: one.valid? one.valid : true,
                errors: []
            }
        }
        setForm(form);
        return form            
    }


    
    const [form, setForm] = useState<Record<string, FormControlT>>({})
    const [formTouched, setFormTouched] = useState(false)
    const [formValid, setFormValid] = useState(false)

    const handleOnChange = (value: string, id: string) =>{
        const errors = [...checkValidity(id)]
        form[id].value = value
        form[id].errors = errors
        setFormTouched(true)
        setFormValid(errors.length? false : true)
    }

    const checkValidity = (id: keyof typeof formConfig) =>{
        const errors: FormControlErrorT[] = []
        
        const fr = formConfig[id].validators || []
        for(let validator of fr)
            if(!validator.validatorFunction(form[id].value)){
                errors.push({error: validator.name, errorMsg: validator.errorMessage})
            }
        
            return errors
        }

     const handleSendForm = () =>{
        const result: {[key: string]: string} = {}
        for (let key in form){
            result[key] = form[key].value
        }
        return result
    }
    
    const handleResetForm = ()=>{
        for(let id in form){
            const one = formConfig[id] 
           
            form[id] = {
                errors: [],
                valid: true,
                touched: false,
                value: one.value!==undefined? one.value : ""
            } 
        }
    }

    const getFormControls = ()=>{
        return form
    }

    return {
        getFormControls,
        buildForm,
        handleResetForm,
        handleOnChange,
        handleSendForm
    }    
}