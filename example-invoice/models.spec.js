import { expect } from 'chai'
import { Invoice, LineItem } from './models'

describe("LineItem", () => {
  describe("constructor", () => {
    it('accepts name, price, quantity', () => {
      const lineItem = new LineItem({
        name: "thing 1",
        price: 15,
        quantity: 4
      })
      expect(lineItem.name).equal("thing 1")
      expect(lineItem.price).equal(15)
      expect(lineItem.quantity).equal(4)
    })
  })

  describe('.extended()', () => {
    it('returns price * quantity', () => {
      const lineItem = new LineItem({
        name: "thing 1",
        price: 15,
        quantity: 4
      })
      expect(lineItem.extended()).equal(60)
    })
  })
})

describe("Invoice", () => {
  describe('constructor', () => {
    it('accepts lineItems option and assigns to lineItems property', () => {
      const lineItems = [
        { name: "Thing 1", price: 1, quantity: 3 },
        { name: "Thing 2", price: 10, quantity: 2 },
      ]
      const invoice = new Invoice({ lineItems })
      expect(invoice.lineItems.length).equal(2)
      expect(invoice.lineItems[0].name).equal("Thing 1")
      expect(invoice.lineItems[1].name).equal("Thing 2")
    })
  })

  describe('.total()', () => {
    it('returns sum of lineItems extended()', () => {
      const lineItems = [
        new LineItem({ name: "Thing 1", price: 1, quantity: 3 }),
        new LineItem({ name: "Thing 2", price: 10, quantity: 2 }),
      ]
      const invoice = new Invoice({ lineItems })
      expect(invoice.total()).equal(23)
    })
  })
})
