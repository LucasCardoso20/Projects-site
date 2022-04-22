import React from 'react'
import './Hero.scss'
import '../../index.scss'
import heroimg from '../../assets/hero-img.svg'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        
        <div className='hero__content'>
            <h2>Todos os projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et reiciendis qui repellat impedit. 
                Maxime dolor iusto veritatis possimus error provident aut voluptas, non voluptatem ab fugit, 
                illum sapiente pariatur?
            </p>
            <button className='btn'>ver projetos</button>
        </div>

        <div className='hero__img'>
            <img src={heroimg}/>
        </div>
    </div>
  )
}

export default Hero