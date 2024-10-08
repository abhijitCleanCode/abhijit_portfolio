import React from 'react';

import Balls from '../components/Balls';
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className='c-space mt-10 flex flex-row flex-wrap justify-center gap-10'>

            {
                technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <Balls icon={technology.icon} />
                    </div>
                ))
            }

        </div>
    )
}

export default Tech