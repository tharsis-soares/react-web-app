import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import blogs from '../blogs'

function BlogsSection() {
    return (
        <BlogsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={"Blogs Populares"} subtitle={"Nossos artigos"} para={"teste para escrever alguma coisa"} />
                </div>
                <div className="blogs">
                    {
                        blogs.map((blog) => {
                            return  <div className="blog" key={blog.id}>
                                        <div className="image">
                                            <img src={blog.image} alt="" />
                                        </div>
                                        <h6>{blog.title}</h6>
                                        <div className="user">
                                            <p>Criado por:</p>
                                            <p>{blog.name}</p>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </SectionStyled>
        </BlogsSectionStyled>
    )
}

const BlogsSectionStyled = styled.div`

    .blogs{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        padding-top: 2rem;
        .blog{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            .image{
                height: 300px;
                width: 100%;
                overflow: hidden;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                transition: all .4s ease-in-out;
                img{
                    height: 100%;
                    width: 100%;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    transition: all .4s ease-in-out;
                    object-fill: cover;
                    filter: grayscale(60%);
                    &:hover{
                        filter: grayscale(0);
                        transform: scale(1.2) rotate(3deg);
                    }
                }
            }

            h6{
                font-weight: 500;
                font-size: 1.2rem;
                padding-top: 1rem;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .user{
                padding-top: .2rem;
                padding-bottom: 1.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                display: flex;
                p:first-child{
                    padding-right: 0.4rem;
                    opacity: 0.5;
                }
            }
        }
    }
`

export default BlogsSection
