import test from 'node:test';
import assert from 'node:assert/strict';
import { getExampleDay } from '../source/js/marketing.mjs';

test('Friday preparation matches the order quantities', () => {
    const day = getExampleDay('friday');
    assert.equal(day.orders.length, 2);
    assert.equal(day.preparation, '4 loaves, 12 cookies');
});

test('Saturday combines the complete bake into a readable preparation list', () => {
    const day = getExampleDay('saturday');
    assert.equal(day.orders.length, 3);
    assert.equal(day.preparation, '2 loaves, 12 rolls, 24 cookies');
});

test('An empty pickup day has no orders or invented totals', () => {
    const day = getExampleDay('sunday');
    assert.deepEqual(day.orders, []);
    assert.equal(day.preparation, '');
});

test('Unknown and inherited property names are not example days', () => {
    assert.equal(getExampleDay('monday'), null);
    assert.equal(getExampleDay('__proto__'), null);
});
