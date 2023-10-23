export interface Color {
	name: string;
	hex: string;
	rgb: string;
	isDarkContrast: boolean;
}

export interface TailwindTheme {
	"background-color": string;
	'foreground-color': string;
	'primary-color': string;
	'secondary-color': string;
	'accent-color': string;
}

export interface ThemeColorT {
	"background": string;
	"onbackground": string;
	'primary': string;
	'onprimary': string;
	'secondary': string;
	'onsecondary': string;
	'accent': string;
	'onaccent': string;
}


export interface ThemeT {
	[key: string]: {[key: string]:  {[key: string]: string}} 
}
