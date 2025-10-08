import { groupBy } from "../index";

describe('groupBy function', () => {
    const users = [
        { name: 'Alice', role: 'admin' },
        { name: 'Bob', role: 'user' },
        { name: 'Charlie', role: 'admin' }
    ];
    const usersRoleMap = new Map([
        ["admin", [
            { name: 'Alice', role: 'admin' },
            { name: 'Charlie', role: 'admin' }
        ]],
        ["user", [
            { name: 'Bob', role: 'user' }
        ]]
    ]);
    const usersNameMap = new Map([
        ["Alice", [
            { name: 'Alice', role: 'admin' }
        ]],
        ["Bob", [
            { name: 'Bob', role: 'user' }
        ]],
        ["Charlie", [
            { name: 'Charlie', role: 'admin' }
        ]]
    ]);
    it('should group an array of objects by a specified key "role"', () => {
        const grouped = groupBy(users, 'role');
        expect(grouped).toEqual(usersRoleMap);
    });

    it('should group an array of objects by a specified key "name"', () => {
        const grouped = groupBy(users, 'name');
        expect(grouped).toEqual(usersNameMap);
    });

    const products = [
        { name: 'Laptop', category: { type: 'electronics' } },
        { name: 'Phone', category: { type: 'electronics' } },
        { name: 'Desk', category: { type: 'furniture' } }
    ];
    const productsMap = new Map([
        ["electronics", [
            { name: 'Laptop', category: { type: 'electronics' } },
            { name: 'Phone', category: { type: 'electronics' } }
        ]],
        ["furniture", [
            { name: 'Desk', category: { type: 'furniture' } }
        ]]
    ]);
    it('should group an array of objects by a specified key "category.type"', () => {
        const grouped = groupBy(products, 'category.type');
        expect(grouped).toEqual(productsMap);
    });

    it('should throw an error if the key is not a string or a function', () => {
        expect(() => groupBy(users, '1522')).toThrow();
    });

    const products2 = [
        { name: 'Laptop', category: { type: { name: 'electronics' } } },
        { name: 'Phone', category: { type: { name: 'electronics' } } },
        { name: 'Desk', category: { type: { name: 'furniture' } } }
    ];
    const productsMap2 = new Map([
        ["electronics", [
            { name: 'Laptop', category: { type: { name: 'electronics' } } },
            { name: 'Phone', category: { type: { name: 'electronics' } } }
        ]],
        ["furniture", [
            { name: 'Desk', category: { type: { name: 'furniture' } } }
        ]]
    ]);

    it('should group an array of objects by a specified key "category.type.name"', () => {
        const grouped = groupBy(products2, 'category.type.name');
        expect(grouped).toEqual(productsMap2);
    });

    const numbers = [1, 2, 3, 4, 5, 6];
    const numbersMap = new Map([
        ["even", [2, 4, 6]],
        ["odd", [1, 3, 5]]
    ]);
    it('should group an array of numbers by condition"', () => {
        const grouped = groupBy(numbers, (n) => n % 2 === 0 ? 'even' : 'odd');
        expect(grouped).toEqual(numbersMap);
    });
});