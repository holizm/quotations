import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <td>{item.customer?.title}</td>
    <DateTime value={item.quotationDate} />
    <DateTime value={item.validUntilDate} />
    <td>{item.total}</td>
    <td>{item.state?.title}</td>
</>
