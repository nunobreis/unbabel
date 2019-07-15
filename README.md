# Unbabel frontend challenge - Nuno Reis solution

## 1. Brief Summary
The current project is a proposal for solving the frontend challenge presented by Unbabel. Considering the given problem and purpose of the challenge I decided to follow an Atomic Design Structure (know more about Brad Frost's approach [here](http://atomicdesign.bradfrost.com/)).

Following this approach my comoponets are devided in: atoms, molecules and organisms (from the simplest forms to more complex compositions). Then I use templates to define the layout of a view and finally a page that renders the whole composition.

I have created stories through Storybook that render each component in isolation proving that they can stand by themselves and hence be re-used anywhere.

The components handle everything that is presentational. Following Dan Abramov's approach for component composition (presentation components vs logic components) I created containers that don't care about styles/presentation but know about the Redux Store and thus handle all logic within the app.

## 2. Get the project up and running
To get this project up and running in your machine I will assume you have [NodeJS](https://nodejs.org/en/) installed already.

Just go to the [project repo](https://github.com/nunobreis/unbabel/) and fork the project into your machine.

### Install Dependenies

In the project directory install dependencies by running:

```
npm install
```

### Run Storybook

To run Storybook server just run the script:

```
npm run storybook
```

If you would like to make a Storybook build just run:
```
npm run storybook-build
```

### Run the project
To run a dev server and see the project use the following script:

```
npm run dev-server
```

If you want to build the project just use the script:

```
npm run build
```

## 3. Future considerations

As a retroespective on this development sprint I would like to make some considerations for future contributions to this project.

With a bit more time there are issues that could have been tackled in a different fashion for scalability reasons. For instance:

- To handle asynchronous calls to the mock API I've used Redux Thunk as a middleware. Maybe in the future as the app grows, other more powerful middlewares systems could be considered to handle complex asyncrhonous functionality like authentication. For this reason maybe a future re-factor would be to change Redux Thank to Redux Sagas.
- Another consideration would be to integrate a testing system quite possibly using: Jest and enzyme. As of now Storybook makes a great job in proving that each component renders in isolation. Although the full functionality and logic lack testing to proof that the app works as expected and to capture potential bugs.
