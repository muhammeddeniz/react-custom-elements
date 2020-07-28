import React from 'react'
import styled from 'styled-components'

const Button = ({ primary, secondary, outline, dark, ...props }) => {
  const PrimaryButton = styled.button`
    border: 0px solid;
    border-radius: 4px;

    padding: 8px 14px;

    font-size: 16px;
    font-weight: 400;

    text-transform: capitalize;
    outline: none;
    cursor: pointer;

    background: #ff304f;
    color: white;

    &:hover {
      background: #d72323;
    }
  `

  const DarkButton = styled.button`
    border: 0px solid;
    border-radius: 4px;

    padding: 8px 14px;

    font-size: 16px;
    font-weight: 400;

    text-transform: capitalize;
    outline: none;
    cursor: pointer;

    background: #0e153a;
    color: white;

    &:hover {
      background: #000;
    }
  `

  const SecondaryButton = styled.button`
    border: 0px solid;
    border-radius: 4px;

    padding: 8px 14px;

    font-size: 16px;
    font-weight: 400;

    text-transform: capitalize;
    outline: none;
    cursor: pointer;

    background: #482ff7;
    color: white;

    &:hover {
      background: #003666;
    }
  `

  const OutlineButton = styled.button`
    border: 2px solid #111;
    border-radius: 4px;

    padding: 6px 14px;

    font-size: 16px;
    font-weight: 400;

    text-transform: capitalize;
    outline: none;
    cursor: pointer;

    background: #fff;
    color: #111;

    &:hover {
      background: #111;
      color: white;
    }
  `

  return dark ? (
    <DarkButton {...props}>Default</DarkButton>
  ) : secondary ? (
    <SecondaryButton {...props}>Default</SecondaryButton>
  ) : primary ? (
    <PrimaryButton {...props}>Default</PrimaryButton>
  ) : outline ? (
    <OutlineButton {...props}>Default</OutlineButton>
  ) : (
    <PrimaryButton {...props} />
  )
}

export default Button
