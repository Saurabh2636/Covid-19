import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
  },
});

export default function Card3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hospital
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          “Technology is moving at a much faster clip than our laws can keep up with.”

– Deborah Hersman, former president and CEO of the National Safety Council

“The future of the safety movement is not so much dependent upon the invention of safety devices as on the improvement of methods of educating people to the ideal of caution and safety
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
