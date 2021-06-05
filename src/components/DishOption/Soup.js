import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { SET_SPICINESS_OF_THE_SOUP } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { marks } from '../../utilities/SliderMarks';

const useStyles = makeStyles({
    root: {
      width: '350px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '20px'
    },
  });

export const Soup = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div className={classes.root + ' dishOption w100-lg'}>
            <p className='dishHeader'>Choose Spiciness of the soup</p>
            <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={10}
                marks={marks}
                onChange={(e, value) => dispatch(SET_SPICINESS_OF_THE_SOUP(value))}
            />
        </div>
    )
}