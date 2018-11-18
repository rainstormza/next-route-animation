import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'
import { Transition, animated } from 'react-spring'

export default class MyApp extends App {


  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
      <Header />
       <Transition
            native
            items={[]}
            from={{
              opacity: 0,
              // position: 'absolute',
              // width: '100%',
              // height: '100%'
  
            }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            keys={this.props.router.route}
          >
            {item => props => (
              <animated.div style={props}>
                <Component {...pageProps} />
              </animated.div>
            )}
      </Transition>
        
      </Container>
    )
  }
}
