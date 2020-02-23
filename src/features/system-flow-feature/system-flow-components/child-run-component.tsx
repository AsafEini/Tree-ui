import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {IChild_run} from "../system-flow-models/system-flow-models";
import {stepTypeComponents} from "./system-flow-steps/steps-mapper";
import {StyledStatisticsContainer, StyledTitle} from "./system-flow-steps/steps-global-styling";

const StyledChildRunContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 10px;
    margin-bottom: 20px;
    background: #EEEEEE;
    box-shadow: 0px 0.2px 4px 0px grey;
`;


function ChildRunComponent(props: {childRun :IChild_run}): ReactElement {
    const {step, child_runs, return_value, run_time} = props.childRun;
    const StepComponent = stepTypeComponents[step.type];
    return (
        <StyledChildRunContainer>
            <StyledTitle>
                <span>Child Run</span>
            </StyledTitle>
            <div>
                <StepComponent step={step}/>
            </div>
            <div>
                {child_runs.map((child,i)=> <ChildRunComponent childRun={child} key={i}/>)}
            </div>
            <StyledStatisticsContainer>
                <div>Result: {return_value}</div>
                <div>Run Time: {run_time}</div>
            </StyledStatisticsContainer>
        </StyledChildRunContainer>
    );
}

export default ChildRunComponent;
