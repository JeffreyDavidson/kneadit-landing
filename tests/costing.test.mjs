import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBatch } from '../source/js/marketing.mjs';

const example = { ingredients: 12.4, labor: 18, packaging: 3.6, quantity: 24, price: 2.5 };

test('calculates the displayed sample batch', () => {
    const result = calculateBatch(example);
    assert.equal(result.totalCost, 34);
    assert.equal(result.revenue, 60);
    assert.equal(result.profit, 26);
    assert.equal(result.unitCost.toFixed(2), '1.42');
});

test('keeps a loss visible rather than clamping it to zero', () => {
    assert.equal(calculateBatch({ ...example, price: 1 }).profit, -10);
});

test('accepts zero costs and zero prices', () => {
    assert.deepEqual(calculateBatch({ ingredients: 0, labor: 0, packaging: 0, quantity: 1, price: 0 }), {
        unitCost: 0, totalCost: 0, revenue: 0, profit: 0,
    });
});

test('sums dollar inputs in integer cents', () => {
    const result = calculateBatch({ ingredients: .1, labor: .2, packaging: .3, quantity: 3, price: .5 });
    assert.equal(result.totalCost, .6);
    assert.equal(result.profit, .9);
});

for (const [field, value] of [['quantity', 0], ['quantity', 1.5], ['quantity', 10001], ['price', -1], ['labor', NaN], ['ingredients', Infinity], ['packaging', 100001]]) {
    test(`rejects invalid ${field}: ${value}`, () => {
        assert.equal(calculateBatch({ ...example, [field]: value }), null);
    });
}
