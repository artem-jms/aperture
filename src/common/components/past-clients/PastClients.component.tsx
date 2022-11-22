import React, {FC} from 'react';
import md from './pastclients.module.scss';
import {Image} from "../image/image.component";

interface PastClientsProps {
    companies: any[];
}

export const PastClients: FC<PastClientsProps> = ({companies}) => {
    return (
        <section className={md.wrapper}>
            <h2 className={md.title}>Past clients</h2>
            <div className={md.description}>Trusted by your favourite companies</div>
            <ul className={md.companies}>{companies.map(company => <li><Image src={company} alt={'company'}/></li>)}</ul>
        </section>
    );
};

