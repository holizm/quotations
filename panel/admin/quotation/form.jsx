import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='customer'
        property='customer'
        required
    />
    <Text
        placeholder='salesPerson'
        property='salesPerson'
    />
    <DateTime
        placeholder='quotationDate'
        property='quotationDate'
        required
    />
    <DateTime
        placeholder='validUntilDate'
        property='validUntilDate'
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <Numeric
        placeholder='subtotal'
        property='subtotal'
        required
    />
    <Numeric
        placeholder='discount'
        property='discount'
    />
    <Numeric
        placeholder='tax'
        property='tax'
    />
    <Numeric
        placeholder='total'
        property='total'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
