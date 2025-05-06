import React from "react";
const Search = (props) => {
    return (
        <div className="search">
            <div>
                <img src="search.png" alt="search logo" />

                <input type="text" placeholder="Search thousands of movies here..."
                    value={props.searchTerm} onChange={e => props.setSearchTerm(e.target.value)} />

            </div>

        </div>
    )

}
export default Search;