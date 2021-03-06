import Layout, { Wrapper } from '@components/Layout/'
import { ButtonPrimaryAnchorTag } from '@components/Button'
import Title from '@components/Title'
import { WorkLogo } from '@components/Logo'
import Projects from '@components/Projects'
import FAQ from '@components/FAQ'
import { Box } from '@components/Box'
import Memoji from '@components/Memoji'
import { designTokens } from '@components/Theme/designTokens'

const Work = ({ title, description}) => {

  return (
    <>
      <Layout pageTitle={`${title} | Work`} description={description} ogImage="/social-media.png">
        <Wrapper>
          <Title>
            <div style={{ width: '72px'}}>
              <WorkLogo/>
            </div>
            <h1>Work</h1>
          </Title>
        </Wrapper>
        <Wrapper>
          <h3>Projects (coming soon)</h3>
          <p>
            I'm in the proceess of moving my work/case studies to this site, but you can <a className="link" href="https://work.ryanparag.com">find my current work here</a>.
          </p>
          <hr/>
          <h3>... or take a look at a few of my side projects</h3>
          <Projects/>
          <hr/>
        </Wrapper>
        <FAQ/>
      </Layout>
    </>
  )
}

export default Work

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
