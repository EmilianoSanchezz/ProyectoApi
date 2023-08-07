import React from "react";

export const Paginacion = ({productsPerPge, totalPoducts, currentPage, setCurrentPage}) => {
    
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(totalPoducts / productsPerPge); i++) {
    pageNumbers.push(i)
        
    }


    return (
        <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Previous</a>
  <a className="pagination-next">Next page</a>
  <ul className="pagination-list">

    {pageNumbers.map(noPage => (

        <li key={noPage}><a className="pagination-link">{noPage}</a></li>
    ))}

    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
    
  </ul>
</nav>
    )
}