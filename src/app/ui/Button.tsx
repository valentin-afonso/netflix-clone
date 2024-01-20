export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-8 py-1 bg-btn-secondary rounded-s hover:bg-btn-secondary-hover">{children}</button>
  )
}
