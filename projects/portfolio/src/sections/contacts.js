import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import SectionTitle from '../components/section-title'
import OneColumnGrid from '../components/one-column-grid'
import ContactForm from '../components/contact-form'
import Message from '../components/message'

const ContactsSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: '100px',
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const sectionAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <section id="Contacts">
      <Wrapper ref={ref} animate={controls} initial="hidden" variants={sectionAnimation}>
        <SectionTitle title="Contacts" subTitle="Have a question or want to work together ?" uppercase />
        <OneColumnGrid items={2} breakTo={1} gap={4} maxWidth={140} padding={4} top={4}>
          <ContactForm />
          <Message />
        </OneColumnGrid>
      </Wrapper>
    </section>
  )
}

export default ContactsSection

const Wrapper = styled(motion.div)`
  padding-top: 5.5rem;
  overflow-x: hidden;
`
