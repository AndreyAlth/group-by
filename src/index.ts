/**
 * Groups an array of items into a Map based on a property path.
 * 
 * This utility function takes an array and organizes its elements into groups,
 * where each group is identified by a key derived from the elements themselves.
 * 
 * @template K - The type of the grouping key (e.g., string, number, or any comparable type)
 * @template V - The type of the array elements
 * 
 * @param list - The array of items to be grouped
 * @param property - The property path to use for grouping (supports dot notation like 'category.type')
 * 
 * @returns A Map where each key maps to an array of items that share that key
 * 
 * @example
 * // Group users by role
 * const users = [
 *   { name: 'Alice', role: 'admin' },
 *   { name: 'Bob', role: 'user' },
 *   { name: 'Charlie', role: 'admin' }
 * ];
 * const grouped = groupBy(users, 'role');
 * // Map { 'admin' => [{name: 'Alice', ...}, {name: 'Charlie', ...}], 'user' => [{name: 'Bob', ...}] }
 * 
 * @example
 * // Group products by nested property
 * const products = [
 *   { name: 'Laptop', category: { type: 'electronics' } },
 *   { name: 'Desk', category: { type: 'furniture' } }
 * ];
 * const grouped = groupBy(products, 'category.type');
 * // Map { 'electronics' => [{name: 'Laptop', ...}], 'furniture' => [{name: 'Desk', ...}] }
 */
export function groupBy<K extends PropertyKey, V>(
    list: Array<V>,
    property: string | ((input: V) => K)
  ): Map<K, Array<V>> {
    const map = new Map<K, Array<V>>();
    
    // Helper function to get nested property value
    const getNestedValue = (obj: any, path: string): any => {
      return path.split('.').reduce((current, prop) => current?.[prop], obj);
    };
    
    list.forEach((item) => {
      let key = null
      if (typeof property === 'string') {
        key = getNestedValue(item, property) as K;
      }
      if (typeof property === 'function') {
        key = property(item);
      }
      if (!key) {
        throw new Error(`${property} is not a property`);
      }
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }