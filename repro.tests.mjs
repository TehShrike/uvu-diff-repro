import { test } from 'uvu'
import * as assert from 'uvu/assert'


test(`reproduction of diffLine error`, () => {
	assert.equal({ same: `yes` }, { same: `no` })
})

test.run()
