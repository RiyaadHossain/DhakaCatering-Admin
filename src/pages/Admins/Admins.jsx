import React from 'react'
import PageHeader from '../../components/PageHeader'
import TableRow from '../../components/TableRow'

export default function Admins() {
  return (
    <div>
      <PageHeader title="Admins" quantity="4" />
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
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  )
}
