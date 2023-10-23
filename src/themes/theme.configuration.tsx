import tinycolor from 'tinycolor2';
import { Color, TailwindTheme, ThemeT } from './theme.types';
import {themes, themes2} from './themes.config';

type ShadesT = '50'| 
'100' |
'200' |
'300' |
'400' |
'500' |
'600' |
'700' |
'800' |
'900';

export function computeColorPalette(hex: string): Color[] {
	return [
		getColorObject(tinycolor(hex).lighten(45), '50'),
		getColorObject(tinycolor(hex).lighten(40), '100'),
		getColorObject(tinycolor(hex).lighten(30), '200'),
		getColorObject(tinycolor(hex).lighten(20), '300'),
		getColorObject(tinycolor(hex).lighten(10), '400'),
		getColorObject(tinycolor(hex), '500'),
		getColorObject(tinycolor(hex).darken(10), '600'),
		getColorObject(tinycolor(hex).darken(20), '700'),
		getColorObject(tinycolor(hex).darken(30), '800'),
		getColorObject(tinycolor(hex).darken(40), '900'),
	];
}

export function getShadeColor(hex: string, shade: ShadesT): string{
	const sh = 	{
		'50': 45,
		'100': 40,
		'200': 30,
		'300': 20,
		'400': 10,
		'500': 0,
		'600': 10,
		'700': 20,
		'800': 30,
		'900': 40
	}[shade]

	if(parseInt(shade)<500) return tinycolor(hex).lighten(sh).toString()
	if(parseInt(shade)>500) return tinycolor(hex).darken(sh).toString()
	return tinycolor(hex).toString()
}

export function getColorObject(value: tinycolor.Instance, name: string): Color {
	const c = tinycolor(value);
	const color =  `${c.toRgb().r} ${c.toRgb().g} ${c.toRgb().b}`
    return {
		name,
		hex: c.toHex(),
		rgb: color,
		isDarkContrast: c.isLight(),
	};
}

export function updateThemeVariables(theme: TailwindTheme, document: Document) {
	for (const [name, color] of Object.entries(theme)) {
		const palette = computeColorPalette(color as string);
		for (const variant of palette) {
			document.documentElement.style.setProperty(`--${name}-${variant.name}`, variant.rgb);
		}
	}
}

export function updateStyledTheme() {
	let generatedTheme: ThemeT  = {};
	const themes = themes2

	for(const theme in themes){	
		generatedTheme[theme] = {}

	for (const[ name , color  ]of Object.entries(themes[theme as keyof typeof themes])) {
		generatedTheme[theme][name] = {}
		const palette = computeColorPalette(color)
		for(const variant of palette){
			generatedTheme[theme][name][variant.name] = `#${variant.hex}`	
		}
	}
  }
	
 	 console.log('generated theme', generatedTheme)
	
	return generatedTheme
}



export function addThemeSettings(themeName = "light"){
    updateThemeVariables(themes[themeName as keyof typeof themes], window.document);
}