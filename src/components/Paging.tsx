import * as theme from '../styles/theme'

import React from 'react'
import SVGIcon from './SVGIcon'
import { css } from '@emotion/react'

interface Props {
  page: number
  maxPages: number
  onSelect: (page: number) => void
}

export default function Paging({ page, maxPages, onSelect }: Props) {
  const hasPrevious = page > 1
  const hasNext = page < maxPages
  console.log(page, maxPages)
  if (!hasPrevious && !hasNext) {
    return null
  }
  return (
    <div css={[styles.row, styles.paging]}>
      <div css={[styles.row, styles.pages]}>
        {[...Array(maxPages)].map((_, i) => (
          <a
            key={`page-${i}`}
            onClick={() => onSelect(i + 1)}
            css={styles.pageLink}
            style={{ fontWeight: page === i + 1 ? 700 : 400 }}>
            {i + 1}
          </a>
        ))}
      </div>
      {hasPrevious ? (
        <a onClick={() => onSelect(page - 1)} css={styles.pageLink}>
          <SVGIcon
            className="icon"
            icon="#arrow-forward"
            extraCss={css`
              ${styles.arrowForwardIcon}
              transform: rotateY(180deg);
            `}
          />
          Previous
        </a>
      ) : (
        <div />
      )}
      {hasNext && (
        <a onClick={() => onSelect(page + 1)} css={styles.pageLink}>
          Next
          <SVGIcon
            className="icon"
            icon="#arrow-forward"
            extraCss={styles.arrowForwardIcon}
          />
        </a>
      )}
    </div>
  )
}

const styles = {
  row: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  paging: css`
    position: relative;
    justify-content: space-between;
    padding: 10px 15px;
  `,
  pages: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;

    a {
      margin: 0 5px;
    }
  `,
  pageLink: css`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    .icon {
      margin: 0 5px;
      transition: fill 0.1s ${theme.transitionEasing};
      fill: ${theme.link};
    }

    &:hover .icon {
      fill: ${theme.linkHover};
    }
  `,
  arrowForwardIcon: css`
    width: 18px;
    height: 18px;
    fill: ${theme.primary};
  `
}