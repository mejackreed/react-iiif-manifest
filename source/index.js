import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { IiifManifest } from './IiifManifest';

var list = [];
var container = {
  imageHeight: 100,
  containerHeight: 350,
  totalWidth: 700,
  padding: 5,
};

$.get('https://purl.stanford.edu/tm910qj8897/iiif/manifest.json', function(data) {
  list = chunker(data.sequences[0].canvases);
  console.log(list);
  ReactDOM.render(
    <IiifManifest
      list={list}
      totalWidth={container.totalWidth}
      containerHeight={container.containerHeight}
      imageHeight={container.imageHeight}
      padding={container.padding}
    />,
    document.getElementById('example')
  );
});

// Chunk the manifest into rows, based on width and overall width
function chunker(arr) {
  var R = [[]];
  for (var i = 0, len = arr.length, currentWidth = 0, j = 0; i < len; i += 1) {
    var ratio = aspectRatio(arr[i]);
    var thumbWidth = Math.ceil(ratio * container.imageHeight);
    var page = getPage(i);
    var padding = calculatePadding(page);
    arr[i].aspectRatio = ratio;
    arr[i].thumbWidth = thumbWidth;
    arr[i].page = page;

    // if page is right, calculate for next one too (naively)
    var pageViewWidth = thumbWidth + padding;
    // if (page === 'left') {
    //   pageViewWidth = pageViewWidth * 2;
    // };

    if ((pageViewWidth + currentWidth) > container.totalWidth) {
      j++;
      currentWidth = 0;
      R.push([]);
    }

    currentWidth += (thumbWidth + padding);
    R[j].push(arr[i]);
  }

  return R;
}

function getPage(i) {
  if ((i % 2) !== 0) {
    return 'left';
  } else {
    if (i === 0) {
      return 'first';
    } else {
      return 'right';
    }
  }
};

function calculatePadding(page) {
  switch (page) {
    case 'first':
      return container.padding * 2;
      break;
    default:
      return container.padding;
  }
}

function aspectRatio(obj) {
  return (obj.width / obj.height);
}
