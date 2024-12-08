TrelloPowerUp.initialize({
  "card-buttons": async function (t, opts) {
    return [
      {
        icon: "https://trello-branch-name.frontitech.xyz/images/icon@2x.png",
        text: "Branch name",
        callback: async function (t) {
          let branchName = await getBranchName(t);
          return t.popup({
            title: "Branch name",
            url: "./popup.html",
            args: { branchName },
            height: 40,
          });
        },
      },
    ];
  },
});

function getBoardAbbreviation(boardName) {
  const match = boardName.match(/\(([^)]+)\)/);
  if (match && match[1]) {
    return match[1];
  }

  const words = boardName.split(/[\s-]+/);
  if (words.length === 1) {
    return `${words[0].charAt(0).toUpperCase()}${words[0]
      .charAt(words[0].length - 1)
      .toUpperCase()}`;
  }
  return words.map((word) => word.charAt(0).toUpperCase()).join("");
}

function getLabelPrefix(labels) {
  const lowercasedLabels = labels.map((label) => label.name.toLowerCase());
  if (lowercasedLabels.some((label) => label.includes("feature"))) {
    return "feature/";
  } else if (lowercasedLabels.some((label) => label.includes("bugfix"))) {
    return "bugfix/";
  } else if (lowercasedLabels.some((label) => label.includes("hotfix"))) {
    return "hotfix/";
  } else if (lowercasedLabels.some((label) => label.includes("release"))) {
    return "release/";
  }
  return "";
}

function formatText(boardAbbreviation, card) {
  const cardShortUrl = card.idShort;
  const cardSlug = card.name.toLowerCase().replace(/ /g, "-");
  const labelPrefix = getLabelPrefix(card.labels);
  return `${labelPrefix}${boardAbbreviation}-${cardShortUrl}-${cardSlug}`;
}

async function getBranchName(t) {
  return Promise.all([
    t.board("name"),
    t.card("name", "idShort", "labels"),
  ]).then(([board, card]) => {
    const boardAbbreviation = getBoardAbbreviation(board.name);
    return formatText(boardAbbreviation, card);
  });
}
