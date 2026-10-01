import { DateTime } from 'list'

export default item => <>
    <td>{item.quotation?.title}</td>
    <td>{item.revisionNumber}</td>
    <DateTime value={item.revisionDate} />
    <td>{item.total}</td>
</>
