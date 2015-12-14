import React from 'react';
import { IiifThumb } from './IiifThumb';

export class IiifManifestRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: this.props.padding,
    };
  }

  render() {
    var _this = this;
    var createThumb = function(canvas) {
      return (
        <IiifThumb
        key={canvas['@id']}
        data={canvas}
        padding={_this.state.padding}
        imageHeight={_this.props.imageHeight}
      />
      );
    };

    return (
      <div
        style={{
          height: (this.props.padding * 2) + this.props.imageHeight,
          width: this.props.totalWidth,
          float: 'left',
        }}
      >{this.props.data.map(createThumb)}</div>
    );
  }
};
