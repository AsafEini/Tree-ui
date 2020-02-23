import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {ConditionStep, Steps} from "../../system-flow-models/system-flow-models";
import {stepTypeComponents} from "./steps-mapper";
import {StyledTitle, StylesStep} from "./steps-global-styling";

const StyledConditionComponent = styled(StylesStep)`
    background: #EEDEFB;
`;

const StyledUserTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`;
const StyledConditionSection = styled.div`
    box-shadow: 0px 0.2px 4px 0px grey;
    margin: 10px;
    border-radius: 10px;
`;
const StyledConditionContent = styled.div`
    margin-left: 15px;
`;

function ConditionStepComponent(props: { step: ConditionStep }): ReactElement {
    const {if_true, if_false, title, length, type, predicate} = props.step;
    const StepComponent = stepTypeComponents[if_true.type];
    const renderSection: (section: Steps) => ReactElement | null = (section) => {
        return section ? <StepComponent step={section}/> : <div>Null</div>;
    };
    return (
        <StyledConditionComponent>
            <StyledTitle>
                <span>Condition Title: {title}</span>
            </StyledTitle>
            <StyledConditionSection>
                <StyledUserTitle>True:</StyledUserTitle>
                <StyledConditionContent>
                    {renderSection(if_true)}
                </StyledConditionContent>

            </StyledConditionSection>
            <StyledConditionSection>
                <StyledUserTitle>False:</StyledUserTitle>
                <StyledConditionContent>
                    {renderSection(if_false)}
                </StyledConditionContent>
            </StyledConditionSection>
        </StyledConditionComponent>
    );
}

export default ConditionStepComponent;
