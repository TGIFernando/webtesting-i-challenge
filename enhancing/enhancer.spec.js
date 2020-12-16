const enhancer = require('./enhancer.js');
// test away!
describe('Tests enchancer methods', () => {
    it("checks to see if the repair method is there", () => {
        expect(enhancer.repair).toBeDefined()
    })
})