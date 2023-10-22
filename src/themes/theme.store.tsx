export const useStoreThemeName = (themeName?: string) =>{
  
    const getTheme = () =>{
        let tName = localStorage.getItem('themeName')
        if(!tName){
            localStorage.setItem('themeName', tName || "")
            tName = themeName? themeName : "light"
        }
        return tName
    }

    const storeThemeName = (tName?: string)=>{
        if(tName){
            localStorage.setItem('themeName', tName )
        }else {
            localStorage.setItem('themeName', themeName? themeName : 'light')
        }
    }

    return [storeThemeName, getTheme] as const
}