import {
    DateTime,
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>quotationsQuotation</th>
    <th>quotationsNumber</th>
    <th>quotationsCustomer</th>
    <th>quotationsQuotationDate</th>
    <th>quotationsValidUntilDate</th>
    <th>quotationsTotal</th>
    <th>quotationsState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <td>{item.customer?.title}</td>
    <DateTime value={item.quotationDate} />
    <DateTime value={item.validUntilDate} />
    <td>{item.total}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
