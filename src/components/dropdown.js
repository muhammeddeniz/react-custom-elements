import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Up, Down } from './icons'

const Dropdown = ({ select, selections }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (select) {
      select(selected)
    }
  })

  const Dropdown = styled.div`
    display: inline-block;
    position: relative;
    min-width: 200px;
  `

  const DropdownDefault = styled.div`
    display: flex;
    padding: 2px 14px;

    border-radius: 6px;

    align-items: center;
    justify-content: space-between;
    background: #fff;

    border: 0.4px solid #ccc;

    user-select: none;
    cursor: pointer;

    box-shadow: 2px 2px 12px #ccc;
  `

  const DropdownOpen = styled.div`
    background: #fff;

    transition: all 0.5s ease-in-out;
    position: absolute;

    width: 180px;
    margin-left: 10px;

    border: 0.4px solid #ccc;

    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  `
  const DropdownOpenItem = styled.div`
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 8px;
    z-index: 1;
    margin: 6px 0px;

    cursor: pointer;
    position: relative;
  `

  const Span = styled.div`
    height: 1px;

    background: #111;
    margin-top: 6px;
  `

  const DropdownText = styled.p`
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  `

  return (
    <Dropdown>
      <DropdownDefault onClick={() => setOpen(!open)}>
        <p>{selected === '' ? selections[0] : selected}</p>
        {open ? <Up /> : <Down />}
      </DropdownDefault>

      {open && (
        <DropdownOpen>
          {selections?.map((item, key) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <DropdownOpenItem
                onClick={() => {
                  setSelected(item)
                  setOpen(false)
                }}
              >
                <DropdownText>{item}</DropdownText>
                {selections.length - 1 !== key && <Span />}
              </DropdownOpenItem>
            )
          })}
        </DropdownOpen>
      )}
    </Dropdown>
  )
}

export default Dropdown
