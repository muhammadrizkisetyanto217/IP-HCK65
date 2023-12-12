export function Header() {
  return (
    <>
      <header className="bg-blue-700">
        {/*menentukan lebar  */}
        {/*lebar dibuat 7xl = 80 rem. supaya ketika full tidak mentok */}
        {/* mx-auto supaya margin ditengah */}
        {/* px-4 = padding 1 rem. Supaya jika dikecilin tidak nabrak sampai ujung*/}
        <div className="max-w-7xl mx-auto px-4">
          {/* fungsinya agar content ditengah */}
          {/* h-20 = 5 rem */}
          <div className="flex items-center justify-between h-20">
            <h1 className="text-3xl font-bold text-gray-100">Rizki Book</h1>
            <button
              type="button"
              className="relative rounded-full bg-blue-800 p-2 text-gray-200"
            >
              Button
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
