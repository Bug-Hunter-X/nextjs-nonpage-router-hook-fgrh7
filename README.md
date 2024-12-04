# Next.js useRouter Hook Error in Non-Page Component

This repository demonstrates a common error encountered when using the `useRouter` hook in Next.js outside of a page component.  The `useRouter` hook relies on the routing context provided by the Next.js page component, and if used elsewhere, it might not work as expected.

## Bug Description

The `useRouter` hook is used in a functional component called `MyComponent`, which is not directly rendered by a Next.js page.  This leads to the hook not being able to properly access the router, potentially causing errors or unexpected behavior. 

## Solution

The solution involves restructuring the application to either:

1. Move the `MyComponent` functionality into a Next.js page component.
2. Pass the necessary route information as props to `MyComponent` instead of using `useRouter` directly.