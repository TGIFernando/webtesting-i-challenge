const enhancer = require('./enhancer.js');
// test away!

let kitana
beforeEach(() => {
    kitana = {
        name: 'kitana',
        durability: 5,
        enchancement: 0
    }
})

describe('Tests enchancer methods', () => {
    it("checks to see if the repair method is there", () => {
        expect(enhancer.repair).toBeDefined()
    })
    it("checks if item gets restored to full health", () => {
        expect(enhancer.repair(kitana)).toHaveProperty("durability", 100)
    })
})

describe('tests success method', () => {
    it('checks if success method is there', () => {
        expect(enhancer.success).toBeDefined()
    })
    it("Checks if the success method works with level at 20", () => {
        kitana = {...kitana, enchancement: 20}
        expect(enhancer.success(kitana)).toHaveProperty("enchancement", 20)
    })
    it("checks if the success method works with lower levels", () => {
        expect(enhancer.success(kitana)).toHaveProperty("enchancement", 1)
        kitana = enhancer.success(kitana)
        expect(kitana).toHaveProperty("enchancement", 1)
        kitana = enhancer.success(kitana)
        expect(kitana).toHaveProperty("enchancement", 2)
        kitana = enhancer.success(kitana)
        expect(kitana).toHaveProperty("enchancement", 3)
    })
})