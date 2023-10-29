import { Typography,Grid,Paper } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { socketContext } from "../SocketContext";
import { useContext } from "react";

const useStyles=makeStyles((theme)=>({
    video : {
        width : "550px",
        [theme.breakpoints.down('xs')] : {
            width : '300px',
        }
    },
    gridContainer : {
        justifyContent :'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')] : {
            flexDirection : 'column',
        },
    },
    paper : {
        padding : '10px',
        margin : '20px',
        border : '2px solid red',
        boxShadow : "0 1px 10px #f50057",
    },
}));

const VideoPlayer = () => {
    const { name, myVideo, userVideo, callAccepted, callEnded, stream, call } = useContext(socketContext);
    const classes=useStyles();
    return (  
        <div className="videoPlayer">
            <Grid container>
                {
                    stream && (
                        <Paper className={classes.paper}>
                            <Grid item xs={12} md={6} >
                                <Typography variant='h6' gutterBottom color="secondary"><b>{name.toUpperCase() || 'Name'}</b></Typography>
                                <video playsInline muted ref={myVideo || null} autoPlay className={classes.video}/>
                            </Grid>
                        </Paper>
                    )
                }
                {
                    callAccepted && !callEnded && (
                        <Paper className={classes.paper}>
                            <Grid item xs={12} md={6} >
                                <Typography variant='h6' gutterBottom color="secondary"><b>{call.name.toUpperCase() || 'Name'}</b></Typography>
                                <video playsInline  ref={userVideo || null} autoPlay className={classes.video}/>
                            </Grid>
                        </Paper>
                    )
                }
            </Grid>
        </div>
    );
}
 
export default VideoPlayer
