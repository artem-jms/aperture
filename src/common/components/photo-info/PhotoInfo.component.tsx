import React, {FC} from 'react';
import md from "../preview/preview.module.scss";
import {Image} from "../image/image.component";
import {aperture__small as aperture_, geo as geo_, iso as iso_, shutter as shutter_} from "../../import/import";

interface PhotoInfoProps {
    shutter?: string | null,
    aperture?: string | null,
    iso?: string | null,
    geo?: string | null,
}

export const PhotoInfo: FC<PhotoInfoProps> = ({shutter, iso, geo, aperture}) => {
    return (
        <ul className={md.nav}>
            {shutter && <li
                className={md.nav__item}><Image
                style={{width: '15.25px', height: '16px'}}
                src={shutter_} alt={''}/>{shutter}</li>}
            {aperture && <li
                className={md.nav__item}><Image
                style={{width: '16px', height: '16px'}}
                src={aperture_} alt={''}/>{aperture}</li>}
            {iso && <li
                className={md.nav__item}><Image
                style={{width: '32px', height: '16px'}}
                src={iso_} alt={''}/>{iso}</li>}
            {geo && <li
                className={md.nav__item}><Image
                style={{width: '10px', height: '16px'}}
                src={geo_} alt={''}/>{geo}</li>}
        </ul>
    );
};

