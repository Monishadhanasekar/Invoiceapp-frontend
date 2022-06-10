export default function MainDetails({ name, address }) {
  return (
    <>
      <section>
        <p class="text-end">{name}</p>
        <p class="text-end">{address}</p>
      </section>
    </>
  )
}
