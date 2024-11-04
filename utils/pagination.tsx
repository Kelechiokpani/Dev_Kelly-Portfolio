"use client"
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";




const PaginatedList = ({ items, itemsPerPage, renderItems }:any) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    // Update current items when itemOffset or itemsPerPage changes
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, items, itemsPerPage]);

    // Handle page click
    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(newOffset,"newOffset")
        setItemOffset(newOffset);
    };

    return (
        <div className="w-full m-4 cursor-pointer" style={{paddingRight:"3rem", cursor:"pointer"}}>
        {renderItems(currentItems)}
        <StyledPagination>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FaArrowCircleRight className="cursor-pointer"  style={{fontSize:"3rem"}}/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<FaArrowCircleLeft  className="text-4xl cursor-pointer"/>}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
        </StyledPagination>

        </div>
    )};


// Styled-components for pagination
    const StyledPagination = styled.div`
    .pagination {
        display: flex;
        list-style-type: none;
        padding: 0;
        justify-content: end;
        margin-top: 20px;
        cursor: pointer;
    }

    .page-item {
        margin: 0 5px;
        border-radius: 10%;
        cursor: pointer;
    }

    .page-link {
        //padding: 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
        width: 23px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: white;
    }

    .active .page-link {
        background-color: #524c90;
        color: white;

        border: 1px solid #ddd;
        border-radius: 50%;
        width: 23px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        font-weight: bold
    }

    .disabled .page-link {
        opacity: 0.5;
        pointer-events: none;
    }
`;

    export default PaginatedList;
