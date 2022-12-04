import { readInput } from '../input'

export function d1p2(): number {
  const input = readInput(1)
  
  const elfs = input.split('\n\n')

  const maxs = []
  for (const elf of elfs) {
    const items = elf.split('\n')
    let elfTotal = 0
    for (const item of items) {
      elfTotal += Number(item)
    }
    maxs.push(elfTotal)
  }
  
  maxs.sort((a, b) => b - a)
  
  return maxs[0] + maxs[1] + maxs[2]
}