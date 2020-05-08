import { JSDOM } from 'jsdom'
import { readFileSync } from 'fs'
import { expect } from 'chai'
import { extractLineItemData, writeTotalsToInvoiceEl } from './ui'

// setting up virtual browser
const html = readFileSync('./index.html')
const dom = new JSDOM(html)

describe('ui functions', () => {
  describe('extractLineItemData()', () => {
    it('should get objects with name, price, quantity', () => {
      const lineItemEls = [...dom.window.document.querySelectorAll('.line-item')]
      lineItemEls[0].querySelector('.item-qty input').value = 3
      lineItemEls[1].querySelector('.item-qty input').value = 2
      lineItemEls[2].querySelector('.item-qty input').value = 1

      const lineItems = extractLineItemData(lineItemEls)
      expect(lineItems).to.deep.equal([
        { name: "Thing 1", price: 1, quantity: 3},
        { name: "Thing 2", price: 10, quantity: 2},
        { name: "Thing 3", price: 100, quantity: 1},
      ])
    })
  })

  describe('writeTotalsToInvoiceEl', () => {

  })
})
