import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

export const RevealExampleInstant = () => (
  <Reveal animated='move' instant>
    <Reveal.Content visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)