import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { client } from '../client';

const Experience = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <section className="c-space mt-20">
            <h3 className="head-text">My Work Experience</h3>

            <div className="client-container">
                {abouts.map((item, index) => (
                    <motion.div
                        key={`work-${index}`}
                        className="client-review"
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                    >
                        <p className="text-white-800 font-light">{item.title}</p>

                        <div className="client-content">
                            <div className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white-800">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience