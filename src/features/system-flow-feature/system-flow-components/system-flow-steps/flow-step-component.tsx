import React from 'react';
import styled from 'styled-components';
import {FlowStep} from "../../system-flow-models/system-flow-models";
import {stepTypeComponents} from "./steps-mapper";
import {StyledTitle, StylesStep} from "./steps-global-styling";

const StyledFlowComponent = styled(StylesStep)`
    background: #DCFAFA;
`;

const StyledFlowContent = styled.div`
`;

const StyledFlowSection = styled.div`
    box-shadow: 0px 0.2px 4px 0px grey;
    margin: 10px;
`;

function FlowStepComponent(props:{step: FlowStep}) {
    const {steps, title, length, type} = props.step;
    return (
        <StyledFlowComponent>
            <StyledTitle>
                <span>Flow Title: {title}</span>
            </StyledTitle>
            <StyledFlowContent>
                {steps.map((step, i) => {
                    const StepComponent = stepTypeComponents[step.type];
                    return <StepComponent step={step} key={i}/>
                })}
            </StyledFlowContent>
        </StyledFlowComponent>
    );
}

export default FlowStepComponent;
