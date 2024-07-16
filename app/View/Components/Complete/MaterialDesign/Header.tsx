import React from "react";
import Container from 'app/View/Components/Bases/Components/Container/__DOM_DRIVER__';
// import Space from 'app/View/Components/Bases/Components/Space/__DOM_DRIVER__';
// import SearchBar from 'app/View/Components/Complete/MaterialDesign/SearchBar';
import TopApp from 'app/View/Components/Complete/MaterialDesign/TopApp';

function Header () {
    return (
        <Container>
            {/* <Space /> */}
            {/* <SearchBar /> */}
            <TopApp />
        </Container>
    );
}

export default Header;