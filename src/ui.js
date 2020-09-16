export default function ui(theme) {
	let activityBar = {
		'activityBar.background': theme.uibackgroundalt,
		'activityBar.border': theme.uiborder,
		'activityBar.foreground': theme.primary,
		'activityBar.inactiveForeground': theme.defaultalt,
		'activityBarBadge.background': theme.primary,
		'activityBarBadge.foreground': theme.uibackgroundalt,
	};
	let badge = {
		'badge.background': theme.primaryalt,
		'badge.foreground': theme.uibackgroundalt,
	};
	let breadcrumb = {
		'breadcrumbPicker.background': theme.uibackground,
	};
	let button = {
		'button.background': theme.primary,
		'button.foreground': theme.uibackgroundalt,
		'extensionButton.prominentBackground': `${theme.primary}9d`,
		'extensionButton.prominentForeground': theme.uibackgroundalt,
		'extensionButton.prominentHoverBackground': theme.primary,
	};
	let common = {
		contrastActiveBorder: theme.transparent,
		errorForeground: theme.danger,
		focusBorder: `${theme.primary}aa`,
		foreground: theme.default,
		'selection.background': `${theme.default}80`,
		'widget.shadow': theme.uiborder,
		'icon.foreground': theme.default,
	};
	let debug = {
		'debugExceptionWidget.background': theme.primaryalt,
		'debugExceptionWidget.border': theme.uiborder,
		'debugToolBar.background': theme.primaryalt,
	};
	let description = {
		descriptionForeground: theme.default,
	};
	let diff = {
		'diffEditor.border': theme.uiborder,
		'diffEditor.insertedTextBackground': `${theme.success}30`,
		'diffEditor.insertedTextBorder': theme.transparent,
		'diffEditor.removedTextBackground': `${theme.danger}30`,
		'diffEditor.removedTextBorder': theme.transparent,
		'diffEditor.diagonalFill': theme.primaryalt,
	};
	let dropdown = {
		'dropdown.background': theme.uibackground,
		'dropdown.border': `${theme.defaultalt}aa`,
		'dropdown.foreground': theme.default,
	};
	let editor = {
		'editor.background': theme.uibackground,
		'editor.findMatchBackground': `${theme.primaryalt}10`,
		'editor.findMatchBorder': theme.primaryalt,
		'editor.findMatchHighlightBackground': `${theme.primary}40`,
		'editor.findMatchHighlightBorder': theme.primary,
		'editor.foreground': theme.default,
		'editor.hoverHighlightBackground': `${theme.primary}40`,
		'editor.lineHighlightBackground': `${theme.primary}0c`,
		'editor.lineHighlightBorder': `${theme.primary}1a`,
		'editor.rangeHighlightBackground': `${theme.uibackground}20`,

		'editor.selectionBackground': `${theme.primary}40`,
		'editor.selectionForeground': theme.primary,
		'editor.inactiveSelectionBackground': `${theme.primary}50`,
		'editor.selectionHighlightBorder': theme.defaultalt,
		'editor.selectionHighlightBackground': theme.transparent,

		'editor.wordHighlightStrongBackground': `${theme.primary}50`,
		'editor.wordHighlightBackground': `${theme.primary}20`,
		'editorBracketMatch.background': `${theme.primary}30`,
		'editorBracketMatch.border': `${theme.primary}96`,
		'editorCodeLens.foreground': theme.default,
		'editorCursor.foreground': theme.yellow,
		'editorGroup.border': theme.uiborder,
		'editorGroup.dropBackground': `${theme.primary}15`,
		'editorHoverWidget.background': theme.uibackground,
		'editorHoverWidget.border': theme.primaryalt,
		'editorIndentGuide.background': `${theme.defaultalt}30`,
		'editorIndentGuide.activeBackground': `${theme.defaultalt}bb`,
		'editorLink.activeForeground': theme.default,
		'editorWarning.border': theme.transparent,
		'editorGutter.commentRangeForeground': theme.primaryalt,
	};
	let editorMarker = {
		'editorMarkerNavigation.background': theme.default,
		'editorMarkerNavigationError.background': theme.danger,
		'editorMarkerNavigationWarning.background': theme.yellow,
	};
	let find = {
		'editorWarning.foreground': theme.yellow,
		'editorWhitespace.foreground': `${theme.defaultalt}40`,
		'editorWidget.background': theme.uibackgroundalt,
		'editorWidget.resizeBorder': `${theme.primary}50`,
	};
	let gutter = {
		'editorGutter.background': theme.uibackground,
		'editorGutter.addedBackground': `${theme.success}cc`,
		'editorGutter.deletedBackground': `${theme.danger}cc`,
		'editorGutter.modifiedBackground': `${theme.info}cc`,
		'editorLineNumber.foreground': theme.defaultalt,
		'editorLineNumber.activeForeground': `${theme.default}bb`,
	};
	let input = {
		'input.background': theme.transparent,
		'input.foreground': theme.default,
		'input.border': `${theme.defaultalt}aa`,
		'input.placeholderForeground': theme.defaultalt,
		'inputOption.activeBorder': theme.primary,
		'inputValidation.errorBackground': theme.primaryalt,
		'inputValidation.errorBorder': theme.yellow,
		'inputValidation.infoBackground': theme.primaryalt,
		'inputValidation.infoBorder': theme.primary,
		'inputValidation.warningBackground': theme.primaryalt,
		'inputValidation.warningBorder': theme.yellow,
	};
	let list = {
		'list.activeSelectionBackground': `${theme.primary}45`,
		'list.dropBackground': `${theme.primary}15`,
		'list.focusBackground': `${theme.primary}aa`,
		'list.focusForeground': theme.default,
		'list.errorForeground': theme.danger,
		'list.warningForeground': theme.warning,
		'list.highlightForeground': theme.yellow,
		'list.activeSelectionForeground': theme.default,
		'list.hoverBackground': `${theme.defaultalt}20`,
		'list.hoverForeground': theme.default,
		'list.inactiveSelectionBackground': `${theme.primary}45`,
		'gitDecoration.modifiedResourceForeground': theme.info,
		'gitDecoration.deletedResourceForeground': theme.danger,
		'gitDecoration.untrackedResourceForeground': theme.success,
		'gitDecoration.ignoredResourceForeground': theme.defaultalt,
		'gitDecoration.conflictingResourceForeground': theme.primary,
	};
	let menu = {
		'menu.background': theme.uibackgroundalt,
		'menu.border': theme.uibackground,
		'menu.foreground': theme.default,
		'menu.separatorBackground': theme.uiborder,
		'menu.selectionBackground': `${theme.primary}20`,
		'menubar.selectionBackground': theme.uibackground,
		'menubar.selectionForeground': theme.default,
	};
	let merge = {
		'merge.border': theme.uiborder,
		'merge.commonContentBackground': `${theme.yellow}30`,
		'merge.commonHeaderBackground': `${theme.yellow}80`,
		'merge.currentContentBackground': `${theme.success}30`,
		'merge.currentHeaderBackground': `${theme.success}80`,
		'merge.incomingContentBackground': `${theme.info}30`,
		'merge.incomingHeaderBackground': `${theme.info}80`,
		'editorOverviewRuler.border': theme.uiborder,
		'editorOverviewRuler.commonContentForeground': theme.yellow,
		'editorOverviewRuler.currentContentForeground': theme.danger,
		'editorOverviewRuler.incomingContentForeground': theme.success,
	};
	let notification = {
		'notificationCenterHeader.foreground': theme.defaultalt,
		'notificationCenterHeader.background': theme.uibackgroundalt,
		'notifications.foreground': theme.default,
		'notifications.background': theme.uibackground,
		'notifications.border': theme.uibackgroundalt,
		'notificationLink.foreground': theme.yellow,
	};
	let panel = {
		'panel.background': theme.uibackground,
		'panel.border': theme.uiborder,
		'panelInput.border': theme.defaultalt,
		'panelSection.background': theme.uiborder,
		'panelSection.border': theme.uiborder,
		'panelTitle.activeBorder': theme.primary,
		'panelTitle.activeForeground': theme.primary,
		'panelTitle.inactiveForeground': theme.defaultalt,
		'panelSectionHeader.background': `${theme.defaultalt}20`,
		'panelSectionHeader.foreground': theme.default,
		'panelSectionHeader.border': theme.uiborder,
	};
	let pickView = {
		'peekView.border': theme.primary,
		'peekViewEditor.background': `${theme.uibackgroundalt}`,
		'peekViewEditor.matchHighlightBackground': `${theme.uibackgroundalt}`,
		'peekViewResult.background': `${theme.uibackgroundalt}`,
		'peekViewResult.fileForeground': theme.default,
		'peekViewResult.lineForeground': theme.default,
		'peekViewResult.matchHighlightBackground': theme.primaryalt,
		'peekViewResult.selectionBackground': theme.primaryalt,
		'peekViewResult.selectionForeground': theme.default,
		'peekViewTitle.background': theme.uiborder,
		'peekViewTitleDescription.foreground': theme.default,
		'peekViewTitleLabel.foreground': theme.default,
		'peekViewEditorGutter.background': `${theme.uibackgroundalt}`,
		'editorMarkerNavigation.background': theme.uibackgroundalt,
		'editorMarkerNavigationError.background': `${theme.danger}90`,
		'editorMarkerNavigationWarning.background': `${theme.warning}90`,
		'editorMarkerNavigationInfo.background': `${theme.info}90`,
	};
	let picker = {
		'pickerGroup.border': theme.uiborder,
		'pickerGroup.foreground': theme.default,
	};
	let progressbar = {
		'progressBar.background': theme.yellow,
	};
	let scrollbar = {
		'scrollbar.shadow': theme.uiborder,
		'scrollbarSlider.activeBackground': `${theme.defaultalt}90`,
		'scrollbarSlider.background': `${theme.defaultalt}50`,
		'scrollbarSlider.hoverBackground': `${theme.defaultalt}90`,
	};
	let settings = {
		'settings.modifiedItemIndicator': theme.primary,
		'settings.headerForeground': theme.primary,
	};
	let sidebar = {
		'sideBar.background': theme.uibackgroundalt,
		'sideBar.border': theme.uiborder,
		'sideBar.foreground': theme.default,
		'sideBarSectionHeader.background': theme.uibackgroundalt,
		'sideBarSectionHeader.foreground': theme.default,
		'sideBarSectionHeader.border': theme.uiborder,
		'sideBarTitle.foreground': theme.defaultalt,
		'tree.indentGuidesStroke': `${theme.default}30`,
	};
	let statusBar = {
		'statusBar.background': theme.uibackgroundalt,
		'statusBar.border': theme.uiborder,
		'statusBar.debuggingBackground': `${theme.primary}44`,
		'statusBar.debuggingForeground': theme.default,
		'statusBar.foreground': theme.default,
		'statusBar.noFolderBackground': theme.uiborder,
		'statusBar.noFolderBorder': theme.uiborder,
		'statusBar.noFolderForeground': theme.default,

		'statusBarItem.activeBackground': theme.primaryalt,
		'statusBarItem.hoverBackground': `${theme.default}15`,
		'statusBarItem.prominentBackground': theme.uiborder,
		'statusBarItem.prominentHoverBackground': theme.primaryalt,
	};
	let suggest = {
		'editorSuggestWidget.background': theme.uibackground,
		'editorSuggestWidget.border': theme.uiborder,
		'editorSuggestWidget.foreground': theme.default,
		'editorSuggestWidget.highlightForeground': theme.yellow,
		'editorSuggestWidget.selectedBackground': `${theme.primary}4d`,
	};
	let tabs = {
		'editorGroupHeader.noTabsBackground': theme.uibackground,
		'editorGroupHeader.tabsBackground': theme.uibackgroundalt,
		'editorGroupHeader.tabsBorder': theme.transparent,
		'editorGroupHeader.border': theme.transparent,
		'tab.activeBackground': theme.uibackground,
		'tab.activeForeground': theme.primary,
		'tab.activeBorderTop': theme.primary,
		'tab.border': theme.transparent,
		'tab.hoverBorder': theme.transparent,
		'tab.hoverBackground': `${theme.uibackground}cc`,
		'tab.unfocusedHoverBackground': `${theme.primary}10`,
		'tab.unfocusedHoverBorder': theme.transparent,
		'tab.inactiveBackground': theme.uibackgroundalt,
		'tab.inactiveForeground': theme.defaultalt,
		'tab.unfocusedActiveForeground': theme.default,
		'tab.unfocusedInactiveForeground': theme.default,
	};
	let terminal = {
		'terminal.ansiBlack': theme.uibackground,
		'terminal.ansiRed': theme.danger,
		'terminal.ansiGreen': theme.success,
		'terminal.ansiYellow': theme.yellow,
		'terminal.ansiBlue': theme.info,
		'terminal.ansiMagenta': theme.pink,
		'terminal.ansiCyan': theme.turquoize,
		'terminal.ansiWhite': theme.default,
		'terminal.ansiBrightBlack': theme.info,
		'terminal.ansiBrightRed': theme.danger,
		'terminal.ansiBrightGreen': theme.success,
		'terminal.ansiBrightYellow': theme.yellow,
		'terminal.ansiBrightBlue': theme.info,
		'terminal.ansiBrightMagenta': theme.pink,
		'terminal.ansiBrightCyan': theme.turquoize,
		'terminal.ansiBrightWhite': theme.primaryalt,
		'terminal.background': theme.uibackground,
		'terminal.foreground': theme.default,
		'terminalCursor.background': theme.yellow,
		'terminalCursor.foreground': theme.yellow,
	};
	let text = {
		'textBlockQuote.background': `${theme.info}34`,
		'textBlockQuote.border': `${theme.info}b9`,
		'textCodeBlock.background': `${theme.info}34`,
		'textLink.activeForeground': theme.info,
		'textLink.foreground': theme.info,
		'textPreformat.foreground': theme.yellow,
		'textSeparator.foreground': theme.primary,
		'walkThrough.embeddedEditorBackground': theme.uibackground,
	};
	let titleBar = {
		'titleBar.activeBackground': theme.uibackgroundalt,
		'titleBar.activeForeground': theme.defaultalt,
		'titleBar.inactiveBackground': theme.uiborder,
		'titleBar.inactiveForeground': theme.defaultalt,
		'titleBar.border': theme.uiborder,
	};
	return Object.assign(
		activityBar,
		badge,
		breadcrumb,
		button,
		common,
		debug,
		description,
		diff,
		dropdown,
		editor,
		editorMarker,
		find,
		gutter,
		input,
		list,
		menu,
		merge,
		notification,
		panel,
		pickView,
		picker,
		progressbar,
		scrollbar,
		settings,
		sidebar,
		statusBar,
		suggest,
		tabs,
		terminal,
		text,
		titleBar,
	);
}
