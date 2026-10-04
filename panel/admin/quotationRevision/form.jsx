import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        quotation
        required
    />
    <Numeric
        required
        revisionNumber
    />
    <DateTime
        required
        revisionDate
    />
    <Numeric
        required
        total
    />
    <LongText reason />
</>

export default <DialogForm inputs={inputs} />
