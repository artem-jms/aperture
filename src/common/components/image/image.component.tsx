import React, {FC} from 'react';
import classNames from "classnames";
import md from './image.module.scss'
interface ImageProps {
    src: string,
    alt: string,
    className?: string,
}

export const Image: FC<ImageProps> = ({alt, src, className}) => {
    return <img className={classNames(className, md.image)} src={src} alt={alt}/>
}
