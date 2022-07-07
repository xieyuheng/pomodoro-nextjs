export interface Task {
  id: number
  count: number
  title: string
}

export const testingTasks = [
  { id: 1, count: 0, title: "Lorem ipsum dolor sit amet" },
  { id: 2, count: 0, title: "consectetur adipiscing elit" },
  { id: 3, count: 0, title: "Ut enim ad minim veniam" },
  {
    id: 4,
    count: 0,
    title:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 5,
    count: 0,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
]

export const testingCurrentTask = {
  id: 6,
  count: 0,
  title: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
}
