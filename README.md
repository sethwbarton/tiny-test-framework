# Tiny Test Framework

## Overview

I built this on a plane because I didn't have internet access to download Jest for my regular TDD flow on the project I was creating. 
I was so proud of it, I decided to publish it on npm. Sorry?
If you want to add to this framework, please be my guest. Submit a PR and I'll gladly review it.

## How To Use This Framework

### Installation

Bingo bango bongo - we've seen this one before.
```
npm install tiny-test-framework
```

### Use

Tests in the tiny test framework are pre-disposed to a BDD-like style of unit testing - they look identical to tests you
might find in Jest.

```javascript
const fakeGuiService = {
  calls: {
    promptForPlayerName: 0,
  },
  promptForPlayerName: () => {
    fakeGuiService.calls.promptForPlayerName += 1
    return 'Player 1'
  },
}

describe('Get Player Name', () => {
  it('Returns the players name if it exists', () => {
    const result = getPlayerName({ name: 'Seth' }, fakeGuiService)
    expect(result === 'Seth')
  })

  it('Calls to the Gui If Player Has No Name', () => {
    const result = getPlayerName({}, fakeGuiService)
    expect(fakeGuiService.calls.promptForPlayerName === 1)
  })
})

```
