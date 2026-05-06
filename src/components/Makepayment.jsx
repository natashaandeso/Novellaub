import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import Footer from './Footer'

const Makepayment = () => {

  const { product } = useLocation().state || {}
  const navigate    = useNavigate()

  const img_url  = "https://tashaandeso.alwaysdata.net/static/images/"
  const file_url = "https://tashaandeso.alwaysdata.net/static/files/" // ✅ base url for PDFs

  const [number, setNumber]   = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError]     = useState("")

  // Guard: if someone lands here without a product, send them back
  if (!product) {
    return (
      <div className="text-white text-center mt-5">
        <p>No product selected.</p>
        <button className="btn btn-outline-light mt-3" onClick={() => navigate("/")}>
          ← Back to Library
        </button>
      </div>
    )
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const formdata = new FormData()
      formdata.append("phone", number)
      formdata.append("amount", product.product_cost)

      const response = await axios.post(
        "https://tashaandeso.alwaysdata.net/api/mpesa_payment",
        formdata
      )

      setLoading(false)
      setSuccess(response.data.message)

      // ✅ After STK push is sent, trigger the PDF download after a short delay
      // The delay gives the user time to read the success message before download starts
      setTimeout(() => {
        if (product.product_file) {
          const link = document.createElement("a")
          link.href = file_url + product.product_file
          link.download = product.product_file
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }, 2500)

    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className='row justify-content-center'>

      <h1 className="text-success">Make Payment - Lipa na M-Pesa</h1>

      <div className="col-md-1">
        <input
          type="button"
          className="btn btn-primary"
          value="<- Back"
          onClick={() => navigate(-1)}  // ✅ goes back to product detail, not always home
        />
      </div>

      <div className="col-md-6 card shadow p-4">
        <img src={img_url + product.product_photo} alt={product.product_name} className='product_img' />

        <div className="card-body">
          <h2 className="text-info">{product.product_name}</h2>
          <p className="rainbow-text">{product.product_description}</p>
          <h3 className="text-warning">KES {product.product_cost}</h3><br />

          <form onSubmit={handlesubmit}>

            {loading && <Loader />}
            <h3 className="text-success">{success}</h3>
            <h4 className="text-danger">{error}</h4>

            {/* ✅ Show download hint after success */}
            {success && (
              <div className="alert alert-info py-2 mt-2">
                📲 Check your phone for the M-Pesa prompt. Your PDF will download automatically once confirmed.
              </div>
            )}

            <input
              type="number"
              className='form-control'
              placeholder='Enter the phone number (254xxxxxxx)'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            /><br />

            <input
              type="submit"
              value="Make Payment & Download PDF 📥"
              className='btn btn-success'
              disabled={loading}  // ✅ prevent double-submit
            />
          </form>
        </div>
      </div>

    </div>
  )
}

export default Makepayment