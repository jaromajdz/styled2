import React, { useEffect, useState } from "react";
import Input from "../../input/input";
import {FormConfigT, FormControlConfigT, FormControlErrorT, FormControlT, elementTypesEnum } from "../form.control";
import { useForm } from "../forms.hoc";



export const Element: React.FC<{elem: FormControlConfigT, getValue: (val: string)=>void, getFocus: (evn: 'focus' | 'blur')=>void}> = ({elem, getValue, getFocus})=>{
    
    const element = {
           [elementTypesEnum.input]: <Input label={elem.name} getValue={getValue} getFocus={getFocus} type="text"/>,
           [elementTypesEnum.password]: <Input label={elem.name} getValue={getValue} getFocus={getFocus} type="password"/>
        }

    return (
        <>
            {element[elem.type as keyof typeof element]}    
        </>
    )
}


export const Form: React.FC<{formConfig: FormConfigT}> = ({formConfig}) =>{
    
    const buildForm = ()=> {
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
         return form
    }
 
 
     
     const [form, setForm] = useState<Record<string, FormControlT>>(buildForm())
     const [formTouched, setFormTouched] = useState(false)
     const [formValid, setFormValid] = useState(false)
 
     const handleOnChange = (value: string, id: string) =>{
         const errors = [...checkValidity(value, id)]
         setForm(prev=>
            ({...prev, [id]: {...prev[id], value: value, touched: true, errors: errors? [...errors] : []} }))
         
         setFormTouched(true)
         setFormValid(errors.length? false : true)
           
        }
 
     const handleOnFocus = (id: string, evetName: 'focus' | 'blur') =>{
       if(evetName=='focus'){
            setForm(prev=>({...prev, [id]: {...prev[id], touched: true}}))
         }  else {
          const errors = [...checkValidity(form[id].value, id)]
          setForm(prev=>
             ({...prev, [id]: {...prev[id], errors: errors? [...errors] : []} }))
             } 
         
        } 

     const checkValidity = (value: string, id: keyof typeof formConfig) =>{
         const errors: FormControlErrorT[] = []
         
         const fr = formConfig[id].validators || []
         for(let validator of fr)
             if(validator.validatorFunction(value) && form[id].touched){
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
         
        setForm(Object.keys(form).reduce<Record<string,FormControlT>>((acc, id)=>{
            
            return {...acc, [id]: {
                errors: [],
                valid: true,
                touched: false,
                value: form[id].value!==undefined? form[id].value : ""
            }   }
        }
        ,{}))
        
     }
 
     const getFormControls = ()=>{
         return form
     }
 
     useEffect(()=>{

     }, [form])

    
    return <form>{
        Object.keys(form).map((key, id)=>{
            return <>
                    <Element 
                            elem={formConfig[key]}
                            getValue={(val)=>handleOnChange(val, key)}
                            getFocus={(eventName: 'focus' | 'blur')=>handleOnFocus(key, eventName)}
                            key={id}
                        />
                        <div className="text-xs min-h-[32px]">
                            {
                                form[key].errors.map(err=>err.errorMsg).join(', ')
                                }
                        </div>
                    </>
            })}</form>
}