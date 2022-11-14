import React, {FC} from 'react';
import md from './header.module.scss'
import {NavLink} from "react-router-dom";
import {aperture} from "../../import/import";
import {Image} from "../image/image.component";
import classNames from "classnames";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {

    return (
        <header className={md.header}>
            <nav className={md.nav}>
                <Image src={aperture} alt={'logo'}/>
                <ul className={md.header__buttons}>
                   <li className={md.header__button}><NavLink to={'/'}>Business areas</NavLink></li>
                   <li className={md.header__button}><NavLink to={'/'}>Featured images</NavLink></li>
                   <li className={md.header__button}><NavLink to={'/'}>Gear cage</NavLink></li>
                   <li className={md.header__button}><NavLink to={'/'}>Contact</NavLink></li>
                   <li className={classNames(md.header__button, md.header__button__huge)}>
                       <NavLink to={'/'}>Get template</NavLink>
                   </li>
                </ul>
            </nav>
        </header>
    );
};

