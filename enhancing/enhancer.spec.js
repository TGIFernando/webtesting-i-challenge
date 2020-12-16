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

describe("it tests the fail method", () => {
    it("checks if method is there", () => {
        expect(enhancer.fail).toBeDefined()
    })
    it("checks if fail works with enchancement level 20", () => {
        kitana = {...kitana, enchancement: 20}
        expect(enhancer.fail(kitana)).toHaveProperty("enchancement", 15)
    })
    it("chaecks if fail works between levels 11 and 19", () => {
        kitana = {...kitana, enchancement: 19}
        expect(enhancer.fail(kitana)).toHaveProperty("enchancement", 16)
        kitana = {...kitana, enchancement: 11}
        expect(enhancer.fail(kitana)).toHaveProperty("enchancement", 8)
    })
    it("checks if fail works with enchancement level 10 or under", () => {
        kitana = {...kitana, enchancement: 10}
        expect(enhancer.fail(kitana)).toHaveProperty("enchancement", 9)
        kitana = enhancer.fail(kitana)
        expect(kitana).toHaveProperty("enchancement", 9)
        kitana = enhancer.fail(kitana)
        expect(kitana).toHaveProperty("enchancement", 8)
        kitana = enhancer.fail(kitana)
        expect(kitana).toHaveProperty("enchancement", 7)
    })
})