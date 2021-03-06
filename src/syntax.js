import * as prog from './scopes/prog.js';
import * as markup from './scopes/markup.js';
import * as styling from './scopes/styling.js';

function createScope(scope, foreground, fontStyle) {
	return {
		scope,
		settings: {
			foreground,
			fontStyle,
		},
	};
}

export default function syntax(theme) {
	return Object.assign([
		createScope(prog.accessors, theme.orange, 'regular'),
		createScope(prog.classes, theme.greenalt),
		createScope(prog.comments, `${theme.primary}80`, 'regular'),
		createScope(prog.constants, theme.red),
		createScope(prog.currentText, theme.default),
		createScope(prog.decorators, theme.pink),
		createScope(prog.exportScope, theme.yellow),
		createScope(prog.functions, theme.blue),
		createScope(prog.importScope, theme.yellow),
		createScope(prog.keyword, theme.yellow),
		createScope(prog.objectProperty, theme.default),
		createScope(prog.dataProperty, theme.yellow),
		createScope(prog.operators, theme.yellow),
		createScope(prog.punctuation, `${theme.default}aa`),
		createScope(prog.self, theme.orange, 'regular'),
		createScope(prog.storages, theme.turquoize, 'regular'),
		createScope(prog.strings, theme.green),
		createScope(prog.types, theme.purple),
		createScope(prog.variables, theme.salmon),

		// MARKUP
		// HTML
		createScope(markup.variables, theme.salmon),
		createScope(markup.tags, theme.blue),
		createScope(markup.tagsPunctuation, `${theme.blue}aa`),
		createScope(markup.attributes, theme.yellow, 'regular'),
		// MARKDOWN
		createScope(markup.mdCode, theme.purple),
		createScope(markup.mdCodeLanguage, theme.purple),
		createScope(markup.mdList, theme.blue),
		createScope(markup.mdListPunctuation, theme.blue),
		createScope(markup.mdHeading, theme.yellow),
		createScope(markup.mdHeadingPunctuation, theme.yellow),
		createScope(markup.mdLink, theme.blue),
		createScope(markup.mdBold, theme.blue, 'bold'),
		createScope(markup.mdregular, theme.blue, 'regular'),
		createScope(markup.mdQuote, theme.blue, 'regular'),
		createScope(markup.mdQuotePunctuation, theme.blue, 'regular'),

		// STYLING
		createScope(styling.pseudoClasses, theme.pink),
		createScope(styling.pseudoElements, theme.pink),
		createScope(styling.classes, theme.turquoize, 'regular'),
		createScope(styling.suffix, theme.turquoize, 'regular'),
		createScope(styling.property, theme.default),
		createScope(styling.ids, theme.purple),
		createScope(styling.and, theme.orange),
		// createScope(styling.punctuation, theme.default),
		createScope(styling.units, theme.orange, 'regular'),
		createScope(styling.value, theme.orange),
		createScope(styling.nums, theme.orange),
	]);
}
