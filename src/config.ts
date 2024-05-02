import * as vscode from "vscode";

interface ExtensionConfig {
  autoHideSideBar: boolean;
  autoHideAuxiliaryBar: boolean;
  autoHidePanel: boolean;
  autoHideChangesCount: number;
}

export function getConfiguration<T extends keyof ExtensionConfig>(key: T) {
  return vscode.workspace
    .getConfiguration("vscode-auto-hide-panel")
    .get(key) as ExtensionConfig[T];
}
