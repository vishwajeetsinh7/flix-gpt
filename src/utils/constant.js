export const logo = 'https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg'

export const UserAvtar = 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
  };

  export const  IMG_CDN_URL =  'https://image.tmdb.org/t/p/w780/'

  export const SUPPORTED_LANGUAGES = [ 
    { 
      identifier: "en", 
      name: 'English'
    },
    { 
      identifier: "hindi", 
      name: 'Hindi'
    },
    { 
      identifier: "spanish", 
      name: 'Spanish'
    },
  ]


