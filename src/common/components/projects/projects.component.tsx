import React, {FC, ImgHTMLAttributes, useState} from 'react';
import md from './projects.module.scss'
import {Button} from "../button/button.component";

interface ProjectsProps {
    cards: ProjectElementProps[]
}
export interface ProjectElementProps {
    _id: number,
    data: {
        title: string,
        description: string,
        link?: string,
    },
}

export const Projects:FC<ProjectsProps> = ({cards}) => {

    return (
        <section className={md.section}>
            <div>
                <h2 className={md.header}>What we do.</h2>
                <span className={md.header__span}>The areas that we're specialized in.</span>
            </div>
            <div className={md.cards}>
                {cards.map((project: ProjectElementProps) => (<div className={md.card} key={project._id}>
                    <img className={md.image} src={project.data.link} alt={'card'}/>
                    <article className={md.info}>
                        <h3 className={md.title}>{project.data.title}</h3>
                        <div className={md.description}>{project.data.description}</div>
                        <Button className={md.button}/>
                    </article>
                </div>))}
            </div>
        </section>
    );
};

