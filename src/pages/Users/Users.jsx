import React from 'react'
import PageHeader from '../../components/PageHeader'
import TableRow from '../../components/TableRow'

export default function Users() {
  return (
    <div>
      <PageHeader title="Users" quantity="3" />
      <div className="overflow-x-auto w-full rounded-t-xl ">
        <table className="table w-full border">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Items</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <TableRow page='user'/>
            <TableRow page='user'/>
            <TableRow page='user'/>
            <TableRow page='user'/>
          </tbody>
        </table>
      </div>
    </div>
  )
}
