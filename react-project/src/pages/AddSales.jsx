import React from 'react'
import './css/styles.css'
const AddSales = () => {
  return (
    <div className='content-container'>
        <h2 className='
        text-center'>Add Sale Entry</h2>
    <div class="mb-3">
    <label for="product-name" class="form-label">Product</label>
    <input type="text" class="form-control" id="product-name" />
  </div>
  <div class="mb-3">
    <label for="quantity" class="form-label">Quantity</label>
    <input class="form-control" type='number' id="quantity"></input>
  </div>
  <div class="mb-3">
    <label for="amount" class="form-label">Amount</label>
    <input class="form-control" type="number" id="amount"></input>
  </div>
  <div class="mb-3">
    <button type='submit' class="form-control btn btn-primary"  id="submitBtn">Submit</button>
  </div>
    </div>
  )
}

export default AddSales