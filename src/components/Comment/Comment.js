import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import myavatar from '../../images/myavatar.png'
const useStyles = makeStyles({
    root: {
        
      width:"30%",
      height:"550px",
      float:"left",
      margin:"10px"
      
    },
    media: {
      height: 140,
    },
  });

const Comment = (props) => {
    
const{name,email,body} = props.comments;
const classes = useStyles();
    return (
        <div>
      
       <Card className={classes.root} >
       <h2>Comments </h2>
      <CardActionArea>
      
        <CardContent>
      
        <Avatar alt="Remy Sharp" src={myavatar} />
          <Typography gutterBottom variant="h5" component="h2">
           <h5> Name :{name}</h5> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3>Title :{name}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
    <h3> Email : {email}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
    <p> Body : {body}</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           
        </div>
    );
};

export default Comment;