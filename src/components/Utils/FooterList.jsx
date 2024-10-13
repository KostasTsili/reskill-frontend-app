/* eslint-disable react/prop-types */

export default function FooterList ({tableHeader}){

    return(
        <>
         <table className="font-medium">
         <thead>
                <tr>
                   <th>{tableHeader}</th>
                </tr>
            </thead>
            <tbody>
               <tr><td>Page</td></tr>
               <tr><td>Page</td></tr>
               <tr><td>Page</td></tr>
            </tbody>
         </table>
        </>
    )
}