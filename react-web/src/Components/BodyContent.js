import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import BlogsSection from './BlogsSection'
import ContactSection from './ContactSection'
import DemonstrationSection from './DemonstrationSection'
import GradientCardsSection from './GradientCards'
import MainTitle from './MainTitle'
import SellerCard from './SellerCard'

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Criptomoedas'} subtitle={'NFT'} />
                <div className="sellercards">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
                <BlogsSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayout>
            <ContactSection />
            <footer>
                <p>Copyright @carameloweb. Direitos reservados</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }

    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        background-color: #020A27;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            opacity: 0.7;
            text-align: center;
        }
    }

`

export default BodyContent