export interface Color {
	name: string;
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