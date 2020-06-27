import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { designTokens } from '../Theme/designTokens'

const FooterContainer = styled.footer`
  width: 100%;
  padding: ${designTokens.space[6]} ${designTokens.space[3]};
  border-top: 1px solid ${({ theme }) => theme.grey100};
  color: ${({ theme }) => theme.grey500};
`

const FooterInner = styled.div`
  width: 100%;
  max-width: ${designTokens.layoutWidth};
  margin: auto;
`

const FooterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const FooterListItem = styled.li`
  margin-bottom: ${designTokens.space[3]};
  margin-right: ${designTokens.space[3]};
  a {
    font-size: ${designTokens.fontSizes[0]};
    color: ${({ theme }) => theme.grey500};
    transition: all 120ms ease-out 0s;
    &:hover, &:focus {
      color: ${({ theme }) => theme.highlightedText};
      background: ${({ theme }) => theme.greenTransparent};
      box-shadow: 0 0 0 ${designTokens.space[2]} ${({ theme }) => theme.greenTransparent};
    }
  }
`

export default function Footer() {
  return(
    <FooterContainer>
      <FooterInner>
        <FooterList>
          <FooterListItem>
            <Link href="/">
              Notes
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/about">
              About
            </Link>
          </FooterListItem>
          <FooterListItem>
            <a href="https://ryanparag.com">
              Portfolio
            </a>
          </FooterListItem>
          <FooterListItem>
            <a href="https://codepen.io/ryanparag">
              CodePen
            </a>
          </FooterListItem>
          <FooterListItem>
            <a href="https://github.com/ryan-parag">
              GitHub
            </a>
          </FooterListItem>
          <FooterListItem>
            <a href="https://dribbble.com/ryanparag">
              Dribbble
            </a>
          </FooterListItem>
        </FooterList>
        <small>Made with Next.js and Styled Components</small>
      </FooterInner>
    </FooterContainer>
  )
}