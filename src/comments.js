const { knex } = require('./knexConnector')
const { fetchCardsByRetroId } = require('./cards')

async function fetchCommentsByRetroId(retro_id) {
  let cards = await fetchCardsByRetroId(retro_id)

  return knex('comment')
    .join('user_profile', 'comment.user_id', '=', 'user_profile.user_id')
    .whereIn('card_id', cards.map(card => card.card_id))
    .select('comment.*', 'user_profile.user_name')
}

async function fetchCommentsByCardId(card_id) {
  return await knex('comment')
    .join('user_profile', 'comment.user_id', '=', 'user_profile.user_id')
    .where({ card_id })
    .select('comment.*', 'user_profile.user_name')
}

async function insertComment(card_id, comment_text, user_id) {
  return await knex('comment')
    .insert({ card_id, comment_text, user_id })
}

async function deleteComment(comment_id) {
  return await knex('comment')
    .where({ comment_id })
    .delete()
}

async function updateCommentText(comment_id, comment_text) {
  return await knex('comment')
    .where({ comment_id })
    .update({ comment_text }, '*')
    .then(comment => comment[0])
}

module.exports = { fetchCommentsByRetroId, insertComment, deleteComment, updateCommentText, fetchCommentsByCardId }