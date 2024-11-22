
import PropTypes from 'prop-types';
import {FaBookmark} from "react-icons/fa";
const Blog = ({blog,  handleAddToBookmark}) => {

  const {title, hashtags, cover_img, author, author_img, posted_date, reading_time,} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover picture of the title ${title}`}></img>
            <div className='flex justify-between items-center mb-3'>
                <div className='flex'>
                    <img className='w-14' src={author_img}></img>
                    <div className='ml-6 mt-2'>
                        <h3 className='text-xl'>{author}</h3>
                       <p className='font-bold mt-2'>{posted_date}</p>
                    </div>
                </div>
                <div>
                 <span>{reading_time} min read</span>
                 <button onClick={() => {handleAddToBookmark(blog)}}
                  className='ml-2 text-xl text-blue-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className='text-blue-500'>
                {
                         hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;
