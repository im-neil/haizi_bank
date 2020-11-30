import React, { useState, useEffect } from 'react'
import { Container, Card, CardDeck, ListGroup } from 'react-bootstrap'
import axios from 'axios'

const Peek = ({ match }) => {
  const [child, setChild] = useState({})
  const id = match.params.id
  const secret = match.params.secret

  const displayDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  useEffect(() => {
    const fetchPeek = async () => {
      try {
        const url = `/api/child/${id}/${secret}`
        const res = await axios.get(url)
        if (res.status === 200) {
          setChild(res.data)
        } else {
          // @todo Alert failure
        }
      } catch (error) {
        // @todo Alert failure
        setChild({})
      }
    }
    fetchPeek()
  }, [id, secret])

  let fundList = null
  if (child.funds) {
    fundList = child.funds.map((fund) => (
      <ListGroup.Item
        key={fund._id}
      >{`${fund.name}: $${fund.balance}`}</ListGroup.Item>
    ))
  }

  let deposits = null
  if (child.recentDeposits) {
    deposits = child.recentDeposits.map((deposit) => (
      <ListGroup.Item key={deposit._id}>{`${displayDate(deposit.date)}: ${
        deposit.action
      }`}</ListGroup.Item>
    ))
  }

  let withdrawals = null
  if (child.recentWithdrawals) {
    withdrawals = child.recentWithdrawals.map((withdrawal) => (
      <ListGroup.Item key={withdrawal._id}>{`${displayDate(withdrawal.date)}: ${
        withdrawal.action
      }`}</ListGroup.Item>
    ))
  }

  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Header>
            {child.avatar && (
              <Card.Img
                variant='top'
                className='avatar'
                src={`/avatars/${child.avatar}`}
              />
            )}
            <div style={{ height: '100%', padding: '1.6rem 0' }}>
              <h3>{child.name}</h3>
            </div>
          </Card.Header>

          <ListGroup variant='flush'>{fundList}</ListGroup>

          <Card.Body className='borderBottom'>
            <Card.Title>Recent Deposits</Card.Title>
            <ListGroup variant='flush'>{deposits}</ListGroup>
          </Card.Body>

          <Card.Body>
            <Card.Title>Recent Withdrawals</Card.Title>
            <ListGroup variant='flush'>{withdrawals}</ListGroup>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Last updated {displayDate(child.updatedAt)}
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default Peek
