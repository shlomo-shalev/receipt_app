// Tools
import React from "react";

// Base components
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";

// Coomplete components
// Material design
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// Icons
import HelpIcon from "app/View/Components/Complete/MaterialDesign/Icons/Help";
import BackupIcon from "app/View/Components/Complete/MaterialDesign/Icons/Backup";
import LanguagesIcon from "app/View/Components/Complete/MaterialDesign/Icons/Languages";

function SettingsPage() {
    return (
        <Container classes="mt-5 !mx-7 flex-1 items-start relative">
            <CommonButton
                title="Languages"
                icon={({ classes }) => (
                    <LanguagesIcon
                        classes={`${classes} !w-full !h-full`}
                    />
                )}
                type="filled"
                classes={{
                    root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
                    icon: 'w-4 h-4 mr-2',
                    title: '!text-black text-center',
                }}
            />
            <Space />
            <Space />
            <CommonButton
                title="Backup"
                icon={({ classes }) => (
                    <BackupIcon
                        classes={`${classes} !w-full !h-full`}
                    />
                )}
                type="filled"
                classes={{
                    root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
                    icon: 'w-4 h-4 mr-2',
                    title: '!text-black text-center',
                }}
            />
            <Space />
            <Space />
            <CommonButton
                title="Help"
                icon={({ classes }) => (
                    <HelpIcon
                        classes={`${classes} !w-full !h-full`}
                    />
                )}
                type="filled"
                classes={{
                    root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1 border-gray-500
                    `,
                    icon: 'w-4 h-4 mr-2',
                    title: '!text-black text-center',
                }}
            />
        </Container>
    );
}

export default SettingsPage;