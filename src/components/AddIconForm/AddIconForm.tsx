import React, { ChangeEvent, FormEvent, useState } from 'react';

import './AddIconForm.css';

import { cnAddIconForm } from './AddIconForm.classname';
import { faBridge, faCircle, faCat, faDog, faHippo, faShrimp, faWorm, faFrog, faOtter, faKiwiBird, faDove, faCrow, IconDefinition, faTags } from "@fortawesome/free-solid-svg-icons";
import { TIconIds } from '../../App'

export interface IAddIconFormProps {
    sendForm: (color: string, size: number, icon: TIconIds) => void;
}

export const iconsMap: Record<TIconIds, IconDefinition> = {
    Circle: faCircle,
    Bridge: faBridge,
    Cat: faCat,
    Dog: faDog,
    Hippo: faHippo,
    Shrimp: faShrimp,
    Worm: faWorm,
    Frog: faFrog,
    Otter: faOtter,
    KiwiBird: faKiwiBird,
    Dove: faDove,
    Crow: faCrow,
    Tags: faTags
};

const ICON_KEYS = Object.keys(iconsMap);

export const AddIconForm: React.FC<IAddIconFormProps> = ({ sendForm }) => {
    const [currentColor, setCurrentColor] = useState('#000');
    const [currentSize, setCurrentSize] = useState(0);
    const [currentIcon, setCurrentIcon] = useState<TIconIds>('Circle');


    const handleSubmit = (event: FormEvent) => {
        sendForm(currentColor, Number(currentSize), currentIcon);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        if (value[0] === '#') {
            setCurrentColor(value);
        } else {
            setCurrentSize(Number(value));
        }
    }
    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentIcon(event.target.value as TIconIds)
        console.log(currentIcon)
    }

    return (
        <form className={cnAddIconForm()} onSubmit={handleSubmit}>
            <p>Выберите тип иконки:</p>
            <select
                value={currentIcon}
                onChange={handleChangeSelect}
            >
                {ICON_KEYS.map(key => 
                    <option>{key}</option>    
                )}
            </select>
            <p>Выберите размер иконки:</p>
            <input onChange={handleChange} type="number"></input>
            <p>Выберите цвет иконки:</p>
            <input type="color" onChange={handleChange}></input>
        </form>
    );
}
