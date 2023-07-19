import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('migrationtimestamp.printTimestamp', async () => {
		const x = new Date;
		const applyLeadingZero = (val: number) => (`0${val}`).slice(-2);
		const test = `${x.getFullYear()}${applyLeadingZero(x.getMonth() + 1)}${applyLeadingZero(x.getDate())}${applyLeadingZero(x.getHours())}${applyLeadingZero(x.getMinutes())}`;
		// await vscode.env.clipboard.writeText(test);
		if (vscode.window.activeTextEditor?.selection?.active) {
			vscode.TextEdit.insert(vscode.window.activeTextEditor?.selection?.active, test);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
