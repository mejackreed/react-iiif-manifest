import React from 'react';
import { VirtualScroll } from 'react-virtualized';
import { IiifManifestRow } from './IiifManifestRow';

export class IiifManifest extends React.Component {
  render() {
    return (
      <VirtualScroll
        width={this.props.totalWidth}
        height={this.props.containerHeight}
        rowsCount={this.props.list.length}
        rowHeight={this.props.imageHeight + (this.props.padding * 2)}
        rowRenderer={
          index => (
            <IiifManifestRow
              key={index}
              data={this.props.list[index]}
              totalWidth={this.props.totalWidth}
              imageHeight={this.props.imageHeight}
              padding={this.props.padding}
            />
          )
        }
      />
    );
  }
};
