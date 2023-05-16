import React from 'react';
import { css } from '@emotion/react';
import { AutoSizer, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

const useStyles = () => {
  return {
    wrapper: css({
      flex: '1 1 auto',
    }),
    row: css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 16px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
    })
  }
}

const list = new Array(100)
  .fill(undefined)
  .map((_, index) => `item${index+1}`);

const Virtualized: React.FC = () => {
  const styles = useStyles();

  return (
    <div style={{ height: 400 }} css={styles.wrapper}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={list.length}
            rowHeight={30}
            rowRenderer={({key, index, style}) => {
              return (
                <div key={key} style={style} css={styles.row}>
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
