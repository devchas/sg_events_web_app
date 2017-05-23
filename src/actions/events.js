export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function selectCategory(payload) {
  return {
    type: SELECT_CATEGORY,
    payload
  }
}