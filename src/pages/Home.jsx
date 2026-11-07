import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Services from '../components/Services'
import StatsRow from '../components/StatsRow'
import CtaStrip from '../components/CtaStrip'
import PageMeta from '../components/PageMeta'

function Home() {
  return (
    <>
      <PageMeta titleKey="meta.page_titles.home" descriptionKey="meta.default_description" />
      <Hero />
      <ClientLogos />
      <Services />
      <StatsRow />
      <CtaStrip />
    </>
  )
}

export default Home
