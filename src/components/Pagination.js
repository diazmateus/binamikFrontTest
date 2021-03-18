import React from 'react'
import styled from 'styled-components'

export default function Pagination({onNextPage, onPreviusPage, page, totalPages}) {
  return (
    <Container>
      <Info>Page {page} of {totalPages}</Info>
      {page > 1 && <Button onClick={onPreviusPage}> Previous </Button>}
      {page < totalPages && <Button onClick={onNextPage}> Next </Button>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  color: white;
`

const Info = styled.span`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  background: white;
  padding: 8px 16px;
  color: #0A1121;
  border: 1px solid white;
  margin-left: 8px;
  cursor: pointer;
`
