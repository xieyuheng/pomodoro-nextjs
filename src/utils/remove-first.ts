export function removeFirst<A>(array: Array<A>, p: (x: A) => A): Array<A> {
  const index = array.findIndex(p)
  if (index > -1) array.splice(index, 1)
  return array
}
