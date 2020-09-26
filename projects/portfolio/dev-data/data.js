import { v4 as uuidv4 } from 'uuid'

export const data = () => {
  return {
    status: 'success',
    navbar: [
      {
        id: uuidv4(),
        label: 'Home',
        link: '/',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'About',
        link: '/#About',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'Projects',
        link: '/#Projects',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'Contacts',
        link: '/#Contacts',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'Blog',
        link: '/blog',
        type: 'extra',
      },
    ],
    cta: ['Hello', "I'm", 'Nuno Pereira', 'a Front End Developer'],
    about: [
      [
        { id: uuidv4(), data: 'I am a ', styled: false },
        { id: uuidv4(), data: 'JavaScript ', styled: true },
        { id: uuidv4(), data: 'Developer ', styled: true },
        {
          id: uuidv4(),
          data: 'based in Portugal, focused on coding websites and applications using modern ',
          styled: false,
        },
        { id: uuidv4(), data: 'HTML, ', styled: true },
        { id: uuidv4(), data: 'CSS .', styled: true },
        { id: uuidv4(), data: 'and .', styled: true },
        { id: uuidv4(), data: 'JavaScript.', styled: true },
      ],
      [
        { id: uuidv4(), data: 'Building ', styled: false },
        { id: uuidv4(), data: 'modern, ', styled: true },
        { id: uuidv4(), data: 'easy to use, ', styled: true },
        { id: uuidv4(), data: 'user-friendly ', styled: true },
        { id: uuidv4(), data: 'websites ', styled: true },
        { id: uuidv4(), data: 'and ', styled: true },
        { id: uuidv4(), data: 'applications ', styled: true },
        {
          id: uuidv4(),
          data: 'is truly a passion of mine. I actively seek out new technologies and stay ',
          styled: false,
        },
        { id: uuidv4(), data: 'up-to-date ', styled: true },
        { id: uuidv4(), data: 'on industry trends and advancements.', styled: false },
      ],
      [
        { id: uuidv4(), data: 'Continued education ', styled: false },
        { id: uuidv4(), data: 'allows me to stay ', styled: false },
        { id: uuidv4(), data: 'ahead of  ', styled: true },
        { id: uuidv4(), data: 'the curve ', styled: true },
        { id: uuidv4(), data: 'and deliver ', styled: false },
        { id: uuidv4(), data: 'exceptional ', styled: true },
        { id: uuidv4(), data: 'work ', styled: true },
        { id: uuidv4(), data: 'to each employer I’ve worked for - both full-time and contract.', styled: false },
      ],
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Redux', 'Gatsby JS'],
    projects: [
      {
        id: uuidv4(),
        name: 'Farfetch',
        url: 'www.farfetch.com',
        source: null,
        image: '/cardBG.jpg',
        alt: 'Farfetch',
        description: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sollicitudin nibh. Nulla facilisi. Morbi viverra ligula non velit pellentesque vestibulum.',
          'Praesent efficitur posuere mi, non dapibus felis mollis sed. Nunc leo est, gravida ac dictum eu, pellentesque in eros. Maecenas metus odio, suscipit ac pulvinar in, posuere ac eros. Maecenas ut quam sed nunc consectetur maximus ac ac dolor. Donec ultricies vulputate lobortis. Suspendisse eget iaculis nunc. Sed eget vehicula ex. Quisque scelerisque aliquam neque, placerat consequat lacus finibus quis.',
          'Donec vel sem vitae quam elementum rhoncus. Nunc tempor erat nisi, et consectetur nibh aliquam nec. Sed lobortis lacus eu nibh ornare, ultricies cursus turpis feugiat.',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Node JS', 'Emotion', 'Webpack'],
      },
      {
        id: uuidv4(),
        name: 'Second Project',
        image: '/cardBG.jpg',
        alt: 'Second Project',
        description: 'Second Project Description',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: uuidv4(),
        name: 'Third Project',
        image: '/cardBG.jpg',
        alt: 'Third Project',
        description: 'Third Project Description',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: uuidv4(),
        name: 'Fourth Project',
        image: '/cardBG.jpg',
        alt: 'Fourth Project',
        description: 'Fourth Project Description',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  }
}
