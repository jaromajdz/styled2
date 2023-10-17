import { Button } from "../../styled.components/button"
import { Card, CardHeader } from "../../styled.components/card"
import { authFormConfig } from "../elements/forms/auth.config"
import { Form } from "../elements/forms/form/form"

export const Home = () =>{
    return <section>
        <Card><CardHeader>Tutaj jakis Tekst</CardHeader><Button  width={150}>Try for free</Button></Card>
        <Form formConfig={authFormConfig}></Form>
    </section>
}