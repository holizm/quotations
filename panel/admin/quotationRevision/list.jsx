import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>quotationsQuotation</th>
    <th>quotationsRevisionNumber</th>
    <th>quotationsRevisionDate</th>
    <th>quotationsTotal</th>
</>

const row = item => <>
    <td>{item.quotation?.title}</td>
    <td>{item.revisionNumber}</td>
    <DateTime value={item.revisionDate} />
    <td>{item.total}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
