import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ContactsTable from './ContactsTable';

export default class ContactsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/contacts')
    .then(res => res.json())
    .then(contacts => {
      this.setState({
        contacts: contacts
      })
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    const firstName = event.target[0].value || ''
    const lastName = event.target[1].value || ''
    const orgName = event.target[2].value || ''
    fetch(`http://localhost:8080/api/contacts?firstName=${firstName}&lastName=${lastName}&orgName=${orgName}`)
    .then(res => res.json())
    .then(contacts => {
      this.setState({
        contacts: contacts
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {

    const {contacts} = this.state

    const formGroupStyle = {
      marginBottom: "10px"
    }

    return (
      <Container>
        <Form style={{
          margin: "20px 0 20px 0"
        }} onSubmit={this.handleOnSubmit.bind(this)}>
          <Form.Group style={formGroupStyle} as={Row}>
            <Form.Label column sm={2}>First Name</Form.Label>
            <Col sm={10}>
            <Form.Control  type='input' placeholder='First Name'/>
            </Col>
          </Form.Group>

          <Form.Group style={formGroupStyle} as={Row}>
            <Form.Label column sm={2}>Last Name</Form.Label>
            <Col sm={10}>
            <Form.Control  type='input' placeholder='Last Name'/>
            </Col>
          </Form.Group>

          <Form.Group style={formGroupStyle} as={Row}>
            <Form.Label column sm={2}>Organisation Name</Form.Label>
            <Col sm={10}>
            <Form.Control  type='input' placeholder='Organisation Name'/>
            </Col>
          </Form.Group>

          <div className='text-center'>
          <Button variant="primary" type="submit">Search</Button>
          </div>

        </Form>


        <ContactsTable contacts={contacts} />
      </Container>
    )
  }
}