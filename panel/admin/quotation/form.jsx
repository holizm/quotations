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
        placeholder='quotationsNumber'
        property='number'
        required
    />
    <Text
        placeholder='coreCustomer'
        property='customer'
        required
    />
    <Text
        placeholder='quotationsSalesPerson'
        property='salesPerson'
    />
    <DateTime
        placeholder='quotationsQuotationDate'
        property='quotationDate'
        required
    />
    <DateTime
        placeholder='quotationsValidUntilDate'
        property='validUntilDate'
    />
    <Text
        placeholder='quotationsCurrency'
        property='currency'
        required
    />
    <Numeric
        placeholder='quotationsSubtotal'
        property='subtotal'
        required
    />
    <Numeric
        placeholder='coreDiscount'
        property='discount'
    />
    <Numeric
        placeholder='quotationsTax'
        property='tax'
    />
    <Numeric
        placeholder='coreTotal'
        property='total'
        required
    />
    <LongText
        placeholder='quotationsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
