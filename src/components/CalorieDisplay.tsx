type CalorieDisplayProps = {
  calories: number,
  text: string
}

export default function CalorieDisplay({calories, text}: CalorieDisplayProps) {
  let classAssigned = ""

  switch (text) {
    case "Consumidas":  
      classAssigned = "text-lime-500"
      break
    case "Quemadas": 
      classAssigned = "text-orange-500"
      break
    case "Diferencia": 
      classAssigned = "text-red-500"
      break
  }

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl ${classAssigned}`}>{calories}</span>
      {text}          
    </p>
  )
}
