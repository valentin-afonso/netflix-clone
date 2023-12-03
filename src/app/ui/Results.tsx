import Card from "./Card"

export default function Results({results}: any) {
  return (
    <div className="flex flex-wrap gap-4">
        {
            results.map((result: any) => {
                return(<Card key={result.id} result={result} />)
            })
        }
    </div>
  )
}
