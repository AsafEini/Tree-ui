import React from 'react';
import styled from 'styled-components';
import treeFlowData from './tree-flow/tree-flow-data.json';
import SystemFlowComponent from "./features/system-flow-feature/system-flow-main/system-flow";

const MainApp = styled.div`
    display: flex; 
`;

function App() {
    return (
    <MainApp>
    <SystemFlowComponent systemFlow={treeFlowData}/>
    </MainApp>
  );
}

export default App;
