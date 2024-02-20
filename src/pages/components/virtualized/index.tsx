import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

const list = new Array(100)
  .fill(undefined)
  .map((_, index) => `item${index+1}`);

const Virtualized: React.FC = () => {
  return (
    <div style={{ height: 400 }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={list.length}
            rowHeight={30}
            rowRenderer={({key, index, style}) => {
              return (
                <div key={key} style={style}>
                  {list[index]}
                </div>
              );
            }}
            width={width}
          />
        )}
      </AutoSizer>
    </div>

  )
}

export default Virtualized;
