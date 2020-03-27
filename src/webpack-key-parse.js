export const parse = keyPath => {
  if (keyPath.indexOf("./") === 0) {
    keyPath = keyPath.slice(2);
  }
  const lastDotIndex = keyPath.lastIndexOf(".");
  const lastSlashIndex = keyPath.lastIndexOf("/");
  let ext = "";
  let dir = "";
  let name = "";
  let base = "";
  let entry = "";
  ext = keyPath.slice(lastDotIndex);
  if (lastSlashIndex > -1) {
    dir = keyPath.slice(0, lastSlashIndex);
  }
  name = keyPath.slice(lastSlashIndex + 1, lastDotIndex);
  base = name + ext;
  entry = dir ? dir + "/" + name : name;
  return {
    name,
    ext,
    base,
    dir,
    entry,
    dir_dash: dir.replace(/\//g, "-"),
    entry_dash: entry.replace(/\//g, "-")
  };
};
