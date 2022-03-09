let beforeEachDecorator = function () {}
let afterEachDecorator = function () {}

export const describe = function (
  description: string,
  describeBlock: () => void
) {
  console.log('*****' + description + '******')
  describeBlock()
}

export const it = function (description: string, itBlock: () => void) {
  console.log('>>>>' + description + '<<<<<')
  beforeEachDecorator()
  itBlock()
  afterEachDecorator()
}

export const expect = function (statusCheck: boolean) {
  if (statusCheck) {
    console.log('Passed')
  } else {
    console.log('Failed')
  }
}

export const beforeEach = function (beforeEach: () => void) {
  beforeEachDecorator = beforeEach
}

export const afterEach = function (afterEach: () => void) {
  afterEachDecorator = afterEach
}
