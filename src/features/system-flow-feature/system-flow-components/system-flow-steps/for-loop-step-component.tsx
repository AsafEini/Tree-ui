import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {ForLoopStep} from "../../system-flow-models/system-flow-models";
import {stepTypeComponents} from "./steps-mapper";
import {StyledParam, StyledParams, StyledSubHeader, StyledTitle, StylesStep} from "./steps-global-styling";

const StyledForLoopComponent = styled(StylesStep)`
    background: #F6E2E3;
`;

const StyledContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const StyledLoopItems = styled.div`
    
`;

function ForLoopStepComponent(props:{step: ForLoopStep}): ReactElement {
    const {step, type, length, title, items} = props.step;
    const StepComponent = stepTypeComponents[step.type];
    const renderLoopItems: () => ReactElement[] = () => items.map((item,i) => <StyledParam key={i}>{item}</StyledParam>);
    return (
        <StyledForLoopComponent>
            <StyledTitle>
                <span>Loop Title: {title}</span>
            </StyledTitle>
            <StyledContent>
                <StyledSubHeader>Items: </StyledSubHeader>
                <StyledParams>
                    {renderLoopItems()}
                </StyledParams>
                <StepComponent step={step}/>
            </StyledContent>
        </StyledForLoopComponent>
    );
}

export default ForLoopStepComponent;
