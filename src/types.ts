import { FixedObject } from 'gatsby-image'

export type TeamMemberName =
  | 'brent'
  | 'elizabeth'
  | 'josh'
  | 'mike'
  | 'neil'
  | 'noel'
  | 'shelby'
  | 'timmy'
  | 'tyler'
  | 'will'

export interface TeamImages {
  brent: { childImageSharp: { fixed: FixedObject } }
  elizabeth: { childImageSharp: { fixed: FixedObject } }
  josh: { childImageSharp: { fixed: FixedObject } }
  mike: { childImageSharp: { fixed: FixedObject } }
  neil: { childImageSharp: { fixed: FixedObject } }
  noel: { childImageSharp: { fixed: FixedObject } }
  shelby: { childImageSharp: { fixed: FixedObject } }
  timmy: { childImageSharp: { fixed: FixedObject } }
  tyler: { childImageSharp: { fixed: FixedObject } }
  will: { childImageSharp: { fixed: FixedObject } }
}