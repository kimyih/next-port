import { introText } from '@/constants'
import Image from 'next/image'


import React from 'react'

const Intro = () => {
  return (
<section id="intro">
        <div className="intro__inner">
            <h2 className="intro__title">{introText.title}</h2>
            <div className="intro__lines" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro__text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                </div>
                <div class="img">
                  <Image src={introText.img} alt={introText.title} width={300} height={300}  />
                </div>
            </div>
            <div class="intro__lines" aria-hidden="true">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </section>
  )
}

export default Intro