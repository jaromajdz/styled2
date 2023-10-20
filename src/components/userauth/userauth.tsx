

import { authFormConfig } from '../elements/forms/auth.config';
import { Form } from '../elements/forms/form/form';
import styles from './userauth.module.scss';

export const UserAuth = () =>{
    return <div className={styles.userauth}>
        <Form formConfig={authFormConfig}/>
  </div>
}