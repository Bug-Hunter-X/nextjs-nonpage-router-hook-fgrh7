```javascript
import Link from 'next/link';

function MyComponent({ route }) {
  return (
    <Link href={route}>
      <a>
        Go to My Route
      </a>
    </Link>
  );
}

export default MyComponent;

// Example Usage in a Next.js Page
function MyPage() {
  return (
    <div>
      <MyComponent route='/my-route' />
    </div>
  );
}
export default MyPage;
```