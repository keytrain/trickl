export default {
  pad: (num, len) => {
    return (new Array(len + 1).join("0") + num).slice(-len)
  },
}
