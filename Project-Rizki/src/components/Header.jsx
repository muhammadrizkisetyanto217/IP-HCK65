export function Header() {
  return (
    <>
      <header className="bg-green-700">
        {/*menentukan lebar  */}
        {/*lebar dibuat 7xl = 80 rem. supaya ketika full tidak mentok */}
        {/* mx-auto supaya margin ditengah */}
        {/* px-4 = padding 1 rem. Supaya jika dikecilin tidak nabrak sampai ujung*/}
        <div className="max-w-7xl mx-auto px-4">
          {/* fungsinya agar content ditengah */}
          {/* h-20 = 5 rem */}
          {/* flex yang membuat content mengisi semua sisi kiri kanan  */}
          <div className="flex items-center justify-between h-20">
            <h1 className="text-3xl font-bold text-gray-100">Rizki Book </h1>
            <button
              type="button"
              className="relative rounded-full bg-green-500 p-2 text-gray-200 items-end"
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
