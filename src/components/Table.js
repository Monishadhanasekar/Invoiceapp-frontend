import React from "react"

export default function Table({ list, total }) {
  return (
    <>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="text-lg-end">
          Total Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
