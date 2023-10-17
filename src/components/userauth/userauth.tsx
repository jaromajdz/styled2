
import { Button } from '../../styled.components/button';
import Input from '../elements/input/input';
export const UserAuth = () =>{
    return <div className='flex flex-col shadow-md w-fit bg-background-50 p-4'>
        <Input type="text" label='Name'/>
        <Input type="password" label='Surname'/>
         <Button>Send</Button>
  </div>
}