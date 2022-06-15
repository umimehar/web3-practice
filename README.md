This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run local
# or
yarn local
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/claim.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Guidelines

#### 1. using forms and loading state

1. use react-hook-form internal state management. it is setup inside the `<SubmitButtonField />` component, if you are using `<Form />` and `FormProvider` or;
1. use the react-query properties and pass to the form

### 2. manage side effect or have a declarative code (useEffect, or catch errors)

- handle error without side effect, just catch when passing onSubmit: https://www.youtube.com/watch?v=KzcPKB9SOEk

### 3. wrapping the request into react-query for post , put, delete or just call the api directly

- every api call should be wrapped into react-query - ok\

### 4. pages folder

1. don't use or avoid at all the claim.tsx, name the component directly.

- one possible drawback is if we need to use the `middleware` feature from NextJS.

### 5.testing

- there will be no unit testing for component;
- there will be only integration test for Cypress. the test will run in a different server, with an interval we will set. The testing layer is called Business Testing.

### 6. styling: default container, use in another auth screens

- use chakra-ui system whenever possible. if needed to use a style, create a new component with the props
- use `sx`, which will create a local scope for the styling
- use `_css` for global styling

### 7. components and screens folder

1. don't use or avoid at all the claim.tsx, name the component directly.
1. index.ts|tsx will be used only to export other components

## File structure

- `/screens`: every screen under this folder needs to be named with the suffix `Screen`. Example: `AddPaymentMethodScreen.tsx`
