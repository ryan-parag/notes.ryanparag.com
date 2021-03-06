import React from 'react'
import Link from 'next/link'
import { BoxAnchorLink, BoxBaseLink } from '@components/Box'
import styled, { css } from 'styled-components'
import List, { ListItem } from '@components/List'
import { designTokens } from '@components/Theme/designTokens'
import { truncateString } from '@utils/text'

const NewProjectImage = styled.img`
  width: ${designTokens.space[7]};
  height: ${designTokens.space[7]};
  position: absolute;
  right: ${designTokens.space[1]};
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${designTokens.space[1]};
  box-shadow: 0px 0px 0px 2px var(--grey200);
  transition: all 120ms ease-out 0ms;
  @media screen and (max-width: ${designTokens.breakpoints[4]}) {
    width: ${designTokens.space[6]};
    height: ${designTokens.space[6]};
  }
`

const NewProjectStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${designTokens.space[4]} 0;
  transition: all 120ms ease-out 0s;
  color: var(--grey900);
  position: relative;
  overflow: hidden;
  &:hover, &:focus {
    padding-left: ${designTokens.space[3]};
    text-decoration: none;
    box-shadow: inset 4px 0px 0px var(--primary);
    background: var(--grey100);
    ${NewProjectImage} {
      transform: translateY(-40%) translateX(-${designTokens.space[3]}) rotate(10deg) scale(2.5);
      box-shadow: 0px 4px 8px -1px var(--grey300);
      @media screen and (max-width: ${designTokens.breakpoints[4]}) {
        transform: translateY(-50%) translateX(${designTokens.space[3]}) rotate(10deg) scale(1.5);
      }
    }
  }
  p {
    color: var(--grey600);
    @media screen and (max-width: ${designTokens.breakpoints[4]}) {
      font-size: ${designTokens.fontSizes[0]};
    }
  }
`

const NewProjectAnchorTag = styled.a`
  ${NewProjectStyles}
`

const NewProjectLink = styled.div`
  a {
    ${NewProjectStyles}
  }
`

const NewProjectContentContainer = styled.div`
  flex: 1 1 0%;
`

const NewProjectContent = styled.div`
  color: ${props => props.subtle ? 'var(--grey400)' : 'inherit'};
  @media screen and (max-width: ${designTokens.breakpoints[4]}) {
    padding-right: ${designTokens.space[8]};
  }
`

export const ProjectItem = ({project}) => {
  return(
    <>
      {
        project.outbound ? (
          <NewProjectAnchorTag
            href={project.link}
          >
            <NewProjectContentContainer>
              <NewProjectContent>
                <h4 style={{ marginTop: '0', marginBottom: designTokens.space[2]}}>
                  {project.name}
                </h4>
                <p style={{ marginBottom: designTokens.space[2] }}>
                  {truncateString(project.description, 72)}
                </p>
              </NewProjectContent>
            </NewProjectContentContainer>
            {
              project.image ? (
                <NewProjectImage src={project.image} alt={project.name} />
              )
              :
              null
            }
          </NewProjectAnchorTag>
        )
        :
        (
          <NewProjectLink>
            <Link href={project.link}>
              <a>
                <NewProjectContentContainer>
                  <NewProjectContent>
                  <h4 style={{ marginTop: '0', marginBottom: designTokens.space[2]}}>
                    {project.name}
                  </h4>
                  <p style={{ marginBottom: designTokens.space[2] }}>
                    {truncateString(project.description, 72)}
                  </p>
                  </NewProjectContent>
                </NewProjectContentContainer>
                {
                  project.image ? (
                    <NewProjectImage src={project.image} alt={project.name} />
                  )
                  :
                  null
                }
              </a>
            </Link>
          </NewProjectLink>
        )
      }
    </>
  )
}

export default function Projects(){

  const projects = [
    {
      name: 'Slack Themes',
      description: 'Having trouble keeping track of all of your Slack workspaces?',
      image: '/static/projects/icon-slack-themes.png',
      link:'https://slack-themes.now.sh/',
      outbound: true
    }, {
      name: 'TampaBay.design',
      description: 'How to get involved in one of the many local design communities',
      image: '/static/projects/icon-tbd.png',
      link:'https://tampabay.design',
      outbound: true
    }, {
      name: 'Recent Listens',
      description: 'Take a look at my current music/podcast feed',
      image: '/static/projects/icon-listens.png',
      link:'/listening',
      outbound: false
    }, {
      name: 'Theme Creator',
      description: 'Feed your curiousity by theming this website',
      image: '/static/projects/icon-theme-creator.png',
      link:'/create-theme',
      outbound: false
    }, {
      name: 'Worksheets',
      description: 'Questions and resources to utilize in your UX process',
      image: '/static/projects/icon-worksheets.png',
      link:'/worksheets',
      outbound: false
    }, {
      name: 'Figma',
      description: 'Check out my files and plugins on Figma Community',
      image: '/static/projects/icon-figma.png',
      link:'https://figma.com/@ryanparag',
      outbound: true
    }
  ]

  return(
    <List>
      {
        projects.map(project => (
          <ListItem key={project.name}>
            <ProjectItem project={project}/>
          </ListItem>
        ))
      }
    </List>
  )
}