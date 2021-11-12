import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import SmallHeading from './SmallHeading'
import blockchain from '../img/bchain.png'
import CtaButton from './CtaButton'

function MainContent() {
    return (
        <MainContentStyled>
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'Sua inspiração aqui!'} idendifier={'Before'} />
                    <h1>
                        Tudo o que sua empresa precisa
                        Designs para inspirar <span className="GradientText">SUA EMPRESA</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                    <div className="btn-con">
                        <CtaButton name={'descubra mais'}/>
                        <CtaButton name={'peça uma reunião'}/>
                    </div>
                </div>
                <div className="right">
                    <img src={blockchain} alt=""></img>
                </div>
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translateX(-50%);
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .btn-con{
            margin-top: 2rem;
        }
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
    }

`

export default MainContent
