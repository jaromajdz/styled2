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
import { useForm } from "../forms.hoc";

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
  
  const [buildForm, handleResetForm, handleOnChange, handleOnFocus, handleSendForm, getFormTouched, getFormValid, getForm] = useForm(formConfig)

  
  return (
    <form onReset={handleResetForm}>
      {Object.keys(getForm()).map((key, id) => {
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
              {getForm()[key].errors.map((err) => err.errorMsg).join(", ")}
            </div>
          </>
        );
      })}
      <div className={styles.action_area}>
      <Button
        type="reset"
        color="secondary"
        width={120}
        disabled={!getFormTouched()}
      >
        Reset
      </Button>
      <Button
        color="accent"
        width={120}
        type="submit"
        disabled={!(getFormTouched() && getFormValid())}
      >
        Send
      </Button>
      </div>
    </form>
  );
};
