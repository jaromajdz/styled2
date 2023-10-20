import { Button } from "../../styled.components/button"
import { Card, CardHeader } from "../../styled.components/card"
import { authFormConfig } from "../elements/forms/auth.config"
import { Form } from "../elements/forms/form/form"

export const Home = () =>{
    return <section>
        <Card>
            <CardHeader><h1>Tutaj jakis Tekst</h1></CardHeader>
            <Button  width={150}>Try for free</Button>
        </Card>
        
    </section>
}