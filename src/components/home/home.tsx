import { Button } from "../../styled.components/button";
import { Card, CardHeader } from "../../styled.components/card";
import ColorButton from "../elements/color/color.button";

export const Home = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <h1>Fancy text about something</h1>
        </CardHeader>
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <ColorButton color="#00FFee" />
          <div style={{ marginLeft: "10px" }}>
            Some nice color(click on the color box to change color)
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="background">Background</Button>
          <Button color="accent">Accent</Button>
        </div>
      </Card>
    </section>
  );
};
