/**
 * Groups an array of items into a Map based on a key extraction function.
 * 
 * This utility function takes an array and organizes its elements into groups,
 * where each group is identified by a key derived from the elements themselves.
 * 
 * @template K - The type of the grouping key (e.g., string, number, or any comparable type)
 * @template V - The type of the array elements
 * 
 * @param list - The array of items to be grouped
 * @param property - The property name to use for grouping
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
 */
export function groupBy<K extends PropertyKey, V extends Record<string, any>>(
    list: Array<V>,
    property: keyof V
  ): Map<K, Array<V>> {
    const map = new Map<K, Array<V>>();
    list.forEach((item) => {
      const key = item[property] as K;
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
}  