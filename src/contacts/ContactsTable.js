import {formatAbn, formatDate} from '../Utils';
import {Table} from 'react-bootstrap'

export default function ContactsTable({ contacts }) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Created Date</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.firstName} {contact.lastName}</td>
            <td>{contact.organisation.name} ({formatAbn(contact.organisation.abn)})</td>
            <td>{formatDate(contact.createdOn, 'DD/MM/yyyy')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}