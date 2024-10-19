import * as vscode from "vscode";

import { getConfiguration } from "./config";

let changesCounter = 0;

export function activate() {
  vscode.workspace.onDidChangeTextDocument((event) => {
    if (!event.contentChanges.length) return;
    if (
      event.document.uri.path !==
      vscode.window.activeTextEditor?.document.uri.path
    )
      return;

    changesCounter++;

    if (changesCounter > getConfiguration("autoHideChangesCount")) {
      changesCounter = 0;
      getConfiguration("autoHidePanel") &&
        vscode.commands.executeCommand("workbench.action.closePanel");
      getConfiguration("autoHideSideBar") &&
        vscode.commands.executeCommand("workbench.action.closeSidebar");
      getConfiguration("autoHideAuxiliaryBar") &&
        vscode.commands.executeCommand("workbench.action.closeAuxiliaryBar");
    }
  });
}

export function deactivate() {}
