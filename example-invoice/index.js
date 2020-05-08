import { LineItem, Invoice } from './models'
import { extractLineItemData } from './ui'
const invoiceEl = document.querySelector('.invoice')
const lineItemEls = [...invoiceEl.querySelectorAll('.line-item')]


invoiceEl.addEventListener('keyup', (evt) => {

  // extract data from UI
  // There wasn't time to go into this in the video, but I've extracted
  // this block into a testable function in the ui module. The test
  // for that function requires the use of the jsdom module to emulate
  // a browser environment
  const lineItemObjs = extractLineItemData(lineItemEls)

  // perform business logic
  const lineItems = lineItemObjs.map(obj => new LineItem(obj))
  const invoice = new Invoice({ lineItems })

  // write our data back to UI
  // Challenge: Can you turn this into a testable function like extractLineItemData?
  lineItemEls.forEach((el, idx) => {
    el.querySelector('.item-extended').innerHTML = lineItems[idx].extended()
  })
  invoiceEl.querySelector('.total-price').innerHTML = invoice.total()

})
