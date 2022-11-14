import React from 'react';
import {Header} from "./common/components/header/header.component";
import {Image} from "./common/components/image/image.component";
import {preview} from "./common/import/import";
import {Preview} from "./common/components/preview/preview.component";

export const App = () => {
    return (
        <>
           <Header />
            <main>
                <Preview />
            </main>
        </>
    );
};