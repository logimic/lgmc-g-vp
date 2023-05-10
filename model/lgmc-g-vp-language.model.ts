import { Type } from "@angular/core"
import { LgmcGVPAbstracStatement } from "../abstract/lgmc-g-vp-abstract-statement"

export type LgmcVPLanguage = {
    variables: LgmcVPVariable[];
    stmt: {
        [name: string]: LgmcVPStatementLanguage
    },
    err: {
        icon: string,
        color: string,
        backgroundColor: string,
    }
}

export type LgmcVPVariable = {
    label: string,
}

export type LgmcVPStatementLanguage = {
    component: "cmd" | "compound",
    label?: string,
    icon?: string,
    color?: string,
    backgroundColor?: string,
    parents?: string[],
    avoidParents?: string[],
    positions?: LgmcVPPreferredPosition[],
    avoidPositions?: LgmcVPPreferredPosition[],
    levels?: number[],
    avoidLevels?: number[],
    extensions?: LgmcVPCommandExtensionsLanguage & LgmcVPConditionExtensionsLanguage
}

export type LgmcVPPreferredPosition = (number | "first" | "middle" | "last" );

export type LgmcVPCommandExtensionsLanguage = ({
    params?: {
        type: "structure"
        defs: {
            name: string,
            type: Type<Number | String | Boolean>
        }[]
    }
} | {
    params?: {
        type: "array"
        defs: Type<Number | String | Boolean>
    }
})

export type LgmcVPConditionExtensionsLanguage = {
    enableCondition?: boolean
}