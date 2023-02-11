105 lines (68 sloc) 4.27 KB

# Contribution Guidelines

When contributing to `oinvogenny`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/shamscorner/oinvogenny/issuess) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In an effort to respect your time, if you wanted to implement a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/shamscorner/oinvogenny/issues/new) describing the problem you would like to solve.

### Setup your environment

Fork the [oinvogenny repository](https://github.com/shamscorner/oinvogenny) to your own GitHub account and then clone it to your local device.

```bash
git clone git@github.com:YOUR_USER_NAME/oinvogenny.git
```

Then, install the project's dependencies:

```bash
npm install
or,
pnpm install --shamefully-hoist
```

### Run the project

To run the project in development mode, run the following command:

```bash
npm run dev
or,
pnpm run dev
```

### Make changes

Before making any changes, make sure you create a new branch:

```bash
git checkout -b your-branch-name
```

When you're done making changes, commit them and push them to your fork:

```bash
git add .
git commit -m "your commit message"
git push
```

Then, [create a pull request](https://github.com/shamscorner/oinvogenny/pulls)
from your fork to the `main` branch of the `oinvogenny` repository.

## Code Style

This project uses [Prettier](https://prettier.io/) to format the code. You can run `npm run format` to format the code before committing.

<!-- TODO: setup eslint -->
<!-- TODO: setup github actions to run linter -->
<!-- TODO: setup pre-commit hooks to run linter -->

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
