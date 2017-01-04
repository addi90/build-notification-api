const Tokens = {};

// TODO: Replace this by Firebase storage
export const setTokenForUser = (userId, token) => Tokens[userId] = token;

export const getTokenForUser = userId => Tokens[userId];