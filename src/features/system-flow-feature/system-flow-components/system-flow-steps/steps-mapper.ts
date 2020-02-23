import {Steps, StepTypeEnum} from "../../system-flow-models/system-flow-models";
import ConditionStepComponent from "./condition-step-component";
import ChainStepComponent from "./chain-step-component";
import FlowStepComponent from "./flow-step-component";
import ForLoopStepComponent from "./for-loop-step-component";
import FunctionStepComponent from "./function-step-component";
import {ReactElement} from "react";

export const stepTypeComponents: {[key: string]: (props: { step: Steps}) => ReactElement} = {
    [StepTypeEnum.ConditionStep]: ConditionStepComponent,
    [StepTypeEnum.Chain]: ChainStepComponent,
    [StepTypeEnum.Flow]: FlowStepComponent,
    [StepTypeEnum.ForLoopStep]: ForLoopStepComponent,
    [StepTypeEnum.FunctionStep]: FunctionStepComponent
};
