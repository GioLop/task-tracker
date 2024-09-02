# task-tracker

This is a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on.

## Project URL

rodamap(https://roadmap.sh/projects/task-tracker)

## Prerequisites

- [NodeJS ^18.x](https://nodejs.org/en)
- [Node Package Manager (npm)](https://www.npmjs.com/)

## Installation

1. Clone this repository.

```shell
git clone https://github.com/GioLop/task-tracker.git
```

2. Enter to folder.

```shell
cd task-tracker
```

3. Install it globally.

```shell
npm install -g .
```

Now you can use it

## How to run it and options

```shell
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: bzHSVtF9rEtJpc4msLjWc)

# Updating and deleting tasks
task-cli update bzHSVtF9rEtJpc4msLjWc "Buy groceries and cook dinner"
task-cli delete bzHSVtF9rEtJpc4msLjWc

# Marking a task as in progress or done
task-cli mark-in-progress bzHSVtF9rEtJpc4msLjWc
task-cli mark-done bzHSVtF9rEtJpc4msLjWc

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Task Properties

Each task have the following properties:

- id: A unique identifier for the task
- description: A short description of the task
- status: The status of the task (todo, in-progress, done)
- createdAt: The date and time when the task was created
- updatedAt: The date and time when the task was last updated
