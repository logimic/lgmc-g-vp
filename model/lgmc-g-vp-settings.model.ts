
export type LgmcVPSettings = {
    menu?: LGMCVPMenuSettings,
    visualEditor?: LGMCVPVisualEditorSettings,
    textEditor?: LGMCVPTextEditorSettings
    common: {
        manualSync: boolean
    }
}

export type LGMCVPMenuSettings = {
    enabled: boolean,
    enableToggleVisual: boolean,
    enableSaveVisual: boolean,
    enableUndo: boolean,
    enableRedo: boolean,
    enableSync: boolean,
    enableSaveText: boolean,
    enableToggleText: boolean,
    enableLang: boolean
}

export type LGMCVPVisualEditorSettings = {
    enabled: boolean
}

export type LGMCVPTextEditorSettings = {
    enabled: boolean,
    style: {
        [klass: string]: any;
    }
}