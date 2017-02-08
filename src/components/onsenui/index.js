import React from 'react';

class Trick extends React.Component {
  render () {
    return <div />;
  }
}

let Ons;
if (typeof window !== 'undefined') {
  module.exports = require('react-onsenui');
} else {
  exports.Page = Trick;
  exports.Button = Trick;
  // Ons = {
  //   AlertDialog: Trick,
  //   BackButton: Trick,
  //   BottomToolbar: Trick,
  //   Button: Trick,
  //   Carousel: Trick,
  //   CarouselItem: Trick,
  //   Col: Trick,
  //   Dialog: Trick,
  //   Fab: Trick,
  //   Icon: Trick,
  //   Input: Trick,
  //   LazyList: Trick,
  //   List: Trick,
  //   ListHeader: Trick,
  //   ListItem: Trick,
  //   Navigator: Trick,
  //   Modal: Trick,
  //   Page: Trick,
  //   Popover: Trick,
  //   ProgressBar: Trick,
  //   ProgressCircular: Trick,
  //   PullHook: Trick,
  //   Range: Trick,
  //   Ripple: Trick,
  //   RouterNavigator: Trick,
  //   RouterUtil: Trick,
  //   Row: Trick,
  //   SpeedDial: Trick,
  //   SpeedDialItem: Trick,
  //   Splitter: Trick,
  //   SplitterContent: Trick,
  //   SplitterSide: Trick,
  //   Switch: Trick,
  //   Tab: Trick,
  //   TabActive: Trick,
  //   TabInactive: Trick,
  //   Tabbar: Trick,
  //   Toolbar: Trick,
  //   ToolbarButton: Trick
  // };
}
