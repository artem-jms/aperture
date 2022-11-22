import React, {FC} from 'react';
import {Image} from "../image/image.component";
import {aperture__small, geo, iso, preview, shutter} from "../../import/import";
import md from './preview.module.scss'
import {PhotoInfo} from "../photo-info/PhotoInfo.component";
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
            <PhotoInfo
                shutter={'1/2000s'}
                aperture={'f/11'}
                iso={'100'}
                geo={'Iceland'}
            />
        </div>
    )
};

