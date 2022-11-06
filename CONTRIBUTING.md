# Contributing

First, thanks for being willing to contribute!

## Project Setup

1. Fork and clone this repo
1. Run `yarn install` to install all dependencies (_we require yarn instead of any other JS package manager_)
3. Create a branch for your PR with `git checkout -b your-branch-name`

> ℹ️   Credit: From [React Testing Library][react-testing-lib]\
> Tip: Keep your `main` branch pointing at the original repository and make pull
> requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/alexanderkhivrych/use-modal-hook
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream", then
> fetch the git information from that remote and set your local `main` branch
> to use the upstream main branch whenever you run `git pull`. You can now make
> all of your pull request branches based on this `main` branch. Whenever you
> want to update your version of `main`, do a regular `git pull`.

## Standards

- Commit messages follow the [Conventional Commit spec][conventional-commit];
- Code styling is enforced via ESLint and Prettier.

Our CI setup, using Github Actions, will also check these standards before contributions can be merged.

## Help needed

Please checkout the [the open issues][issues].

<!-- markdown-link-check-disable-next-line -->
[issues]: https://github.com/alexanderkhivrych/use-modal-hook/issues
[conventional-commit]: https://www.conventionalcommits.org/en/v1.0.0/
