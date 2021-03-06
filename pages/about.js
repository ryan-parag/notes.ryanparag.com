import React, { useState } from 'react'
import Layout, { Wrapper } from '@components/Layout/'
import { designTokens } from '@components/Theme/designTokens'
import Link from 'next/link'
import { ButtonLink } from '@components/Button'
import Title from '@components/Title'
import getPosts from '@utils/getPosts'
import PostList from '@components/PostList/'
import Subscribe from '@components/Subscribe'
import Randomizer from '@components/Randomizer'
import Accordion from '@components/Accordion'
import { EmailButton } from '@components/ContactBox'
import { SpotifyCurrentlyPlaying } from '@components/Spotify'
import Memoji from '@components/Memoji'
import { Send, ArrowRight } from 'react-feather'
import { ChipLink } from '@components/Chip'

const About = ({ posts, title, description, ...props }) => {

  const sortedPosts = posts.slice().sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  const latestPosts = sortedPosts.slice(0, 3)

  const resources = [
    {name: 'Notion', href: 'https://www.notion.so/'},
    {name: 'Figma', href: 'https://www.figma.com/'},
    {name: 'React', href: 'https://reactjs.org/'},
    {name: 'Next.js', href: 'https://nextjs.org/'},
    {name: 'Styled Components', href: 'https://styled-components.com/'},
    {name: 'Feathericons', href: 'https://feathericons.com/'},
    {name: 'Inter typeface family', href: 'https://rsms.me/inter/'},
    {name: 'Airtable', href: 'https://airtable.com/'},
    {name: 'Spotify API', href: 'https://developer.spotify.com/documentation/web-api/'},
    {name: 'Framer Motion', href: 'https://www.framer.com/api/motion/'},
    {name: 'Feedback from many nice humans', href: 'https://www.tampabay.design/'}
  ]
  
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description} ogImage="/social-media.png">
        <article>
          <Wrapper>
            <Title>
              <Memoji/>
              <h1>Hello, I'm Ryan.👋</h1>
              <p className="lead">I'm a designer and <Randomizer/>.</p>
              <p>
                Currently, I'm on the digital innovation team at <a href="https://work.ryanparag.com/work/masonite">Masonite</a> in Tampa, FL &mdash; curious about how we can design thoughtful products around open-ended problems. Most of our work is centered around emerging, early-phase growth channels &mdash; conceptualizing a simpler home remodeling experience and designing multiple smart-home experiences for homeowners, contractors, and internal teams.
              </p>
              <p>
                Previously, I studied Healthcare Informatics and forecasted pricing models as a healthcare analyst. After switching tracks full-time, I helped design a payments platform for banks and retailers at <a href="https://work.ryanparag.com/work/disputelab">Chargebacks911</a>.
              </p>
              <p>
                I thrive in fast-paced, collaborative environments and am commited to being transparent in my work by trying to <Link href="/notes/"><a>share how I think and design</a></Link> about various problems.
              </p>
              <p>
                In my free time, you can find me <a className="link" href="https://github.com/ryan-parag">tinkering on a random project</a>, traveling to a random spot on the globe 🧳, learning how to race cars 🏎, biking around town 🚴‍♂️, or a bunch of other random things.
              </p>
              <p>
                <a href="/static/about/RyanParag-resume.pdf" target="_blank">View my resumé</a>, <Link href="/work/"><a className="link">view my work</a></Link>, or <a className="link" href="mailto:hello@ryanparag.com?subject=Hey Ryan!">contact me</a> for a more in-depth look.
              </p>
              <p>
                or view what I'm up to <Link href="/now/"><a className="link">now</a></Link>!
              </p>
            </Title>
          </Wrapper>
        </article>
        <Wrapper>
          <h3>How can I help?</h3>
          <p>
            Don't be a stranger &mdash; I'd love to help out or chat! Feel free to contact me if you:
          </p>
          <ul style={{ marginBottom: designTokens.space[4] }}>
            <li>Are looking for a designer who codes?</li>
            <li>Want to trade design feedback?</li>
            <li>Want to collaborate on a cool project?</li>
            <li>Have any cool movies, tv series, <Link href="/listening/podcasts"><a className="link">music/podcasts</a></Link> to recommend?</li>
            <li>Like to chat over coffee, tea, seltzer water, coke zero, whatever really ☕️</li>
          </ul>
          <p>
            <a className="link" href="mailto:hello@ryanparag.com?subject=Hey Ryan!">
              Send me an email
              <Send size={'20'} className="icon" style={{ top: designTokens.space[1] }}/>
            </a>
          </p>
          <hr/>
          <h3><Link href="/notes"><a>Recent Writing 📝</a></Link></h3>
          <PostList posts={latestPosts} />
          <p>
            <Link href="/notes">
              <a className="link">
                Read more notes
                <ArrowRight size={'20'} className="icon" style={{ top: designTokens.space[1] }}/>
              </a>
            </Link>
          </p>
          <hr/>
          <h3><Link href="/listening/music"><a>Recent Listens 🎧</a></Link></h3>
          <SpotifyCurrentlyPlaying playing />
          <hr/>
          <h3>Site Colophon</h3>
          <p>Like any designer, my portfolio is really never finished and is in a constant state of having the code reworked. This is the 5th iteration of my portfolio and I put this version together with help from the following resources:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: designTokens.space[3] }}>
            {
              resources.map((item, i) => (
                <ChipLink href={item.href} target="_blank" mr={designTokens.space[2]} mb={designTokens.space[2]} key={i}>{item.name}</ChipLink>
              ))
            }
          </div>
          <a className="link" href="https://github.com/ryan-parag/notes.ryanparag.com" target="_blank">
            Follow in the open on GitHub
            <ArrowRight size={'20'} className="icon" style={{ top: designTokens.space[1] }}/>
          </a>
          <hr/>
          <Subscribe/>
        </Wrapper>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../notes', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
