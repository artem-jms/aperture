import React, {FC} from 'react';
import {Image} from "../image/image.component";
import {aperture__small, geo, iso, preview, shutter} from "../../import/import";
import md from './preview.module.scss'
interface PreviewProps {}

export const Preview: FC<PreviewProps> = ({}) => {
    return (
        <div className={md.preview}>
            <Image className={md.background} src={preview} alt={''}/>
            <section className={md.header}>
                <div className={md.header__wrapper}>
                    <div className={md.name}>Photographer & Filmmaker</div>
                    <h1 className={md.title}>Aperture Studios</h1>
                    <span className={md.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>
                </div>
            </section>
            <ul className={md.nav}>
                <li className={md.nav__item}><Image src={shutter} alt={''}/>1/2000s</li>
                <li className={md.nav__item}><Image src={aperture__small} alt={''}/>f/11</li>
                <li className={md.nav__item}><Image src={iso} alt={''}/>100</li>
                <li className={md.nav__item}><Image src={geo} alt={''}/>Iceland</li>
            </ul>
        </div>
    )
};

