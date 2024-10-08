import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WizardHat from '../components/WizardHat';
import { Leva, useControls } from 'leva';
import { styles } from '../styles';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';

import CanvasLoader from '../components/CanvasLoader';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import WizardStaff from '../components/WizardStaff';
import Button from '../components/Button';
import FireFlyBackground from './FireFlyBackground';

const Hero = () => {
    const controls = useControls('WizardHat', {
        
    })

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* <FireFlyBackground /> */}
            {/* Main text content */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am <span className='text-[#915EFF]'>Abhijit</span><span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag green-text-gradient">Building Products & Brands</p>
            </div>

            {/* 3D model here */}
            <div className='w-full h-full absolute inset-0'>
                <Leva />
                <Canvas>
                    <Suspense fallback={<CanvasLoader />}>
                        <perspectiveCamera makeDefault position={[0, 0, 20]} />

                        <WizardHat 
                        scale={sizes.wizard_hat_Scale} 
                        position={[0, -1, 0]} 
                        rotation={[0, Math.PI, -0.3]} />

                        <group>
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <WizardStaff position={sizes.wizardStaff} rotation={[0, 0, Math.PI / 2]} scale={[2, 2, 2]}/>
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={sizes.reactLogoPosition} />

                    </Suspense>
                </Canvas>
            </div>

            <div className='w-full absolute bottom-7 left-0 right-0 w-full z-10 c-space flex flex-col space-y-2 justify-center items-center mx-auto'>
                <p className='text-xl font-medium green-text-gradient text-center mx-auto'><span className='font-black text-[48px] orange-text-gradient'>"</span> Programming is an art of wizardry, where lines of code brings magic to the world, giving spirits to machine</p>

                <a href='#about' className='w-fit flex mx-auto justify-center'>
                    <Button name="Let's work together" isBeam containerClass = "sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
