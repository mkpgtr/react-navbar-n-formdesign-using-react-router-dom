import React from 'react'
import './css/styles.css'
const Top5Sales = () => {
  return (
    <div className='content-container'>
      <h2 className='
      text-center'>Top Five Sales</h2>
    <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Sale Id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>S1212</td>
      <td>2</td>
      <td>90000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>S1423</td>
      <td>3</td>
      <td>85000</td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default Top5Sales