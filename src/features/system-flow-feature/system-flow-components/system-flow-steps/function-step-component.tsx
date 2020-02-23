import React from 'react';
import styled from 'styled-components';
import {FunctionStep} from "../../system-flow-models/system-flow-models";
import {StyledParam, StyledParams, StyledSubHeader, StyledTitle, StylesStep} from "./steps-global-styling";

const StyledFunctionComponent = styled(StylesStep)`
    background: #FCFDD5;
`;
const StyledContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const StyledFunction = styled.span`
    display: flex;
    box-shadow: 0px 0.2px 4px 0px grey;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
`;


function FunctionStepComponent(props:{step: FunctionStep}) {
    const {title, args} = props.step;

    const setArguments = (args: { [key: string]: any }) => {
        return Object.entries(args).map((entry, i) => (
            <StyledParam key={i}>
                {entry[0]} = {entry[1]}
            </StyledParam>
        ));
    };
    return (
        <StyledFunctionComponent>
            <StyledTitle>
                <span>Function Title: {title}</span>
            </StyledTitle>
            <StyledContent>
                <StyledSubHeader>Parameters:</StyledSubHeader>
                <StyledParams>
                    {setArguments(args)}
                </StyledParams>
                <StyledSubHeader>Function:</StyledSubHeader>
                <StyledFunction>{props.step.function}</StyledFunction>
            </StyledContent>
        </StyledFunctionComponent>
    );
}

export default FunctionStepComponent;
