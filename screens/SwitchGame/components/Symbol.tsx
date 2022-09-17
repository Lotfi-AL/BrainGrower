import { Feather } from "@expo/vector-icons"

enum SwitchGameSymbol {
  square,
  triangle,
  circle,
  plus,
}

interface SwitchGameSymbolSpec {
  name: "square" | "circle" | "plus" | "triangle"
  color: string
  backgroundColor: string
}

function getSwitchGameSymbolSpec(
  switchGameSymbol: SwitchGameSymbol,
): SwitchGameSymbolSpec {
  switch (switchGameSymbol) {
    case SwitchGameSymbol.square:
      return { name: "square", color: "black", backgroundColor: "red" }
  }
  return { name: "square", color: "black", backgroundColor: "red" }
}

const Symbol = (props: SwitchGameSymbolSpec) => {
  const { name, color, backgroundColor } = props
  return (
    <Feather
      name={name}
      color={color}
      style={{ backgroundColor: backgroundColor }}
    />
  )
}

export default Symbol
