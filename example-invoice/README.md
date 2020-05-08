# Example: Invoice

This is the simple Invoice application that I used for my second example.

### Install Dependencies

```
npm install
```

### Build and serve application
```
npm start
```
Then visit `http://localhost:1234`

### Run test watch task
```
npm test
```

## Additional Exercise

I pulled the logic for extracting the line item data into its own function, which you can find in `./ui.js`, and its test in `./ui.spec.js`. It uses the [JSDom](https://github.com/jsdom/jsdom) package to create a DOM object in the testing environment.

If you're feeling up to a challenge, look at how I implemented and tested `extractLineItemData`, and see if you can write the tests and implement the function for `writeTotalsToInvoiceEl`, which is found in the same file.
