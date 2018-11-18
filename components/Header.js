import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(228, 233, 237, 1);
  box-shadow: 0px 12px 20px -5px rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const Nav = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  padding: 0 7px;
`

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" ><a>Home</a></Link>
      <Link href="/test"><a>Test</a></Link>
      <Link href="/about"><a>About</a></Link>
    </Wrapper>
  )
}

export default Header
