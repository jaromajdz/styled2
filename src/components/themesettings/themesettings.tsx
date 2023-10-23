import { useContext } from "react";
import { Card, CardHeader } from "../../styled.components/card";
import { ColorBox } from "../../styled.components/colorbox";
import { ThemeColorT } from "../../themes/theme.types";
import styles from "./themesettings.module.scss";
import { ThemeNameContext } from "../../App";
import { ThemeContext } from "styled-components";
import { Button } from "../../styled.components/button";


export const ThemeSettings = ({
  theme,
  themeName,
  active
}: {
  theme: ThemeColorT;
  themeName: string;
  active: boolean;
}) => {

const currTheme = useContext(ThemeNameContext);    
const themeData = useContext(ThemeContext) || {};  

const setThemeHandler = (theme: string) =>{
    currTheme.setThemeName(themeName)
    
}

return (
    <Card style={{ marginBottom: "16px" }}>
      <CardHeader background={active? themeData["background"]['400'] : ""}>
        <h1>{themeName} {active? "(active)" : ""}</h1>
      </CardHeader>
      <div className={styles.container}>
        {Object.keys(theme).map((color) => (
          <>
            <ColorBox color={theme[color as keyof ThemeColorT]}></ColorBox>
            <div>{color} </div>
            <div>{theme[color as keyof ThemeColorT]}</div>
          </>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "end", padding: "8px"}}>      
        <Button color="secondary" onClick={()=>setThemeHandler(themeName)} disabled={active}>Enable</Button>
     </div>
    </Card>
  );
};

export const ThemesList = ({
  themes,
}: {
  themes: { [theme: string]: ThemeColorT };
}) => {
    const themeContext = useContext(ThemeNameContext);

  return (
    <div>
      {Object.keys(themes).map((theme) => (
        <ThemeSettings active={theme===themeContext.themeName} themeName={theme} theme={themes[theme]} />
      ))}
    </div>
  );
};
