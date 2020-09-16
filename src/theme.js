import ui from './ui.js';
import syntax from './syntax.js';
import fs from 'fs';

export function makeTheme(name, themeColors) {
	let theme = Object.assign(themeColors);
	let base = {
		$schema: "vscode://schemas/color-theme",
		name: `Sodaville ${name}`,
		colors: ui(theme),
		tokenColors: syntax(theme),
	};

	fs.writeFile(
		`themes/sodaville-theme-${name}.json`,
		JSON.stringify(base),
		(err) => {
			if (err) {
				console.log("error", err);
			}
		},
	);
}