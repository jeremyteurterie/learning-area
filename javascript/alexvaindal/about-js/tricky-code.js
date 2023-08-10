function duplicateManuscript(manuscript) {
  if (manuscript.hasPendingChanges) {
    throw new error("you need to save the file before you can duplicate it.");
  }

  let copy = {
    created: Date.now(),
    author: manuscript.author,
    cells: manuscript.cells,
    metadata: manuscript.metadata,
  };
  copy.metadata.title = "Copy of" + manuscript.metadata.title;
  return copy;
}

const manuscript = {
  author: "Axel",
  cells: [0, 1, 2, 3],
  metadata: {
    title: "Ceci est un manuscipt",
  },
};
