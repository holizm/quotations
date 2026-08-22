export default ({ quotation }) => <article class='quotationSummary'>
    <h2 class='title'>{quotation.title}</h2>
    <span class='number'>{quotation.number}</span>
    <time class='validUntilDate'>{quotation.validUntilDate}</time>
    <span class='total'>{quotation.total}</span>
    <span class='currency'>{quotation.currency?.title}</span>
</article>
