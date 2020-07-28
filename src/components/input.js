import React from 'react'
import styled from 'styled-components'

const Input = ({ primary, secondary, width, height, ...props }) => {
  const PrimaryInput = styled.input`
    border-radius: 4px;
    padding: 5px 10px;
    border: 2px solid;

    width: ${width ? width : 260}px;
    height: ${height ? height : 20}px;

    font-size: 18px;
  `

  const SecondaryInput = styled.input`
    border-radius: 4px;
    padding: 5px 10px;
    border: 0px solid;

    box-shadow: 3px 4px 6px #ccc;

    width: ${width ? width : 260}px;
    height: ${height ? height : 20}px;

    font-size: 18px;
    outline: none;

    &:focus {
      box-shadow: 6px 4px 9px #ccc;
    }

    &:hover {
      box-shadow: 6px 4px 9px #ccc;
    }
  `

  return primary ? (
    <PrimaryInput {...props}></PrimaryInput>
  ) : secondary ? (
    <SecondaryInput {...props}></SecondaryInput>
  ) : (
    <PrimaryInput {...props}></PrimaryInput>
  )
}

export default Input
