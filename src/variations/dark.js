import { makeTheme } from '../theme.js';

const colors = {
	blue: '#70c0ba',
	green: '#98c379',
	greenalt: '#90c966',
	grey: '#666666',
	orange: '#ff9946',
	pink: '#c678dd',
	purple: '#be7dd2',
	red: '#d54e53',
	salmon: '#dea1b2',
	transparent: '#00000000',
	turquoize: '#edbf69',
	yellow: '#edbf69',
};

const levelColors = {
	danger: colors.red,
	success: colors.green,
	warning: colors.orange,
	info: colors.blue,
};

const main = {
	bg0: "#2c323b",
	bg1: "#242a32",
	fg0: "#d5c4a1",
	fg1: "#a89984"
};

const dark = makeTheme(
	'dark',
	Object.assign(
		{
			primary: main.fg0,
			primaryalt: main.fg1,
			uiborder: main.bg1,
			uibackground: main.bg0,
			uibackgroundalt: main.bg1,
			default: main.fg0,
			defaultalt: main.fg1,
		},
		colors,
		levelColors,
  ),
);

export default {dark}