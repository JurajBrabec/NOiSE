import facebook from './assets/facebook.ico';
import soundCloud from './assets/soundcloud.ico';
import youtube from './assets/youtube.ico';
import reverbNation from './assets/reverbnation.ico';
import spotify from './assets/spotify.ico';
import deezer from './assets/deezer.ico';
import hearThis from './assets/hearthis.ico';
import mixCloud from './assets/mixcloud.ico';
import liberaPay from './assets/liberapay.ico';
import stripe from './assets/stripe.ico';

export default [
  {
    id: 'Facebook',
    icon: facebook,
    name: 'noised.perception',
    url: 'https://facebook.com/noised.perception',
  },
  {
    id: 'Youtube',
    icon: youtube,
    name: 'AnotherNOiSE',
    url: 'https://youtube.com/AnotherNOiSE',
    albumPrefix: 'https://www.youtube.com/watch?v=',
    albums: [
      {
        url: 'hndYAtR0-Zc&list=PLTlLoM0Uvk3dNFtApzj4FEr0rK7hqo0P6',
      },
      {
        url: '1vGy69dg9hs&list=PLTlLoM0Uvk3dyhnd8PZmdwzMfNJdEEnt1',
      },
      {
        url: '0vXoPSzv7cA&list=PLTlLoM0Uvk3d-TOt88kKFibiyuVqJumsE',
      },
    ],
    videoPrefix: 'https://www.youtube.com/watch?v=',
    videos: [
      { url: '-VcbA25dkXo' },
      { url: 'lV7gzZYk4SM' },
      { url: '-eNZWtxiYt4' },
      { url: '7YWno0JvUic' },
      { url: 'KAYtVXsjCBg' },
      { url: '0vXoPSzv7cA' },
      { url: 'b_4rDY-DG9k' },
      { url: 'V-h2sb68sUU' },
    ],
  },
  {
    id: 'SoundCloud',
    icon: soundCloud,
    name: 'NOiSEE',
    url: 'https://soundcloud.com/noisee',
    albumPrefix: 'https://soundcloud.com/noisee/sets/',
    albums: [
      { url: 'visions-and-perceptions-cd-1' },
      { url: 'sonum-aeternam' },
      { url: 'mmxxii' },
    ],
  },
  {
    id: 'Spotify',
    icon: spotify,
    name: 'NOiSE',
    url: 'https://open.spotify.com/artist/4WlxhUgckGYhQhlF6r0p83',
    albumPrefix: 'https://open.spotify.com/album/',
    albums: [
      { url: '5rS63FPRwdvS5lYku7FH8X' },
      { url: '3BQP2hyYvKD4wZZywKLtb4' },
      { url: '5tlFFr9fQKJnHggOF7qZcO' },
    ],
  },
  {
    id: 'Deezer',
    icon: deezer,
    name: 'NOiSE',
    url: 'https://www.deezer.com/artist/162922247',
    albumPrefix: 'https://www.deezer.com/album/',
    albums: [{ url: '289811692' }, { url: '289699162' }, { url: '???' }],
  },
  {
    id: 'HearThis',
    icon: hearThis,
    name: 'NOiSEE',
    url: 'https://hearthis.at/noisee',
    albumPrefix: 'https://hearthis.at/noisee/set/',
    albums: [
      {
        url: 'visions-and-perceptions-cd-1-visions/',
      },
      { url: 'sonum-aeternam/' },
      { url: 'mmxxii/' },
    ],
    mixPrefix: 'https://www.hearthis.at/noisee/',
    mixes: [
      { url: 'noise-the-heater-2000/' },
      { url: 'noise-sundown-2000/' },
      { url: 'noise-e-circuit-2000/' },
      { url: 'noise-dream-dimension-2000/' },
      { url: 'noise-chill-2000/' },
      { url: 'noise-reborn-2001/' },
      { url: 'noise-inner-theatre-2002/' },
      { url: 'noise-keep-your-mind-open-2002/' },
      { url: 'noise-we-know-trance-2002/' },
      { url: 'noise-untitled-2003/' },
      { url: 'noise-psytrance-in-the-mix-2004/' },
      { url: 'noise-the-cure-in-the-mix-2005/' },
      { url: 'noise-depeche-mode-in-the-mix-14-2011/' },
      { url: 'noise-depeche-mode-in-the-mix-24-2011/' },
      { url: 'noise-depeche-mode-in-the-mix-34-2011/' },
      { url: 'noise-depeche-mode-in-the-mix-44-2011/' },
      { url: 'noise-uuuu-2011/' },
      { url: 'depeche-mode-besides-mix/' },
    ],
  },
  {
    id: 'ReverbNation',
    icon: reverbNation,
    name: 'noisedperception',
    url: 'https://reverbnation.com/noisedperception',
    albumPrefix: 'https://www.reverbnation.com/2736024/album/',
    albums: [{ url: '296293' }, { url: '296294' }, { url: '295400' }],
    videoPrefix: 'https://www.reverbnation.com/artist/video/',
    videos: [
      { url: '10164774' },
      { url: '10167191' },
      { url: '13216949' },
      { url: '13275726' },
      { url: '14221105' },
      { url: '16308600' },
      { url: '16842822' },
      { url: '17026634' },
    ],
  },
  {
    id: 'MixCloud',
    icon: mixCloud,
    name: 'NOiSEE',
    url: 'https://mixcloud.com/NOiSEE',
    mixPrefix: 'https://www.mixcloud.com/NOiSEE/',
    mixes: [
      { url: 'noise-the-heater/' },
      { url: 'noise-sundown/' },
      { url: 'noise-e-circuit/' },
      { url: 'noise-dream-dimension/' },
      { url: 'noise-chill/' },
      { url: 'noise-reborn/' },
      { url: 'noise-inner-theatre/' },
      { url: 'noise-untitled-1/' },
      { url: 'noise-we-know-trance/' },
      { url: 'noise-untitled-2/' },
      { url: 'noise-psytrance-in-the-mix/' },
      { url: 'noise-the-cure-in-the-mix/' },
      { url: 'noise-depeche-mode-in-the-mix-14/' },
      { url: 'noise-depeche-mode-in-the-mix-24/' },
      { url: 'noise-depeche-mode-in-the-mix-34/' },
      { url: 'noise-depeche-mode-in-the-mix-44/' },
      { url: 'noise-uuuu/' },
      { url: 'depeche-mode-besides-mix/' },
    ],
  },
  {
    donation: true,
    id: 'LiberaPay',
    icon: liberaPay,
    name: 'NOiSE',
    url: 'https://liberapay.com/NOiSE/donate',
  },
  {
    donation: true,
    id: 'Stripe',
    icon: stripe,
    name: 'NOiSE',
    url: 'https://donate.stripe.com/4gw9BIeFOc8AdVe8ww',
  },
];
