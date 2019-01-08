// @flow
export type Interests = Array<string>;

// Reusable Flow Types for all data structures passed through components
// Component Specific Flow Types (i.e Prop Types) should be declared within the component

export type Action = {
  type: string,
};

export type ModalCard = {
  imageUrl: string,
  cardTitle: string,
  cardSubtitle: string,
  cardText: string,
  cardText: string,
  section: string,
};

export type ModalCards = Array<ModalCard>;

export type Contribution = {
  topic: string,
  title: string,
  summary: string,
  comments: string,
  likes: string,
  country: string,
  image: string,
  tags: Array<string>,
}

export type Interest = string;

export type Expertises = Array<string>;
export type InterestsType = Array<Interest>;

export type MicroProfile = {
};

export type SimilarGroup = {
};

// export type Gallery = {
//   cards: Cards,
//   section: string,
// };

export type MinimalLocation = {
  +latitude: number,
  +longitude: number,
};

export type Initiative = string;

export type Image = {
  full: string,
  title: string,
  thumbnail: string,
};

export type Location = MinimalLocation & {
  +country?: string,
  +countryCode?: string,
  +locality?: string,
};

// TODO: Remove
export type ProfileBasic = {
  /** Public Servant, Non Public Servant, etc */
  memberType: string,
  /** The users display name */
  name: string,
  /** The url of a picture of the user */
  image: string,
  /** Job title (I think) */
  title: string,
  /** Where they are in the world (I think) */
  location: string,
  /** The GUID niceName / URL slug for the member requested */
  memberSlug: string,
  /** The GUID niceName / URL slug for the user requesting */
  mySlug: string,
  /** A boolean that sets if the requestor can message the target */
  canMessageMember: boolean,
  alumnum: boolean,
};

export type ProfileSummary = ProfileBasic & {
  expertise: Array<string>,
  contributions: Array<string>,
  /** Sets CSS styling to switch from cards into horizontal bars */
  isHorizontal: boolean
};

export type Biography = {
};

export type Group = {
};

export type MemberApi = {
    /** Uniquely Identifying String based on name */
  slug: string,
  /** E.g Public Servant, Non Public Servant, etc */
  memberType: string,
  /** Nicely formatted name to display */
  name: string,
  /** The Job or Role title for the member  */
  jobTitle: ?string,
  /** Are they an alumni? */
  alumnum: boolean,
  /** Their Expertise */
  expertise: Expertises,
  /** Their Image */
  image: Image,
  location: Location,
  contributions?: Array<Contribution>,
}

// The minimal payload of data about a member used by any component
export type MemberBase = {
  /** Uniquely Identifying String based on name */
  slug: string,
  /** E.g Public Servant, Non Public Servant, etc */
  memberType: string,
  /** Nicely formatted name to display */
  name: string,
  /** The Job or Role title for the member  */
  jobTitle: ?string,
  /** Are they an alumni? */
  alumnum: boolean,
  /** Their Expertise */
  expertise: Expertises,
  /** Their Image */
  image: string,
}

// The minimal payload of data about a member used by any component
export type MemberScrap = {
  /** Uniquely Identifying String based on name */
  slug: string,
  /** E.g Public Servant, Non Public Servant, etc */
  memberType: string,
  /** Nicely formatted name to display */
  name: string,
  /** The Job or Role title for the member  */
  jobTitle: ?string,
  /** Are they an alumni? */
  alumnum: boolean,
  /** Their Expertise */
  expertise: ?Expertises,
  /** Their Image */
  image: Image,
  organization: ?string,
}

/** Data Type for a top 100 list card */
export type ListCardType = {
  cardTitle: string,
  cardSubtitle: string,
  cardText: string,
  section: string,
  imageUrl: string,
};

/** Data Type for a top 100 list card */
export type ListCardsType = Array<ListCardType>

/** Data Type for a top 100 list card */
export type Gallery = Array<ListCardType>;

export type Galleries = Array<Gallery>
export type GalleryOrder = Array<string>;

export type Initiatives = Array<Initiative>;

// The payload of data passed to any ProfileCard
export type MemberCard = MemberBase & {
  country: ?string,
  contributions?: Array<Contribution>,
};

export type MemberCards = Array<MemberCard>;

export type Paginator = {
  per_page: number,
  page: number,
  first: number,
  next: ?number,
  prev: ?number,
};

