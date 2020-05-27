import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchItem from './SearchItem'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'



function TabPanel(props) {
  const theme = useTheme();
  const { children, value, index, products } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  products: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Pizza" {...a11yProps(1)} />
          <Tab label="Pasta" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>  
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
              {
                props.products.map((tile, index) => (
                  <GridListTile key={tile.id}>
                    <SearchItem item={tile} />
                  </GridListTile>
                ))
              }
            </GridList>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>  
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
              {
                props.products.map((tile, index) => (
                  <GridListTile key={tile.id}>
                    <SearchItem item={tile} />
                  </GridListTile>
                ))
              }
            </GridList>
        </TabPanel>        
        <TabPanel value={value} index={2} dir={theme.direction}>  
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
              {
                props.products.map((tile, index) => (
                  <GridListTile key={tile.id}>
                    <SearchItem item={tile} />
                  </GridListTile>
                ))
              }
            </GridList>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
