import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth:400,
  },
  media: {
    height: 320,
  },
});

export default function Card2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image="https://images.indianexpress.com/2020/09/modi-mask-2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Do Guj Duri
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            “What would we do if a plane crashed today and 100 people died? What would we do if it happened again tomorrow? And the next day? We’d ground air traffic. We wouldn’t live with that. It’s been going on every day on our nation’s roadways for the last 40, 50, 60 years.”
             – David Teater, former NSC Transportation Exper
          </Typography>
        </CardContent>
 
     
    </Card>
  );
}
