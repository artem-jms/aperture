import React, {FC} from 'react';
import md from './works.module.scss'
import {gear, leaves, mountain} from "../../import/import";
import {PhotoInfo} from "../photo-info/PhotoInfo.component";
import {Image} from "../image/image.component";
import {Button} from "../button/button.component";
interface WorksProps {

}

export const Works: FC<WorksProps> = ({}) => {
    return (
        <div className={md.section}>
            <section className={md.block}>
                <Image className={md.image} alt={'mountain'} src={mountain} />
                <div className={md.info}>
                    <h3 className={md.title}>Sunset at Mount Fuji</h3>
                    <span className={md.description}>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</span>
                </div>
                <PhotoInfo
                    shutter={'1\'\''}
                    aperture={'f/16'}
                    iso={'400'}
                    geo={'Japan'}
                />
            </section>
            <div className={md.block__gap}>
                <div className={md.block__title}>
                    <div className={md.block__preview}>The Gear cage</div>
                    <h3 className={md.block__preview__title}>The tools that we use.</h3>
                    <span className={md.block__preview__description}>
                        The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.
                    </span>
                    <Button text={'Check it out'} className={md.button} />
                </div>
                <div className={md.block__image}>
                    <Image src={gear} alt={'gear'} className={md.block__image__img}/>
                    <PhotoInfo
                        shutter={'1/400s'}
                        aperture={'f/3,5'}
                        iso={'100'}
                        geo={'Costa Rica'}
                    />
                </div>
            </div>
            <section className={md.block}>
                <Image className={md.image} alt={'leaves'} src={leaves} />
                <div className={md.info}>
                    <h3 className={md.title}>Monstera Leafs</h3>
                    <span className={md.description}>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</span>
                </div>
                <PhotoInfo
                    shutter={'1/400s'}
                    aperture={'f/3,5'}
                    iso={'100'}
                    geo={'Costa Rica'}
                />
            </section>
        </div>
    );
};

