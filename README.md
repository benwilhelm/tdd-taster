# TDD Taster  

Thanks for checking out my webinar on Test-Driven Development! This repo contains the code from the examples that I showed, plus some additional resources for studying TDD on your own.

## Webinar Video

The video from the webinar can be found [here](https://drive.google.com/file/d/1ojcvrnC8lsDnG_DUtAu0UB8-GuhtnKbn/view?usp=sharing)

## Example code

Code for the examples can be found in the `example-fizzbuzz/` and `example-invoice/` directories. Each directory contains its own README with instructions for installing dependencies and running the code.

## Further resources

I was barely able to scratch the surface of this subject in the hour that I had to present, so here are some articles that I think would be worth your time to read as you continue to study on your own.

### Overview of TDD as a methodology

[Test-Driven Development - What is it and how do you use it?](https://airbrake.io/blog/sdlc/test-driven-development) - This is a good overview of how to use a TDD workflow, agnostic of any language or tooling.

[Test-Driven Development is Not About Bugs](http://thecuttingledge.com/?p=144#.XrR9MBNKjOQ) - A good explanation that TDD is not about finding bugs in your code, it's about accurately defining the behavior of your code. Bugs are by definition unforeseen, and therefore it's impossible to write tests for every possible bug that could occur. But, well-tested code is usually much easier to debug because you have an unambiguous description of what the code _should_ be doing.


### Kinds of tests: Unit, Integration, Functional, E2E, etc

There is no clear definition of any of these terms. Anyone who claims to be able to define them unabiguously is lying to you. That said, here are some good sources to understanding how the terms are commonly used, and what their roles are.

[What is an integration test exactly?](https://softwareengineering.stackexchange.com/questions/48237/what-is-an-integration-test-exactly)

[The testing pyramid](https://martinfowler.com/bliki/TestPyramid.html), and for a counter-argument [Write Tests. Not too many. Mostly Integration](https://kentcdodds.com/blog/write-tests), and for a counter-counter-argument [Integration Tests are a Scam](https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam)


### Types of \*DD

If you're interested, [here's a good breakdown](https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd) of Test-Driven Development vs Behavior-Driven Development vs Acceptance-Test Driven Development. Short answer is that the test-first mentality is consistent through all of them, but what differs is the format and point of view of the tests.


### JavaScript testing frameworks and assertion libraries

I used [Mocha][mocha] and [Chai](https://www.chaijs.com/) in my examples, but there are several others available.

[Jest][jest] and [Jasmine][jasmine] both ship with assertion libraries built in.

Node.js has a built-in [`assert` module][assert] that is very capable as well.

[Here's a decent comparison][framework-comparison] of some popular testing frameworks.

[mocha]: https://mochajs.org
[jest]: https://jestjs.io
[jasmine]: https://jasmine.github.io/
[karma]:https://karma-runner.github.io/latest/index.html
[assert]: https://nodejs.org/api/assert.html
[framework-comparison]: https://www.browserstack.com/guide/top-javascript-testing-frameworks
