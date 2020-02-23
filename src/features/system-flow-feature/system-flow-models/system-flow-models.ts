export type ConditionStep = Step & {
    predicate: any,
    if_true: Steps,
    if_false: Steps
}

export type FlowStep = Step & {
    steps: Steps[]
}

export type ChainStep = Step & {
    steps: Steps[]
}

export type FunctionStep = Step & {
    function: any,
    args: { [key: string]: any }
}

export type ForLoopStep = Step & {
    step: Steps,
    items: any[]
}
export type Steps = ConditionStep & FlowStep & ChainStep & FunctionStep & ForLoopStep;

export type Step = {
    type: string,
    title: string,
    length: number
}

export interface IChild_run {
    step: Step & any,
    child_runs: Child_runs,
    return_value: any,
    run_time: number
}

export type Child_runs = IChild_run[];

export interface IFlow_run {
    child_runs: Child_runs,
    progress: number,
    steps_finished: number,
    total_steps: number
}

export enum StepTypeEnum {
    ConditionStep = 'ConditionStep',
    Chain = 'Chain',
    FunctionStep = 'FunctionStep',
    Flow = 'Flow',
    ForLoopStep = 'ForLoopStep'
}


