// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// -- app
import Step from "app/View/Components/Complete/Steper/Step";
import Steper from "app/View/Components/Complete/Steper/Steper";

// Local components
// -- steps
import LoadStep from "./Steps/LoadStep/LoadStep";
import EmpryDataStep from "./Steps/EmpryDataStep/EmpryDataStep";
import TransactionsStep from "./Steps/TransactionsStep/TransactionsStep";

function ListPage() {
    return (
        <Container classes="h-full">
            <Steper default="load">
                <Step 
                    step="load"
                    component={LoadStep}
                />
                <Step 
                    step="transactions"
                    component={TransactionsStep}
                />
                <Step 
                    step="empty"
                    component={EmpryDataStep}
                />
            </Steper>
        </Container>
    );
}

export default ListPage;