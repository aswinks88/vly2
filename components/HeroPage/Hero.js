import React from 'react'
import styled from 'styled-components'
import { Button, Input } from 'antd'
const Search = Input.Search

// this is the big container block that holds the container together lol
const AwesomeHeroContainer = styled.div`
  width: 80rem;
  height: 72rem;
  margin: auto;
  display: grid;
  grid-template-columns: 30rem 50rem;

  @media screen and (min-width: 1380px) and (max-width: 1920px) {
    height: 54rem;
  }

  @media screen and (min-width: 1282px) and (max-width: 1380px) {
    height: 44rem;
  }

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    height: 44rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    width: 100vw;
    height: 30rem;
    margin: auto;
    display: grid;
    grid-template-columns: 30vw 70vw;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100vw;
    height: auto;

  }
`
// start left hand video side
const HeroLeft = styled.div`
  margin-top: 7rem;
  width: 30rem;
  height: 60rem;
  overflow: hidden;
  object-fit: cover;
  border-radius: 24px 24px 24px 24px;

  @media screen and (min-width: 1380px) and (max-width: 1920px) {
    margin-top: 6rem;
    margin-left: 6rem;
    width: 24rem;
    height: 48rem;
  }
  @media screen and (min-width: 1282px) and (max-width: 1380px) {
    margin-top: 3rem;
    margin-left: 8rem;
    width: 18rem;
    height: 36rem;
  }
  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-top: 3rem;
    margin-left: 6rem;
    width: 18rem;
    height: 36rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-top: 2rem;
    margin-left: 5rem;
    width: 11rem;
    height: 22rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    margin-left: 0rem;
    width: 100vw;
    height: 24rem;
    border-radius: 0px;
  }
`

const Notch = styled.div`
  width: 12rem;
  height: 2rem;
  margin-left: 9rem;
  background-color: white;
  z-index: 100;
  position: absolute;
  border-radius: 0px 0px 24px 24px;

  @media screen and (min-width: 1380px) and (max-width: 1920px) {
    margin-left: 6rem;
    background-color: white;
  }
  @media screen and (min-width: 1282px) and (max-width: 1380px) {
    margin-left: 4rem;
    width: 10rem;
    height: 1.5rem;
    background-color: white;
  }
  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-left: 5rem;
    width: 8rem;
    height: 1rem;
    background-color: white;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-left: 3.5rem;
    width: 4rem;
    height: 0.8rem;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const AwesomeVideo = styled.video`
  position: relative;
  text-align: center;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  object-fit: fill;
  background-color: white;
  z-index: 1;
`
// end left hand video side

// start right hand copy + search + button side

const HeroRight = styled.div`
  position: relative;
  color: #ffffff;
  margin-top: 24rem;
  left: 5rem;

  @media screen and (min-width: 1380px) and (max-width: 1920px) {
    margin-top: 20rem;
    margin-left: 0rem;
  }

  @media screen and (min-width: 1282px) and (max-width: 1380px) {
    margin-top: 10rem;
    margin-left: -4rem;
    width: 32rem;
  }

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-top: 8rem;
    margin-left: -6rem;
    width: 35rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-top: 3rem;
    margin-left: -2rem;
    width: 32rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    width: 35rem;

    left: 0rem;
  }
`
const HeroHeader = styled.h1`
  color: black;
  font-family: Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-bottom: 0px;
  letter-spacing: -1.46px;

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    font-size: 2.5rem;
    letter-spacing: -0.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -0.03em;
  }
`

const HeroCopy = styled.p`
  letter-spacing: -0.3px;
  font-size: 1.5rem;
  color: #333333;

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    letter-spacing: -0.06rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

const SearchBox = styled.div`
  background-color: white;
  height: 4rem;
  width: 40rem;
  border-radius: 0.25rem;
  padding: 12px;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    width: 30rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    width: 50vw;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

// end right hand copy and CTA side

// begin actual component
const Hero = ({ ...props }) => (
  <AwesomeHeroContainer>
    <HeroLeft>
      <Notch />
      <AwesomeVideo autoPlay loop muted playsInline>
        <source src='./static/test.mp4' type='video/mp4' />
      </AwesomeVideo>
    </HeroLeft>
    <HeroRight>
      <HeroHeader>volunteer yo—self.</HeroHeader>
      <HeroCopy>
        Find awesome ways to volunteer your skills.
        <br />
        Help your community do epic things.
      </HeroCopy>
      <SearchBox>
        <Search
          placeholder="try 'building robots' "
          enterButton='Search'
          size='large'
          // eslint-disable-next-line no-console
          onSearch={value => console.log(value)}
        />
      </SearchBox>
      <br />
      <br />
      <Button type='secondary' shape='round' size='large'>
        Learn more
      </Button>
    </HeroRight>
  </AwesomeHeroContainer>
)
// LAUNCH IT. WOOOSH!
export default Hero
