import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// Import Components
import PostList from '../Post/components/PostList';
import AccountPage from "../Account/pages/AccountPage/AccountPage";
// Import Actions
import { addPostRequest, deletePostRequest, fetchPosts } from '../Post/PostActions';
import Logo from '../logo.svg';
import PostCreateWidget from "../Post/components/PostCreateWidget";

const MainPage = ({ showAddPost }) => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.data);

    const auth = false;

    useEffect(() => {
        dispatch(fetchPosts());
    },[]);

    const handleDeletePost = post => {
        if (confirm('Do you want to delete this post')) { // eslint-disable-line
            dispatch(deletePostRequest(post));
        }
    };

    const handleAddPost = (post) => {
        dispatch(addPostRequest(post));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center">
                    <img className="mx-3" src={Logo} alt="Logo" style={{ height: '72px'}}/>
                    <h1 className="mt-4">
                        Alaya Blog
                    </h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    {auth ?
                        <PostCreateWidget addPost={handleAddPost} showAddPost={showAddPost}/>
                        :
                        <AccountPage/>
                    }
                </div>
                <div className="col-6">
                    <PostList handleDeletePost={handleDeletePost} posts={posts} />
                </div>
            </div>
        </div>
    );
};

MainPage.propTypes = {
    showAddPost: PropTypes.bool.isRequired
};


export default MainPage;
