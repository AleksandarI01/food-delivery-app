import React from "react";

export default function OrdersPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">12345678912351</td>
            <td className="py-6 px-1">12.09.2023</td>
            <td className="py-6 px-1">95.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Pizza Margherita (2), Small Pizza Diavola (3)
            </td>
            <td className="py-6 px-1 font-bold text-red-500">
              On the way (approx. 20min)...
            </td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912350</td>
            <td className="py-6 px-1">09.09.2023</td>
            <td className="py-6 px-1">42.50</td>
            <td className="hidden md:block py-6 px-1">
              Small Pizza Al Salmone (3)
            </td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912349</td>
            <td className="py-6 px-1">07.09.2023</td>
            <td className="py-6 px-1">32.00</td>
            <td className="hidden md:block py-6 px-1">Big Pizza Toscana (2)</td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912348</td>
            <td className="py-6 px-1">02.09.2023</td>
            <td className="py-6 px-1">25.80</td>
            <td className="hidden md:block py-6 px-1">
              Medium Pizza Margherita (1), Small Pizza Hawaii (3)
            </td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912347</td>
            <td className="py-6 px-1">27.08.2023</td>
            <td className="py-6 px-1">95.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Margherita (2), Small Pizza Diavola (3)
            </td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912346</td>
            <td className="py-6 px-1">23.08.2023</td>
            <td className="py-6 px-1">30.00</td>
            <td className="hidden md:block py-6 px-1">
              Big Pizza Siciliana (2)
            </td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12345678912345</td>
            <td className="py-6 px-1">12.06.2023</td>
            <td className="py-6 px-1">51.90</td>
            <td className="hidden md:block py-6 px-1">
              Medium Pizza Diavola (4)
            </td>
            <td className="py-6 px-1 font-bold text-green-500">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
