import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='quotationsQuotation'
        property='quotation'
        required
    />
    <Numeric
        placeholder='quotationsRevisionNumber'
        property='revisionNumber'
        required
    />
    <DateTime
        placeholder='quotationsRevisionDate'
        property='revisionDate'
        required
    />
    <Numeric
        placeholder='quotationsTotal'
        property='total'
        required
    />
    <LongText
        placeholder='quotationsReason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
