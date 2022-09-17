import { Text, View } from "../components/Themed"

function generateNumberbox(): number[] {
  let array = [1, 2, 3, 4]
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function generateMatrix(rows: boolean[]): number[][][] {
  return rows.map(r =>
    r
      ? [generateNumberbox(), generateNumberbox(), generateNumberbox()]
      : [generateNumberbox()],
  )
}

function symbolOrders(
  gameMatrix: number[][][],
  correctPath: number[],
): [number[], number[]] {
  let endOrder = generateNumberbox().map(e => e)
  let startOrder: number[] = [0, 0, 0, 0]
  endOrder.forEach((symbol, symIndex) => {
    let endIndex = symIndex
    gameMatrix.forEach((row, rowNum) => {
      endIndex = row[correctPath[rowNum]][endIndex] - 1
    })
    startOrder[endIndex] = symbol
  })
  return [startOrder, endOrder]
}

function createGame(
  rows: boolean[],
): [number[][][], number[], number[], number[]] {
  const gameMatrix = generateMatrix(rows)
  const correctPath = rows.map(choice =>
    choice ? Math.floor(Math.random() * 3) : 0,
  )
  const [startSymbols, endSymbols] = symbolOrders(gameMatrix, correctPath)
  return [gameMatrix, startSymbols, endSymbols, correctPath]
}

export default function SwitchGameScreen() {
  const [gameMatrix, startSymbols, endSymbols, correctPath] = createGame([
    false,
    false,
    true,
  ])

  console.log(startSymbols)
  gameMatrix.forEach(e => console.log(e))
  console.log(endSymbols)
  console.log(correctPath)

  return (
    <View>
      <Text>PLACEHOLDER</Text>
    </View>
  )
}
