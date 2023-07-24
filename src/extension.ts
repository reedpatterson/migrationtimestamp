import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('migrationtimestamp.printMigrationTimestamp', (editor, edit) => {
		const x = new Date;
		const applyLeadingZero = (val: number) => (`0${val}`).slice(-2);
		const migrationTimestamp = `${x.getFullYear()}${applyLeadingZero(x.getMonth() + 1)}${applyLeadingZero(x.getDate())}${applyLeadingZero(x.getHours())}${applyLeadingZero(x.getMinutes())}`;
		// await vscode.env.clipboard.writeText(migrationTimestamp);
		editor.selections.forEach((selection) => {
			let text = migrationTimestamp;
			edit.insert(selection.active, text);
		});
	});

	let disposable2 = vscode.commands.registerTextEditorCommand('migrationtimestamp.printTimestamp', (editor, edit) => {
		const x = new Date;
		const applyLeadingZero = (val: number) => (`0${val}`).slice(-2);
		const timestamp = `${x.getFullYear()}-${applyLeadingZero(x.getMonth() + 1)}-${applyLeadingZero(x.getDate())}T${applyLeadingZero(x.getHours())}:${applyLeadingZero(x.getMinutes())}:00`;
		editor.selections.forEach((selection) => {
			let text = timestamp;
			edit.insert(selection.active, text);
		});
	});

	context.subscriptions.push(disposable, disposable2);
}

export function deactivate() {}
