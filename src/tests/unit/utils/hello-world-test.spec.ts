import { hello } from '../../../utils/hello'
import { expect } from 'chai'
import 'mocha'

describe('Hello function', () => {
    it('should return hello world', () => {
        const expected = 'hello world'
        const result = hello()
        expect(result).to.equal(expected)
    })
})
