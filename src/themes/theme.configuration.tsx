import tinycolor from 'tinycolor2';
import { Color, TailwindTheme, ThemeT } from './theme.types';
import {themes} from './themes.config';

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

export function getColorObject(value: tinycolor.Instance, name: string): Color {
	const c = tinycolor(value);
	const color =  `${c.toRgb().r} ${c.toRgb().g} ${c.toRgb().b}`
    return {
		name,
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
  
	for(const theme in themes){	
		generatedTheme[theme] = {}

	for (const[ name , color  ]of Object.entries(themes[theme as keyof typeof themes])) {
		generatedTheme[theme][name] = {}
		const palette = computeColorPalette(color)
		for(const variant of palette){
			generatedTheme[theme][name][variant.name] = variant.rgb	
		}
	}
  }
	
 	 console.log('generated theme', generatedTheme)
	
	return generatedTheme
}



export function addThemeSettings(themeName = "light"){
    updateThemeVariables(themes[themeName as keyof typeof themes], window.document);
}