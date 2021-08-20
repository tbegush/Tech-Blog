//Seeds file to populate the database

const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 15
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 152
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 45,
    post_id: 150
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 45,
    post_id: 158
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 81,
    post_id: 44
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 23,
    post_id: 20
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 29
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 81,
    post_id: 33
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 152
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 20
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 45,
    post_id: 154
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 33
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 15
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 154
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 2
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 90,
    post_id: 2
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 34,
    post_id: 20
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 151
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 153
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe..',
    user_id: 18,
    post_id: 156
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 72,
    post_id: 33
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 150
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 45,
    post_id: 152
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 90,
    post_id: 150
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 23,
    post_id: 155
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 34
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 23,
    post_id: 155
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 156
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 158
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 150
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 81,
    post_id: 44
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 15
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 45,
    post_id: 159
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 34
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 154
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 152
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 151
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 90,
    post_id: 44
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 90,
    post_id: 159
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 18,
    post_id: 159
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 63,
    post_id: 33
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 34,
    post_id: 151
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 62
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 18,
    post_id: 62
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 81,
    post_id: 15
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 54,
    post_id: 159
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 15
  },
  {
    comment_text:
      'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 34,
    post_id: 159
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 15
  },
  {
    comment_text: 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.',
    user_id: 16,
    post_id: 152
  }
];

//this is the function call to actually create the comments
const seedComments = () => Comment.bulkCreate(commentdata);

//and here's where we export it
module.exports = seedComments;
