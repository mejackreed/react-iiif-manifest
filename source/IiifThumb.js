import React from 'react';

export class IiifThumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.data.images[0].resource['@id'],
      aspectRatio: this.props.data.width / this.props.data.height,
    };
  }

  _leftPadding() {
    switch (this.props.data.page) {
      case 'right':
        return 0;
        break;
      default:
        return this.props.padding;
    }
  }

  _rightPadding() {
    switch (this.props.data.page) {
      case 'left':
        return 0;
        break;
      default:
        return this.props.padding;
    }
  }

  componentDidMount() {
    this.setState({
      url: this.state.url.replace('full/full', 'full/,' + this.props.imageHeight * 2),
    });
  }

  render() {
    return (
      <div
        style={{
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
          display: 'inline',
          float: 'left',
          marginLeft: this.props.padding,
          marginRight: this.props.padding,
          marginTop: this.props.padding,
          marginBottom: this.props.padding,
          background: 'grey',
          width: this.props.data.thumbWidth,
        }}
      >
        <img
          src={this.state.url}
          style={{
            border: 'black solid 1px',
            height: this.props.imageHeight,
          }}
        ></img>
      </div>
    );
  }
};
