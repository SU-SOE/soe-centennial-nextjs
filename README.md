SOE Centennial Next.js Project
==============================

This is the Next.js project for the Stanford School of Engineering Centennial. It delivers an interactive and engaging timeline experience, along with dynamic story pages and other features to showcase the school's history.

🚀 Getting Started
------------------

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)

-   [Yarn](https://yarnpkg.com/) (used for package management)

### Installation

1.  Clone the repository:

    ```
    git clone https://github.com/SU-SOE/soe-centennial-nextjs.git
    cd soe-centennial-nextjs
    ```

2.  Install dependencies using Yarn:

    ```
    yarn install
    ```

3.  Start the development server:

    ```
    yarn dev
    ```

    The site will be available at http://localhost:3000.

📂 Project Structure
--------------------

```
/app                  # Application pages
  ├── (stories)       # Dynamic story pages
  ├── (timeline)      # Timeline data and components
/components           # Shared UI components
/data                 # Finalized timeline data
/tailwind             # Centennial specific tailwind configurations 
/utilities            # Helper functions
/scripts              # Scripts for data conversion and other utilities
  ├── README.md       # Documentation for timeline data scripts
/public               # Static assets
```

🛠️ Features
------------

-   📅 **Interactive Timeline**: Timeline data is converted from a **Google Spreadsheet XLSX to JSON** using scripts. More details can be found in `./scripts/README.md`.

-   🖼️ **Cloudinary Image Hosting**: Images are stored on Cloudinary and served via Vercel's built-in image optimization and caching for improved performance.


🏗️ Development Notes
---------------------

-   Uses **Next.js** with **TypeScript** for maintainability.

-   Follows the **Decanter design system** and the **SOE Centennial design**.

-   Timeline data is managed via a **Google Spreadsheet** and converted to JSON using scripts.

-   Images are hosted on **Cloudinary**, with **Vercel handling optimization and caching**.

🤝 Contributing
---------------

### Development Workflows

All general development work should be based off of the `dev` branch. To maintain organization and consistency, we suggest the follow this naming convention for branches:

```markdown

{branch-type}/JIRA-###--optional-description-of-task

```

- **branch-type**: Use `feature/`, `task/`, or `bug/` to describe the branch purpose.

- **JIRA-###**: Corresponds to the Jira ticket number.

- **optional-description-of-task**: A brief description of the task or feature being implemented.

This structure ensures proper labeling and integration with Jira.

#### Steps:

1\. **Create a Branch**

   - Start your branch from `dev`.

   - Feel free to follow the suggested naming conventions outlined above.

2\. **Complete Work**

   - Implement the required changes or features in your branch.

3\. **Create a Pull Request**

   - Open a pull request (PR) from your branch into the `dev` branch.

   - This action will trigger a Vercel preview deployment for your branch.

4\. **PR Approval and Merge**

   - Once the PR is approved, squash merge your branch into `dev`.

   - Use this commit message format: `JIRA-### | Brief description of work completed.`

#### PR Requirements:

Pull requests into `dev` must pass the following checks:

- **Linting**

- **Tests**

- **Branch up-to-date with `dev`**

- **Successful Vercel build and preview deployment**

When a PR is merged into `dev`, a Vercel branch deploy will be triggered for `dev`.

---

### Release Workflow

To release code to production, create a release branch from `dev` and make a pull request to `main`.

#### Steps:

1\. **Create a Release Branch**

   - Start from `dev` (or a specific commit ref from `dev`).

   - We suggest naming your branch with the `release/` prefix, optionally followed by a semver tag (e.g., `release/refactor-everything[major]`). Note: Commit messages are more important than branch names.

2\. **Create a Pull Request**

   - Open a PR from your `release/` branch into `main`.

3\. **PR Approval and Merge**

   - On approval, perform a standard merge commit into `main`.

---

### Hotfix Workflow

Use the hotfix workflow for urgent production bug fixes when there are pending changes in `dev` that are not ready for deployment.

#### Steps:

1\. **Create a Hotfix Branch**

   - Start your branch from `main`.

2\. **Complete the Fix**

   - Implement the required changes in your hotfix branch.

3\. **Create a Pull Request**

   - Open a PR from your `hotfix/` branch into `main`.

4\. **PR Approval and Merge**

   - Once the PR is approved, squash merge your branch into `main`.

   - Use this commit message format: `JIRA-### | Brief description of hotfix.`

#### Post-Merge Considerations:

- Depending on the state of `dev`, you may need to manually merge `main` back into `dev` to resolve conflicts and sync changes.
