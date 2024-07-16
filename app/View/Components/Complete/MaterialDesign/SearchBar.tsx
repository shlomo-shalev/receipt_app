import React from "react";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
import TextInput from 'app/View/Components/Bases/Components/TextInput/__DOM_DRIVER__';

function SearchBar () {
    return (
        <Container 
            style={{
                backgroundColor: '#ebe8d6',
                borderRadius: 50,
                width: '80%',
                maxWidth: '80%',
                height: 60,
                flexDirection: 'row',
            }}
        >
            <Container
                style={{
                    flexGrow: 1,
                    width: 'auto',
                    padding: 20,
                }}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 96 960 960" 
                    width="25"
                >
                    <path 
                        d="
                            M796 935 533 672q-30 26-69.959 
                            40.5T378 727q-108.162 0-183.081-75Q120 
                            577 120 471t75-181q75-75 181.5-75t181 
                            75Q632 365 632 471.15 632 514 618 554q-14 
                            40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 
                            471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 
                            390 180 471t57.458 138.5Q294.917 667 377 667Z
                        "
                    />
                </svg>
            </Container>
            <Container
                style={{
                    flexGrow: 2,
                    height: '100%',
                }}
            >
                <TextInput 
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        fontSize: 15,
                    }}
                    placeholder="Hinted search text"
                />
            </Container>
            <Container
                style={{
                    flexGrow: 1,
                    width: 'auto',
                    padding: 20,
                }}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 96 960 960" 
                    width="25"
                >
                    <path 
                        d="
                            M480.294 665Q426 665 390 626.208 354 587.417 354 533V287q0-51.25 
                            36.441-88.125t89.5-36.875Q533 162 570 198.875T607 287v246q0 54.417-36.206 
                            93.208Q534.588 665 480.294 665ZM441 978V838q-119-12-197-98.51-78-86.509-78-206.49h80q0 
                            96 68.555 163 68.554 67 165.82 67 97.265 0 165.445-67.143Q714 628.715 714 533h80q0 
                            119.989-78 206.494Q638 826 520 837.898V978h-79Z
                        "
                    />
                </svg>
            </Container>
        </Container>
    );
}

export default SearchBar;