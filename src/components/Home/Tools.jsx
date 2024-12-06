import React from 'react'

const Tools = () => {
  return (
    <div className='w-full h-80 bg-toolsBackgroundColor1'>
     <div className="h-screen flex justify-center">
  <div className="content-wrapper flex flex-col items-center gap-3">
    <h1 className="text-5xl w-[38rem] text-center text-blue-950 pt-5">
      Our Tools Work Together so You Work Less.
    </h1>
    <div className="buttons mt-5 flex gap-4">
      <button className="px-5 py-2 text-gray-900 rounded-3xl border-2  border-gray-900 hover:bg-gray-100 hover:border-none">
        Invoicing
      </button>
      <button className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none">
        Payments
      </button>
      <button className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none">
        Accounting
      </button>
      <button className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none">
        Payroll
      </button>
      <button className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none">
        Advisors
      </button>
    </div>
  </div>
</div>

      </div>
    
  )
}

export default Tools