# groupBy

A better function to group arrays of objects by a key. Simple, type-safe, and zero dependencies.

## 🚀 Features

- ✨ **Type-safe** - Full TypeScript support with generics
- 🪶 **Lightweight** - Zero dependencies
- 🎯 **Simple API** - Easy to use, intuitive interface
- 🔧 **Flexible** - Support for nested keys and custom key functions
- 📦 **Tree-shakeable** - ESM support for optimal bundle size

## 📦 Installation

```bash
npm install group-by
```

or

```bash
yarn add group-by
```

## 🔨 Usage

### Basic Usage

```typescript
import { groupBy } from 'group-by';

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const grouped = groupBy(users, 'role');
// Result:
// Map {
//   admin => [
//     { name: 'Alice', role: 'admin' },
//     { name: 'Charlie', role: 'admin' }
//   ],
//   user => [
//     { name: 'Bob', role: 'user' }
//   ]
// }
```

### With Nested Keys

```typescript
const products = [
  { name: 'Laptop', category: { type: 'electronics' } },
  { name: 'Phone', category: { type: 'electronics' } },
  { name: 'Desk', category: { type: 'furniture' } }
];

const grouped = groupBy(products, 'category.type');
// Result:
// Map {
//   electronics => [
//     { name: 'Laptop', category: { type: 'electronics' } },
//     { name: 'Phone', category: { type: 'electronics' } }
//   ],
//   furniture => [
//     { name: 'Desk', category: { type: 'furniture' } }
//   ]
// }
```

### With Custom Key Function

```typescript
const numbers = [1, 2, 3, 4, 5, 6];

const grouped = groupBy(numbers, (n) => n % 2 === 0 ? 'even' : 'odd');
// Result:
// {
//   odd: [1, 3, 5],
//   even: [2, 4, 6]
// }
```

## 🏗️ Development

```bash
# Install dependencies
yarn install

# Run in development mode
yarn dev

# Build the package
yarn build

# Run tests
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**andreyalth**

---

Made with ❤️ using TypeScript