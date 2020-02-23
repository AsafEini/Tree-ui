import React, {ReactElement} from 'react';
// @ts-ignore
import styleOverride from './system-flow.css';
import styled from 'styled-components';
import {List, CellMeasurer, CellMeasurerCache} from "react-virtualized";
import {IFlow_run} from "../system-flow-models/system-flow-models";
import ChildRunComponent from "../system-flow-components/child-run-component";
import {StyledStatisticsContainer} from "../system-flow-components/system-flow-steps/steps-global-styling";


const StyledChildRunContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 150
});

function SystemFlowComponent(props: { systemFlow: IFlow_run }): ReactElement {
    const {child_runs, progress, total_steps, steps_finished} = props.systemFlow;

    const renderRow = ({index, key, style, parent}: any) => {
        return (
            <CellMeasurer cache={cache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
                <StyledChildRunContainer key={key} style={style}>
                    <ChildRunComponent childRun={child_runs[index]}/>
                </StyledChildRunContainer>
            </CellMeasurer>
        )
    };
    return (
        <div>
            <List
                className={styleOverride.ReactVirtualized__Grid__innerScrollContainer}
                width={1600}
                height={800}
                rowHeight={cache.rowHeight}
                rowRenderer={renderRow}
                rowCount={child_runs.length}
                overscanRowCount={3}/>
            <StyledStatisticsContainer>
                <div>Progress: {progress}</div>
                <div>Total Steps: {total_steps}</div>
                <div>steps_finished</div>
            </StyledStatisticsContainer>
        </div>

    );
}

export default SystemFlowComponent;
