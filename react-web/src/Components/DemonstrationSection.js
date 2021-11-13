import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import avatar from '../img/person.jpg'
import person2 from '../img/bitcoin3.jpg'
import bitcoin from '../img/bitcoin.jpg'
import person3 from '../img/person3.jpg'
import computer from '../img/computer.jpg'
import CtaButton from './CtaButton'
import GradientCard from './GradientCard'

function DemonstrationSection() {
    const ctaButton = <CtaButton name={'Peça uma reunião'}/>
    
    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
            <div className="title-con">
                <MainTitle title={'Demonstrações'} subtitle={'projetos'} para={"teste para colcoar texto longos"}/>
            </div>
            <div className="gradient-cards-con">
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'} ctaButton={ctaButton} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'}  ctaButton={ctaButton} />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'}  ctaButton={ctaButton} />
                    <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Titulo a escrever'}  ctaButton={ctaButton} />
                </div>
            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`

`

export default DemonstrationSection
