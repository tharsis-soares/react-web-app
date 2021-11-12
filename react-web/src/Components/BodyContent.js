import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import MainTitle from './MainTitle'

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Criptomoedas'} subtitle={'NFT'} />
            </InnerLayout>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`


`

export default BodyContent