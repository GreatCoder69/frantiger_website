import React from "react";
import "./Adsinvoices.css";

const Adsinvoices = () => {
  const invoices = [
    {
      id: 1,
      name: "abc",
      date: "September 11, 2018",
      status: "success",
      amount: "INR-26730.00",
    },
    {
      id: 2,
      name: "xyz",
      date: "September 11, 2018",
      status: "processing..",
      amount: "INR-17820.00",
    },
    {
      id: 3,
      name: "abc",
      date: "September 11, 2018",
      status: "success",
      amount: "INR-5297.00",
    },
  ];

  const [selectedInvoice, setSelectedInvoice] = React.useState(null);

  const handleViewClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <div className="ads-invoices-container">
      <div className="invoices-list">
        <h2>All Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>RECEIPT / INVOICE</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>AMOUNT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>
                  <input
                    type="radio"
                    name="selectedInvoice"
                    onChange={() => handleViewClick(invoice)}
                  />
                </td>
                {/* <td>{invoice.name}</td> */}
                <td>{invoice.date}</td>
                <td>{invoice.status}</td>
                <td>{invoice.amount}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => handleViewClick(invoice)}
                  >
                    <i className="fas fa-eye"></i> VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="invoice-details">
        <h3>Details</h3>
        {selectedInvoice ? (
          <div>
            <p>
              <strong>INVOICE#:</strong> {selectedInvoice.id}
            </p>
            <p>
              <strong>DATE:</strong> {selectedInvoice.date}
            </p>
            <p>
              <strong>STATUS:</strong> {selectedInvoice.status.toUpperCase()}
            </p>
            <p>
              <strong>TOTAL:</strong> {selectedInvoice.amount}
            </p>
            <p>
              <strong>METHOD:</strong> N/A
            </p>
            <p>
              <strong>LISTING:</strong> DASHBOARD
            </p>
            <p>
              <strong>AD TYPE:</strong> BYDURATION
            </p>
          </div>
        ) : (
          <p>Select an invoice to view details</p>
        )}
      </div>
    </div>
  );
};

export default Adsinvoices;
