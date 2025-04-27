const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="w-full bg-black-200 mt-auto">
      <div className="max-w-7xl w-full mx-auto flex justify-between text-white p-5">
        <div></div>
        <p className="text-sm">© {year} Mateus Lopes</p>
      </div>
    </footer>
  )
}

export default Footer
