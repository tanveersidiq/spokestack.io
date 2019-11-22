import { MIN_DEFAULT_MEDIA_QUERY, MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { TeamImages, TeamMemberName } from '../types'
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import { Query } from '../utils/graphql'
import React from 'react'
import TeamMember from './TeamMember'
import { css } from '@emotion/core'

type QueryType = Query & TeamImages

export default function Team() {
  const data = useStaticQuery<QueryType>(teamQuery)
  const team = data.site.siteMetadata.team
  return (
    <div css={styles.teamMembers}>
      {Object.keys(team).map((key) => {
        const teamMember = team[key as TeamMemberName]
        const image = data[key as TeamMemberName].childImageSharp.fixed
        return (
          <TeamMember
            key={`team-member-${key}`}
            avatar={<Img alt={teamMember.name} fixed={image} style={styles.memberImage} />}
            name={teamMember.name}
            title={teamMember.title}
            experience={teamMember.experience}
          />
        )
      })}
    </div>
  )
}

const styles = {
  teamMembers: css`
    display: grid;
    grid-template-columns: 100%;
    max-width: 608px;
    margin: 0 auto;

    ${MIN_TABLET_MEDIA_QUERY} {
      grid-gap: 25px;
      grid-template-columns: 185px 185px 185px;
    }
    ${MIN_DEFAULT_MEDIA_QUERY} {
      margin: 0;
    }
  `,
  memberImage: {
    borderRadius: '50%'
  }
}

const teamQuery = graphql`
  query teamQuery {
    site {
      ...TeamMembers
    }
    brent: file(absolutePath: { regex: "/headshots/brent.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    elizabeth: file(absolutePath: { regex: "/headshots/elizabeth.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    josh: file(absolutePath: { regex: "/headshots/josh.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mike: file(absolutePath: { regex: "/headshots/mike.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    neil: file(absolutePath: { regex: "/headshots/neil.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    noel: file(absolutePath: { regex: "/headshots/noel.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    shelby: file(absolutePath: { regex: "/headshots/shelby.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    timmy: file(absolutePath: { regex: "/headshots/timmy.jpg/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tyler: file(absolutePath: { regex: "/headshots/tyler.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    will: file(absolutePath: { regex: "/headshots/will.png/" }) {
      childImageSharp {
        fixed(width: 186, height: 186) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export const teamFragment = graphql`
  fragment TeamMembers on Site {
    siteMetadata {
      team {
        shelby {
          name
          title
          experience
        }
        tyler {
          name
          title
          experience
        }
        neil {
          name
          title
          experience
        }
        will {
          name
          title
          experience
        }
        elizabeth {
          name
          title
          experience
        }
        brent {
          name
          title
          experience
        }
        mike {
          name
          title
          experience
        }
        noel {
          name
          title
          experience
        }
        timmy {
          name
          title
          experience
        }
        josh {
          name
          title
          experience
        }
      }
    }
  }
`