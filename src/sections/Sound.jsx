import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Toggle play/pause
    const toggle = () => {
        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    return (
        <div className='fixed top-4 right-2.5 xs:right-4 z-50 group text-white'>
            <audio ref={audioRef} loop>
                <source src={"/audio/birds39-forest-20772.mp3"} type='audio/mpeg' />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
                aria-label={"Sound control button"}
                name={"Sound control button"}
            >
                {isPlaying ? (
                    <FaVolumeHigh
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
                ) : (
                    <FaVolumeXmark
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
                )}
            </motion.button>
        </div>
    )
}

export default Sound