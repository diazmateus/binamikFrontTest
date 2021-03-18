import React, { useState, useEffect } from 'react'
import api from '../services/api'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import { PeopleItem } from '../components/PeopleItem'
import styled from 'styled-components'

export default function Peoples() {
  const [peoples, setPeoples] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get(`people/?page=${page}`)
      if (response.status === 200) {
        const {data = []} = response
        setPeoples(data)
        const _totalPages = Math.ceil(data.count / 10)
        setTotalPages(_totalPages)
      }

      setLoading(false)
    }

    setLoading(true)
    loadPeoples()
  }, [page])


  const onNextPage = () => {
    setPage(page === totalPages ? page : page + 1)
  }

  const onPreviusPage = () => {
    setPage(page === 1 ? page : page - 1)
  }

  if (loading) {
    return <Container> <Loading/> </Container>
  }

  return (
    <>
      <Pagination
        onPreviusPage={onPreviusPage}
        onNextPage={onNextPage}
        page={page}
        totalPages={totalPages}
      />
      <Container>
        {peoples.results && peoples.results.map((people, index) => PeopleItem(people, index))}
      </Container>
    </>
  )
}


const Container = styled.div`
  max-width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`


