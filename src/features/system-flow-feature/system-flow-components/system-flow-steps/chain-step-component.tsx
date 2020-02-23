import React from 'react';
import styled from 'styled-components';
import {ChainStep} from "../../system-flow-models/system-flow-models";
import {stepTypeComponents} from "./steps-mapper";
import {StyledTitle, StylesStep} from "./steps-global-styling";

const StyledChainComponent = styled(StylesStep)`
    background: #CCEEDD;
`;

const StyledChainContent = styled.div`
    
`;

function ChainStepComponent(props:{step: ChainStep}) {
    const {steps, type, length, title} = props.step;
    return (
        <StyledChainComponent>
            <StyledTitle>
                <span>Chain Title: {title}</span>
            </StyledTitle>
            <StyledChainContent>
                {steps.map((step, i) => {
                    const StepComponent = stepTypeComponents[step.type];
                    return <StepComponent step={step} key={i}/>
                })}
            </StyledChainContent>
        </StyledChainComponent>
    );
}

export default ChainStepComponent;