export type Topic = {
  name: string,
  slug: string,
};

export type MemberLocation = {
  +slug: string,
  +memberType: string,
  +shownOnMap: boolean,
  +location: MinimalLocation,
  +expertise: Expertises,
};

export type MemberLocations = Array<MemberLocation>;

export type Topics = Array<Topic>;

export type Option = {
  label: string,
  value: string,
};

export type Options = Array<Option>;

export type SingleSelectedOption = Option;

export type SingleSelectType = {|
  placeholder: string,
  selectedOption: SingleSelectedOption,
|};

// Possible parameters used for member search
export type SearchParamType = {|
  region?: string,
  expertise?: string,
  sector?: string,
  topic?: string,
  featured?: string,
|};

// GeoJSON style type label
export type GeoJSONTypeLabel = string;

// GeoJSON style geometries
export type GeoJSONGeometryType = {
  type: string,
  coordinates: [number, number],
};

// Custom GeoJSON style parameters
type GeoMemberMapObjectProperties = {
  slug: string,
  cluster?: boolean,
  cluster_id?: number,
  point_count: number,
  point_count_abbreviated: number,
};

// Base type can be used in either pin or cluster
export type GeoMemberMapObject = {
  id: ?number,
  type: GeoJSONTypeLabel,
  geometry: GeoJSONGeometryType,
  properties: GeoMemberMapObjectProperties,
};

// An array of GeoMemberMapTypes used e.g. in clusterEngine.load
export type GeoMemberMapObjects = Array<GeoMemberMapObject>;

// Type for combined Pin or clusters
export type PinOrCluster = GeoMemberMapObject;

// Supercluster types as returned from clusterEngine.getClusters
export type ClustersArrayType = Array<PinOrCluster>;

// Google maps sizing values
export type GoogleMapSizeType = {
  width: number,
  height: number,
};

// Google maps center values
export type GoogleMapCenterType = {
  lat: number,
  lng: number,
};

// Google map style bounds
export type GoogleMapBoundsType = {
  nw: number,
  se: number,
  sw: number,
  ne: number,
};

// Google map style margin bounds
export type GoogleMapMarginBoundsType = GoogleMapBoundsType;

// Google map zoom type
export type GoogleMapZoomType = number;

// Typing for Google map
export type GoogleMapDataType = {
  bounds: GoogleMapBoundsType,
  center: GoogleMapCenterType,
  marginBounds: GoogleMapMarginBoundsType,
  size: GoogleMapSizeType,
  zoom: GoogleMapZoomType,
};

// SuperCluster zoom Level types
type ViewPortType = Array<number>;

// SuperCluster zoom Level types
type ZoomLevelType = number;

// SuperCluster options parameters
type SuperClusterOptionsType = {
  maxZoom: ZoomLevelType,
  minZoom: ZoomLevelType,
  radius: number,
};

// SuperCluster KDBush Payload types
type KDBushType = {
  nodesize: number,
  points: {
    x: number,
    y: number,
    zoom: number | "Infinity",
    index: number,
    parentId: number,
    properties: null,
  }
};

// Expert Map State Options
export type MapViewportType = {
  centerCoordinates: GoogleMapCenterType,
  zoomLevel: GoogleMapZoomType,
};

// Typing for supercluster library components
export type SuperClusterType = {
  options: SuperClusterOptionsType,
  points: MemberLocations,
  trees: Array<KDBushType>,
  load: (GeoMemberMapObjects) => void,
  getClusters: (ViewPortType, ZoomLevelType) => ClustersArrayType,
  getLeaves: (number, number, number) => ClustersArrayType,
  getClusterExpansionZoom: (number) => number,
  map: (ClustersArrayType) => string,
};

export type Member = {
  slug: string,
  memberType: string,
  name: string,
  title: string,
  jobTitle: ?string,
  organization: ?string,
  alumnum: boolean,
  expertise: Expertises,
  sector: string,
  image: Image,
  location: Location,
  biography?: ?string,
  initiatives?: ?Initiatives,
  interests?: ?Interests,
  shownOnMap?: boolean,
  contactStatus: ?string,
  // These are not final as they're not in the API yet
  contributions?: Array<Contribution>,
  similarProfiles?: Array<Member>,
  visibility: string
}
