import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import Header from "./Header"
import MainDetails from "./MainDetails"
import Table from "./Table"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"
import "react-toastify/dist/ReactToastify.css"

function AddInvoice() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [clientName, setClientName] = useState("")
  const [cashierName, setCashierName] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [width] = useState(641)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience")
    }
  }, [width])

  return (
    <div style={{backgroundColor: "lightgray"}}>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Create an invoice</h2>
          {/* <form onSubmit={e => onSubmit(e)}> */}
          <div className="form-group">
            <label htmlFor="name">Enter the shop name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the shop name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="address">Enter the address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="address"
              id="address"
              placeholder="Enter the address"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="clientName">Enter your client's name</label>
            <input
              type="text"
              name="clientName"
              className="form-control form-control-lg"
              id="clientName"
              placeholder="Enter your client's name"
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="cashierName">
              Enter the cashier name
            </label>
            <input
              type="text"
              name="cashierName"
              className="form-control form-control-lg"
              id="cashierName"
              placeholder="Enter the cashier name"
              autoComplete="off"
              value={cashierName}
              onChange={(e) => setCashierName(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <input
              type="text"
              name="invoiceNumber"
              className="form-control form-control-lg"
              id="invoiceNumber"
              placeholder="Invoice Number"
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type="date"
              name="invoiceDate"
              className="form-control form-control-lg"
              id="invoiceDate"
              placeholder="Invoice Date"
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
          <br></br>
          {/* This is our table form */}
          <article>
            <TableForm
              description={description}
              setDescription={setDescription}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
          </article>
        </div>
      </div>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          {/* Invoice Preview */}
          <div className="text-center mb-4">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary btn-block">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />

              <MainDetails name={name} address={address} />

              <ClientDetails
                clientName={clientName}
                cashierName={cashierName}
              />

              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
              />
              <br></br>
              <br></br>
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInvoice
