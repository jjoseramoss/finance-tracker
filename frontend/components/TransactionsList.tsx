"use client";



export default function TransactionsList() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border  border-gray-100">
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold">Transactions</h1>

            <ul className="flex flex-col justify-around gap-5">
                <li>
                    {/* Description */}

                    {/* Amount  */}

                    {/* Category */}
                </li>
            </ul>
        </div>
    </div>
  );
}
