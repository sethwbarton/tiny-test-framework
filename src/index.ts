let beforeEachDecorator = function () {}
let afterEachDecorator = function () {}

export const describe = function (
  description: string,
  describeBlock: () => void
) {
  console.log('\x1b[7m================================ ' + description + ' ================================\x1b[0m')
  describeBlock()
}

export const it = function (description: string, itBlock: () => void) {
  console.log('\x1b[1m> ' + description + ' <\x1b[0m')
  beforeEachDecorator()
  itBlock()
  afterEachDecorator()
}

export const expect = function (statusCheck: boolean) {
  if (statusCheck) {
    console.log('\x1b[32m Passed \x1b[0m')
  } else {
    console.log('\x1b[31m Failed \x1b[0m')
  }
}

export const beforeEach = function (beforeEach: () => void) {
  beforeEachDecorator = beforeEach
}

export const afterEach = function (afterEach: () => void) {
  afterEachDecorator = afterEach
}
