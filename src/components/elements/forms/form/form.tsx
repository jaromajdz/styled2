import React, { useEffect, useState } from "react";
import Input from "../../input/input";
import {
  FormConfigT,
  FormControlConfigT,
  FormControlT,
  elementTypesEnum,
} from "../form.types";
import { Button } from "../../../../styled.components/button";
import styles from './form.module.scss';

export const Element: React.FC<{
  elem: FormControlConfigT;
  getValue: (val: string) => void;
  getFocus: (evn: "focus" | "blur") => void;
}> = ({ elem, getValue, getFocus }) => {
  const element = {
    [elementTypesEnum.input]: (
      <Input
        label={elem.name}
        getValue={getValue}
        getFocus={getFocus}
        type="text"
      />
    ),
    [elementTypesEnum.password]: (
      <Input
        label={elem.name}
        getValue={getValue}
        getFocus={getFocus}
        type="password"
      />
    ),
  };

  return <>{element[elem.type as keyof typeof element]}</>;
};

export const Form: React.FC<{
  formConfig: FormConfigT;
  getData?: () => { [key: string]: string };
}> = ({ formConfig }) => {
  const buildForm = () => {
    const form: { [key: string]: FormControlT } = {};
    for (let key in formConfig) {
      const one = formConfig[key];
      form[key as keyof FormConfigT] = {
        value: one.value ? one.value : "",
        touched: one.touched ? one.touched : false,
        valid: one.valid ? one.valid : true,
        errors: [],
      };
    }
    return form;
  };

  const [form, setForm] = useState<{ [key: string]: FormControlT }>(
    buildForm()
  );
  const [formTouched, setFormTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleOnChange = (value: string, id: string) => {
    setForm((prev) => {
      prev[id].value = value;
      checkValidity(prev);
      return { ...prev };
    });
    setFormTouched(true);
  };

  const handleOnFocus = (id: string, evetName: "focus" | "blur") => {
    if (evetName == "focus") {
      setFormTouched(true);
      setForm((prev) => ({ ...prev, [id]: { ...prev[id], touched: true } }));
    } else {
      setForm((prev) => {
        checkValidity(prev);
        return { ...prev };
      });
    }
  };

  const checkValidity = (tmpForm: { [key: string]: FormControlT }) => {
    let formValid: boolean = true;

    Object.keys(tmpForm).forEach((key, idx) => {
      const fr = formConfig[key].validators || [];
      tmpForm[key].errors = [];
      for (let validator of fr) {
        if (validator.validatorFunction(tmpForm[key].value)) {
          formValid = idx === 0 ? false : formValid && false;
          if (tmpForm[key].touched){
            tmpForm[key].errors.push({
              error: validator.name,
              errorMsg: validator.errorMessage,
            });
          }
        }else{
          formValid = idx === 0 ? true : formValid && true;
        }
      }
      const valid = tmpForm[key].errors.length ? false : true;
      
    });
    setFormValid(formValid);
  };

  const handleSendForm = () => {
    return Object.keys(form).reduce<{ [key: string]: string }>(
      (acc, key) => ({ ...acc, [key]: form[key].value }),
      {}
    );
  };

  const handleResetForm = () => {
    setForm(
      Object.keys(form).reduce<{ [key: string]: FormControlT }>((acc, id) => {
        return {
          ...acc,
          [id]: {
            errors: [],
            valid: true,
            touched: false,
            value: form[id].value !== undefined ? form[id].value : "",
          },
        };
      }, {})
    );
    setFormTouched(false);
    setFormValid(false);
  };

  return (
    <form onReset={handleResetForm}>
      {Object.keys(form).map((key, id) => {
        return (
          <>
            <Element
              elem={formConfig[key]}
              getValue={(val) => handleOnChange(val, key)}
              getFocus={(eventName: "focus" | "blur") =>
                handleOnFocus(key, eventName)
              }
              key={id}
            />
            <div className={styles.error}>
              {form[key].errors.map((err) => err.errorMsg).join(", ")}
            </div>
          </>
        );
      })}
      <div className={styles.action_area}>
      <Button
        type="reset"
        color="secondary"
        width={120}
        disabled={!formTouched}
      >
        Reset
      </Button>
      <Button
        color="accent"
        width={120}
        type="submit"
        disabled={!(formTouched && formValid)}
      >
        Send
      </Button>
      </div>
    </form>
  );
};
