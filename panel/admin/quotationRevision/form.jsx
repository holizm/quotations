import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='quotation'
        property='quotation'
        required
    />
    <Numeric
        placeholder='revisionNumber'
        property='revisionNumber'
        required
    />
    <DateTime
        placeholder='revisionDate'
        property='revisionDate'
        required
    />
    <Numeric
        placeholder='total'
        property='total'
        required
    />
    <LongText
        placeholder='reason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
