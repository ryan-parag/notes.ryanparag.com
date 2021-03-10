import React, { useState } from 'react'
import { designTokens } from '@components/Theme/designTokens'
import styled, { css } from 'styled-components'
import { ChevronDown } from 'react-feather'

const ContainerStyles = css`
  border: 1px solid var(--grey200);
  border-radius: ${designTokens.space[2]};
  margin-bottom: ${designTokens.space[4]};
  position: relative;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.12);
  transition: all 120ms ease-out 0s;
`

const AccordionContainer = styled.div`
  ${ContainerStyles}
`

const AccordionControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${designTokens.space[3]} ${designTokens.space[4]};
  font-size: ${designTokens.fontSizes[1]};
  cursor: pointer;
  width: 100%;
  appearance: none;
  background: transparent;
  border-bottom: 1px solid var(--grey200);
  font-weight: ${designTokens.fontWeights.bold};
  transition: all 120ms ease-out 0s;
  &:hover, &:focus {
    color: var(--grey700);
  }
  .icon {
    transition: all 200ms ease-out 0s;
  }
  .open {
    transform: rotate(180deg);
  }
`

const AccordionBody = styled.div`
  padding: ${designTokens.space[3]} ${designTokens.space[4]};
  color: var(--grey700);
  p {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const Accordion = ({children, label, open}) => {

  const [active, setActive] = useState(open)

  return(
    <AccordionContainer>
      <AccordionControl role="button" onClick={() => setActive(!active)}>
        {label}
        <ChevronDown size="20" className={active ? 'icon open' : 'icon closed'}/>
      </AccordionControl>
      {
        active ? (
          <AccordionBody>
            {children}
          </AccordionBody>
        )
        :
        null
      }
    </AccordionContainer>
  )
}

export default Accordion