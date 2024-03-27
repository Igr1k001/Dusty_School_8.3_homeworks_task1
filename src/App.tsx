import React, { MouseEvent, useState } from 'react';

import './App.css';
import { cnApp } from './App.classname';
import { AddIconForm } from './components/AddIconForm/AddIconForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconsMap } from './components/AddIconForm/AddIconForm'


export type TIconIds = 'Circle' | 'Bridge' | 'Cat' | 'Dog' | 'Hippo' | 'Shrimp' | 'Worm' | 'Frog' | 'Otter' | 'KiwiBird' | 'Dove' | 'Crow' | 'Tags';

function App() {
    const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [showForm, setShowForm] = useState(false);
    const [paramIcons, setParamIcons] = useState<{ color: string, size: number, icon: TIconIds, x: number, y: number }[]>([]);

    const handleOpenForm = (event: MouseEvent) => {
        if (showForm) {
            return
        }

        setShowForm(true);

        setPosition({x: event.clientX, y: event.clientY});
    }
    const onSendForm = (color: string, size: number, icon: TIconIds) => {
        setShowForm(false);
        
        setParamIcons(prev => [...prev, { color, size, icon, x: position.x, y: position.y}]);
    }

    return (
        <div className={cnApp()}>
            <div 
                className={cnApp('Box')}
                onClick={handleOpenForm}
            >
                {showForm && <AddIconForm sendForm={onSendForm}/>}
                {paramIcons.map(paramIcon => <FontAwesomeIcon className={cnApp('Icon')} style={{ fontSize: paramIcon.size, top: paramIcon.y, left: paramIcon.x }} color={paramIcon.color} icon={iconsMap[paramIcon.icon]} />)}
            </div>
        </div>
    );
}

export { App };
