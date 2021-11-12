import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import GradientCard from './GradientCard'
import person from '../img/person.jpg'
import avatar from '../img/person3.jpg'
import bitcoin2 from '../img/bitcoin2.jpg'
import person3 from '../img/person3.jpg'
import computer from '../img/computer.jpg'
import bitcoin from '../img/bitcoin.jpg'

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={"Novos projetos vindo"} subtitle={"Blogs/Conteúdos - Sistemas Administrativos - Institucionais - E-Commerce"} />
                </div>

                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}


const GradientCardsSectionStyled = styled. div`

`

export default GradientCardsSection