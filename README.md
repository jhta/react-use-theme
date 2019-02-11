# react-use-theme
React Hook for consume Styled Component `theme`

## Install

`yarn add react-use-theme`

## How to use it? 

First you have to provide the theme on `<ThemeProvider>`:

````jsx

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useTheme from 'react-use-theme'

const theme = {
  colors: {
    myCustomColor: '#07c'
  }
}

// You have to provide a Context theme
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <MyComponent />
    </ThemeProvider>
  )
}

// then you can access to theme with useTheme hook
const MyComponent = () => {
  const titleColor = useTheme('colors.myCustomColor')
  
  // you can pass default values
  const defaultColor = 'red'
  const subtitleColor = useTheme('colors.anotherColor', defaultColor)
  
  return (
    <div>
      <Title color={titleColor}>Hello World</Title>
    </div>
  )

}

const Title = styled.h1`
  color: ${p => p.color};
`


````
