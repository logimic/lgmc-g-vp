export type LgmcVPProgram = {
    header: LgmcBPHeader,
    block: LgmcVPBlock
};

export type LgmcBPHeader = {
    // TODO
}

export type LgmcVPBlock = LgmcVPStatement[];

export type LgmcVPStatement = LgmcVPAbstractStatement | (LgmcVPCompoundStatement | LgmcVPCommand);

export type LgmcVPAbstractStatement = {
    name: string
}

export type LgmcVPCompoundStatement = LgmcVPAbstractStatement & {
    condition?: LgmcVPExpression,
    block: LgmcVPBlock
}

export type LgmcVPCommand = LgmcVPAbstractStatement & {
    params: LgmcVPExpression[]
}

export type LgmcVPExpression = number | string | boolean; // TODO