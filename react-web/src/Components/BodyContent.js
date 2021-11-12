import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import BlogsSection from './BlogsSection'
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
            </InnerLayout>
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

`

export default BodyContent