import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4"> 
            <h2 className="text-2xl text-center bg-red-100 p-2 rounded-full">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;
