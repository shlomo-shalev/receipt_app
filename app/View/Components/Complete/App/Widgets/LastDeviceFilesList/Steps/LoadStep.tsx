// Tools
import React, { useEffect } from "react";

// Hooks
import useFilesList from "app/View/Hooks/Files/useFilesList";

// Base components
import Skeleton from "app/View/Components/Bases/Components/Skeleton/__DOM_DRIVER__";
import Container from "app/View/Components/Bases/Components/Container/__DOM_DRIVER__";

function LoadStep({ steper: { onMove }, classes = '' }) {
    const { waitPullFiles } = useFilesList();    

    useEffect(() => {
        (async function () {
            const { files, status } = await waitPullFiles;

            let page = files.length > 0 ? 'files' : 'empty';
            page = status === 'blocked' ? 'block' : page;

            onMove(page, {
                files,
            });
        })()
    }, []);

    return (
        <Container 
            classes={`
                overflow-x-auto scrollbar-none h-40 w-full
                flex flex-row ${classes}
            `}
        >
            {([...(new Array(5))]).map((v, i) => (
                <Container
                    key={i}
                    classes="m-1 border border-black cursor-pointer"
                >
                    <Skeleton 
                        width={90}
                        height="100%"
                    />
                </Container>
            ))}
        </Container>
    );
}

export default LoadStep;