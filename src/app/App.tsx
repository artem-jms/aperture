import React, {useState} from 'react';
import {Header} from "../common/components/header/header.component";
import {Image} from "../common/components/image/image.component";
import {c1, c2, c3, c4, c5, card1, card2, card3, card4, preview} from "../common/import/import";
import {Preview} from "../common/components/preview/preview.component";
import {Projects, ProjectElementProps} from "../common/components/projects/projects.component";
import {Works} from "../common/components/works/works.component";
import md from './app.module.scss'
import {PastClients} from "../common/components/past-clients/PastClients.component";
export const App = () => {

    const [cards, setCards] = useState<ProjectElementProps[]>([
        {
            _id: 0,
            data: {
                title: 'Product Photography',
                description: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
                link: card1
            }
        },
        {
            _id: 1,
            data: {
                title: 'Architecture Photography',
                description: 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.',
                link: card2
            }
        },
        {
            _id: 2,
            data: {
                title: 'Drone Photography',
                description: 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
                link: card3
            }
        },
        {
            _id: 3,
            data: {
                title: 'Wildlife Photography',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.',
                link: card4
            }
        },
    ])

    const [companies, setCompanies] = useState([c1, c2, c3, c4, c5])

    return (
        <>
            <Header />
            <main className={md.content}>
                <div className={md.wrapper}>
                    <Preview />
                    <Projects cards={cards} />
                    <Works />
                    <PastClients companies={companies}/>
                </div>
            </main>
        </>
    );
};