export default function ClientDetails({ clientName, cashierName }) {
  return (
    <>
      <section>
      <p class="text-end">ClientName:{clientName}</p>
      <p class="text-end">CashierName:{cashierName}</p>
      </section>
    </>
  )
}
