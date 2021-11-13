import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import map from '../img/map.png'

function ContactSection() {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Entre em contato
                    </h3>
                    <p>Praia do Campeche</p>
                    <p>+55 48 996236605</p>
                    <p>tharsissoares@hotmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`

    background-color: #020c31;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 4rem 0;
    z-index: 1;
    p{
        opacity: 0.5;
        margin: .4rem 0;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img{
            width: 80%;
            opacity: 0.07;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        fonr-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
            left: 50%;
        }
    }
`

export default ContactSection