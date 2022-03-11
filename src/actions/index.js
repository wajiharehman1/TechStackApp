export const selectLibrary = libraryId => {
  console.log('Check', libraryId);
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
