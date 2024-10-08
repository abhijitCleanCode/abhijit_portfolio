import React, { useState, useEffect } from 'react'

const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
})

const FireFlyBackground = () => {
    const [fireFly, setFireFly] = useState([])

    useEffect(() => {
        const addFireFlyPeriodically = () => {
            const newFireFly = createFireFly();
            setFireFly((prevFireFly) => [...prevFireFly.slice(-14), newFireFly]);
        }

        const interval = setInterval(addFireFlyPeriodically, 1000);

        return () => clearInterval(interval);
    }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-50 overflow-hidden'>
      {
        fireFly.map((fireFly) => (
            <div
                key={fireFly.id}
                className='absolute rounded-full w-[10px] h-[10px] bg-firefly-radial'
                style={{
                    top: fireFly.top,
                    left: fireFly.left,
                    animation: `move ${fireFly.animationDuration} infinite alternate`,
                }}
            />
        ))
      }
    </div>
  )
}

export default FireFlyBackground

// prevFireFly.slice(-14): ensure that array stays with in the last 15 elements