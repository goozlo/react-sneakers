import React, { useState } from 'react'
import styles from './Slider.module.sass'

const sliders = [
  { src: `/img/slider.jpg`, alt: 'kermit' },
  { src: `/img/slider2.jpg`, alt: 'kermit' },
  { src: `/img/slider3.jpg`, alt: 'kermit' },
]

const Silder: React.FC = () => {
  const [offset, setOffset] = useState(0)

  const next = () => {
    setOffset(prev => prev + 960)
  }

  const prev = () => {
    setOffset(prev => prev - 960)
  }

  return (
    <div className={styles.sliderBox}>
      <div className={styles.sliderVisible}>
        {sliders.map((item, index) => (
          <img
            key={index}
            src={item.src}
            width={960}
            height={300}
            style={{ transform: `translateX(${-offset}px)` }}
            alt={item.alt}
          />
        ))}
      </div>
      {offset !== (sliders.length - 1) * 960 && (
        <button className={styles.next} onClick={next}>
          <img src='/img/slider-button.svg' width={36} height={36} alt='' />
        </button>
      )}
      {offset !== 0 && (
        <button className={styles.prev} onClick={prev}>
          <img src='/img/slider-button.svg' width={36} height={36} alt='' />
        </button>
      )}
    </div>
  )
}

export default Silder
