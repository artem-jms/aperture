import React, {FC} from 'react';
import md from "./button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
    className?: string,
    text?: string,
}

export const Button: FC<ButtonProps> = ({ className, text }) => {
    return <button className={classNames(md.button, className)}>{text ? text : 'Read more'}</button>
};

