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
        number
        required
    />
    <Text
        customer
        required
    />
    <Text salesPerson />
    <DateTime
        quotationDate
        required
    />
    <DateTime validUntilDate />
    <Text
        currency
        required
    />
    <Numeric
        required
        subtotal
    />
    <Numeric discount />
    <Numeric tax />
    <Numeric
        required
        total
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
