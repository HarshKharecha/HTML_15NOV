import React from 'react'

function CRMCustomerList() {
    const customers = [
        { id: 'cust_01', name: 'Tony Stark', company: 'Stark Industries', phone: '+1-555-0199' },
        { id: 'cust_02', name: 'Pepper Potts', company: 'Stark Industries', phone: '+1-555-0188' },
        { id: 'cust_03', name: 'Wayne Enterprises', company: 'Bruce Wayne', phone: '+1-555-0122' }
    ];

    return (
        <div>
            <h2>CRM Dashboard - Contact List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id} style={{ margin: '8px 0' }}>
                        <strong>{customer.name}</strong> ({customer.company}) — Phone: {customer.phone}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CRMCustomerList