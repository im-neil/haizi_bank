import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Dashboard = () => {
  const parentId = '5fc2fe3c439c84447cbc7195'
  const [children, setChildren] = useState([])

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        //const { data } = await axios.get(`/api/parent/${parentId}`)
        const { data } = await axios.get(`/api/parent/${parentId}`)

        /*
        const temp = data.map((child) => {
          setChildren((prev) => [...prev, JSON.stringify(child)])
        })
        */

        data.array.forEach((element) => {
          setChildren((prev) => [...prev, JSON.stringify(element)])
        })

        const second = data[1]
        //setChildren((second) => [...children, second])

        //console.log(data[0])

        //console.log(data)
      } catch (error) {
        setChildren([])
      }
    }

    fetchChildren()
  }, [])

  /*
  useEffect(() => {
    axios.get(`/api/parent/${parentId}`).then((res) => {
      setChildren((children) => [...children, res.data])
      console.log(children)
    })
  }, [])*/

  return (
    <Container>
      <Row xs='3'>
        <Col>
          <h1>{children}</h1>
        </Col>
        <Col>
          <h1>Dashboard column2</h1>
        </Col>
        <Col>
          <h1>Dashboard column3</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
