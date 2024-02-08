export default function TableGeneralversammlung(props?: any) {

return(
    <div className="max-w-full col-span-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Titel
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-center">
                      Dokument
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. März 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        Einladung Generalversammlung
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                          <a
                            className="pt-2 pb-2 inline-flex font-medium"
                            href="#"
                          >
                            PDF
                          </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. März 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        Protokoll Generalversammlung
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className="pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. März 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        GV {props.label}: Ergebnisse Wahlen und Abstimmungen
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className="pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. März 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        GV {props.label}: Erläuterungen des Verwaltungsrats zur Revision der Statuten
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-center">
                        <a className="pt-2 pb-2 inline-flex font-medium" href="#">
                          PDF
                        </a>
                      </div>
                    </td>
                  </tr>
              </tbody>
      </table>
    </div>
  )
}