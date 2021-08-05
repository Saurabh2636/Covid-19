import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
  },
  media: {
    height:370,
  },
});

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://www.aarogyasetu.gov.in/wp-content/uploads/2021/04/mygov-10000000001946816780.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CORONA FREE INDIA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          कोरोना योद्धाओं के हौसलों को, आओ मिलकर और बढ़ाते हैं।
          सहयोग, समर्पण, दृढ़ विश्वास से, कोरोना को हराते हैं।।
          </Typography>
        </CardContent>
    </Card>
  );
}
