import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false)

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !quantity || !price) {
      toast.error("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }
    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            className="form-control form-control-lg"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            className="form-control form-control-lg"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            className="form-control form-control-lg"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <p>{amount}</p>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>
      <br></br>

      {/* Table items */}

      <table className="table border shadow">
        <thead className="thead-dark">
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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 class="text-lg-end">
          Total Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
