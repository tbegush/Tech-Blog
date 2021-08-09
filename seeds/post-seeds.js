const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
  post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
  post_text: 'eiusmod tempor incididunt ut labore et dolore magna aliqua',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
  post_text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
  post_text: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
  post_text: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  post_text: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
  post_text: 'proident, sunt in culpa qui officia deserunt mollit anim id est',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
  post_text: 'In fermentum posuere urna nec tincidunt praesent semper feugiat. Enim',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
  post_text: 'eu turpis egestas pretium aenean. Neque vitae tempus quam pellentesque',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
  post_text: 'nec nam aliquam sem et. Maecenas volutpat blandit aliquam etiam erat',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
  post_text: 'velit scelerisque in. Id aliquet risus feugiat in ante metus dictum. Quis',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
  post_text: 'eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Urna',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
  post_text: 'neque viverra justo nec ultrices dui sapien eget mi. Tristique nulla aliquet',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
  post_text: 'enim tortor at auctor urna. Risus sed vulputate odio ut. Volutpat diam ut',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  post_text: 'venenatis tellus in metus vulputate eu scelerisque. Interdum consectetur',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
  post_text: 'libero id faucibus. Diam quis enim lobortis scelerisque fermentum dui.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
  post_text: 'Ultricies mi eget mauris pharetra et. At augue eget arcu dictum varius',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
  post_text: 'duis at. Morbi tristique senectus et netus et malesuada. Ac auctor augue',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
  post_text: 'mauris augue neque. Commodo nulla facilisi nullam vehicula ipsum a',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  post_text: 'arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
