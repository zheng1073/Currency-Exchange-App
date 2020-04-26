
// CurrencyTable.js
import React from 'react';

const CurrencyTable = (props) => {
  const { rates } = props;
  if (!rates) {
    return null;
  }
  return (
    <table className="table table-sm bg-white mt-4">
      <thead>
        <tr>
          <th scope="col" className="pr-4 py-2">Currency</th>
          <th scope="col" className="text-right pr-4 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(currency =>
          <tr key={currency.acronym}>
            <td className="pl-4 py-2">{currency.name} <small>({currency.acronym})</small></td>
            <td className="text-right pr-4 py-2">{currency.rate.toFixed(6)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default CurrencyTable
