function StringChallenge(str: string) {
  const OPEN_TAG_MATCHER = str.match(/<\w+>/g);
  const CLOSE_TAG_MATCHER = str.match(/(<\/\w+>)/g);

  const MATCHING_TAGS: { [index: string]: string } = {
    "<div>": "</div>",
    "<p>": "</p>",
    "<i>": "</i>",
    "<em>": "</em>",
    "<b>": "/b>",
  };

  let maxTag;

  if (OPEN_TAG_MATCHER && CLOSE_TAG_MATCHER) {
    maxTag = Math.max(OPEN_TAG_MATCHER.length, CLOSE_TAG_MATCHER.length);
  } else {
    return false;
  }

  for (let i = 0; i < maxTag; i++) {
    if (
      MATCHING_TAGS[OPEN_TAG_MATCHER[i]] !==
        CLOSE_TAG_MATCHER[CLOSE_TAG_MATCHER.length - 1] &&
      MATCHING_TAGS[OPEN_TAG_MATCHER[i]] !== CLOSE_TAG_MATCHER[i]
    ) {
      str = OPEN_TAG_MATCHER[i].replace(/<|>/g, "");

      return str;
    }

    CLOSE_TAG_MATCHER.splice(
      CLOSE_TAG_MATCHER.indexOf(MATCHING_TAGS[OPEN_TAG_MATCHER[i]]),
      1
    );
  }

  return true;
}
