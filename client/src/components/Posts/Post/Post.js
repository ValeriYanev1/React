import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button className={classes.dots} style={{ color: 'black' }} size="small" onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{post.title}</Typography>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button className={classes.atr} size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon className={classes.p} fontSize="small" />
                    <p className={classes.p}>&nbsp; Like &nbsp;</p>
                    {post.likeCount}
                </Button>
                <Button className={classes.atr} size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon className={classes.p} fontSize="small" />
                    <p className={classes.p}>Delete</p>
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;