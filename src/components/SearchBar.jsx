
function SearchBar() {
    return (
        <form>
            <h4>Search</h4>

            <form>
                <input type="text" />
            </form>

            <label>
                <input type="checkbox" name="stock" />
                <label htmlFor="stock-available" >Only show products in stock</label>
            </label>
        </form>
    );
}

export default SearchBar;