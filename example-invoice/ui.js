
export function extractLineItemData(lineItemEls) {
  return lineItemEls.map(lineItem => ({
    name: lineItem.querySelector('.item-name').innerHTML,
    price: +lineItem.querySelector('.item-price').innerHTML,
    quantity: +lineItem.querySelector('.item-qty input').value
  }))
}

export function writeTotalsToInvoiceEl(invoiceEl) {
  // feeling up to a challenge?
}
