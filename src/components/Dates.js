export default function Dates({ invoiceNumber, invoiceDate }) {
  return (
    <>
      <section>
        <p class="text-start">InvoiceNumber: {invoiceNumber}</p>
        <p class="text-start">InvoiceDate: {invoiceDate}</p>
      </section>
    </>
  )
}
