export function LineItem({ name, price, quantity }) {
  this.name = name
  this.price = price
  this.quantity = quantity
}

LineItem.prototype.extended = function() {
  return this.price * this.quantity
}


export function Invoice({ lineItems }) {
  this.lineItems = lineItems
}

Invoice.prototype.total = function() {
  return this.lineItems.reduce((total, lineItem) => {
    return total + lineItem.extended()
  }, 0)
}
