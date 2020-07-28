import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Check } from './icons'

const CheckBox = ({
  w,
  h,
  setClick,
  color,
  bg,
  text = 'default',
  borderRadius
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (setClick) {
      setClick(checked)
    }
  })

  const MasterDiv = styled.div`
    display: inline-block;
  `

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;
    margin-bottom: 0;
    padding-bottom: 0;
  `
  const CheckBox = styled.div`
    border: 1px solid black;

    cursor: pointer;
    color: ${color || '#111'};

    width: ${w || 24}px;
    height: ${h || 24}px;

    border-radius: ${borderRadius || 999}px;
    margin-right: 10px;
  `

  const CheckBoxChecked = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    background: ${bg || '#111'};
    cursor: pointer;
    color: ${color || '#111'};

    width: ${w || 24}px;
    height: ${h || 24}px;

    border-radius: ${borderRadius || 999}px;

    margin-right: 10px;
  `

  const Text = styled.p`
    user-select: none;
    margin: 0;
  `

  return checked ? (
    <MasterDiv>
      <Container
        onClick={() => {
          setChecked(!checked)
        }}
      >
        <CheckBoxChecked>
          <Check color='white' />
        </CheckBoxChecked>
        <Text>{text}</Text>
      </Container>
    </MasterDiv>
  ) : (
    <MasterDiv>
      <Container
        onClick={() => {
          setChecked(!checked)
        }}
      >
        <CheckBox />
        <Text>{text}</Text>
      </Container>
    </MasterDiv>
  )
}

export default CheckBox
