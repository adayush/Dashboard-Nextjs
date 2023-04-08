export function Schedule() {
  return (
    <div className="bg-white rounded-2xl p-6 px-8">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">Today&apos;s Schedule</h3>
        <p className="text-gray-500 text-sm">See All &gt;</p>
      </div>
      <br />
      <div className="flex flex-col gap-2 text-gray-700">
        <div className="border-l-4 p-2 border-[#9BDD7C]">
          <p className="font-semibold">Meeting with suppliers from Kuta Bali</p>
          <p className="font-light">14.00-15.00</p>
          <p className="font-light">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="border-l-4 p-2 border-[#6972C3]">
          <p className="font-semibold">Check operation at Giga Factory 1</p>
          <p className="font-light">18.00-20.00</p>
          <p className="font-light">at Central Jakarta</p>
        </div>
      </div>
    </div>
  )
}