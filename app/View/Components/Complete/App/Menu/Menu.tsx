// Tools
import React, { useEffect, useState } from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Hooks
import useRoute from 'app/View/Hooks/Navigation/useRoute';
import useListenRoutePath from "app/View/Hooks/Navigation/useListenRoutePath";

// Complete components
// -- Material design
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// --- icons
import ListIcon from "app/View/Components/Complete/MaterialDesign/Icons/List";
import ScanIcon from "app/View/Components/Complete/MaterialDesign/Icons/Scan";
import SettingsIcon from "app/View/Components/Complete/MaterialDesign/Icons/Settings";

function Menu() {
    const [state, setState] = useState({
        currentButton: 2,
    });

    const { currentButton } = state;
    const route = useRoute();
    const routeData = useListenRoutePath();

    useEffect(() => {
        const path = routeData.pathname;

        let number = path === '/settings' ? 1 : 3;
        number = path !== '/list' && number !== 1 ? 2 : number;

        handleClick(number);

    }, [routeData.pathname]);

    const handleClick = (buttonNumber) => {
        setState(state => ({
            ...state,
            currentButton: buttonNumber,
        }));
    }

    const isSettingsPage = currentButton == 1;
    const isScanPage = currentButton == 2;
    const isListPage = currentButton == 3;

    return (
        <Container classes="flex flex-row my-5 bg-gray-400">
            <CommonButton
                title="Settings"
                checked={isSettingsPage}
                titleOnlyInCheck
                type="filled"
                classes={{
                    root: `
                        !rounded-2xl bg-gray-700 !p-4 
                        ${isSettingsPage ? '!pr-3' : ''}
                    `,
                }}
                icon={({ classes, checked }) => (
                    <SettingsIcon
                        classes={`!w-8 !h-5 ${classes}`}
                    />
                )}
                onClick={() => route.move('/settings')}
            />
            <CommonButton
                title="Scan"
                type="filled"
                checked={isScanPage}
                classes={{
                    root: `
                        !rounded-2xl bg-white !p-4 
                        border border-1 border-gray-500
                    `,
                    title: '!text-black',
                }}
                icon={({ classes, checked }) => (
                    <ScanIcon
                        classes={`!w-8 !h-5 ${classes}`}
                    />
                )}
                onClick={() => route.move('/')}
            />
            <CommonButton
                type="filled"
                // type="full"
                checked={isListPage}
                title="List"
                titleOnlyInCheck
                classes={{
                    root: `
                        !rounded-2xl bg-gray-700 !p-4
                        ${isListPage ? '!pr-3' : ''}
                    `,
                }}
                icon={({ classes, checked }) => (
                    <ListIcon
                        classes={`!w-7 !h-4 ${classes}`}
                    />
                )}
                onClick={() => route.move('/list')}
            />
        </Container>
    );
}

export default Menu;