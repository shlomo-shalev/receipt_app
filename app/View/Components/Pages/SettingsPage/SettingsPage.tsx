// Tools
import React from "react";

// Base components
import Text from "app/View/Components/Bases/Components/Text/__DOM_DRIVER__";
import Space from "app/View/Components/Bases/Components/Space/__DOM_DRIVER__";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';

// Complete components
// Material design
import CommonButton from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButton";
// Icons
// import HelpIcon from "app/View/Components/Complete/MaterialDesign/Icons/Help";
// import BackupIcon from "app/View/Components/Complete/MaterialDesign/Icons/Backup";
// import LanguageIcon from "app/View/Components/Complete/MaterialDesign/Icons/Language";
import ExportIcon from "app/View/Components/Complete/MaterialDesign/Icons/Export";
import ImportIcon from "app/View/Components/Complete/MaterialDesign/Icons/Import";

// Services
import ExportDataService from "app/Services/Data/Backup/ExportDataService";
import ImportDataService from "app/Services/Data/Backup/ImportDataService";

// Api
import { saveAs } from "app/View/Bootstrap/Storage/File";
import Choose from "app/View/Hooks/Choose/Choose";

function SettingsPage() {
    return (
        <Container classes="mt-5 !mx-7 flex-1 items-start relative">
            <CommonButton
                title="export data"
                icon={({ classes }) => (
                    <ExportIcon
                        classes={`${classes} !w-full !h-full`}
                    />
                )}
                type="filled"
                onClick={async () => {
                    const service = new ExportDataService();
                    const data = await service.execute();
                    saveAs({ data, name: 'backup.txt' });
                }}
                classes={{
                    root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1
                    `,
                    icon: 'w-4 h-4 mr-2',
                    title: '!text-black text-center',
                }}
            />
            <Space />
            <Space />
            <CommonButton
                title="import data"
                icon={({ classes }) => (
                    <ImportIcon
                        classes={`${classes} !w-full !h-full`}
                    />
                )}
                onClick={async () => {
                    const file = await Choose.pickfile();
                    
                    if (file) {
                        const service = new ImportDataService();
                        service.execute(file);
                    }
                }}
                type="filled"
                classes={{
                    root: `
                        bg-white w-44 py-4 w-full !m-0 !justify-start
                        border border-1
                    `,
                    icon: 'w-4 h-4 mr-2',
                    title: '!text-black text-center',
                }}
            />
            <Space />
            <Space />
            <Text classes="text-white text-center w-full font-bold">
                version: 0.001.01
            </Text>
        </Container>
    );
}

export default SettingsPage;