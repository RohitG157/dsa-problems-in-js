const HAS_CAMERA = 0;
const COVERED = 1;
const NEEDS_COVERAGE = 2;

var minCameraCover = function (root) {
  let cameras = 0;

  function dfs(node) {
    if (!node) {
      return COVERED;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left === NEEDS_COVERAGE || right === NEEDS_COVERAGE) {
      cameras++;
      return HAS_CAMERA;
    }

    if (left === HAS_CAMERA || right === HAS_CAMERA) {
      return COVERED;
    }

    return NEEDS_COVERAGE;
  }

  if (dfs(root) === NEEDS_COVERAGE) {
    cameras++;
  }

  return cameras;
};
