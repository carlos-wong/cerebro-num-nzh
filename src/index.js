var nzhcn = require("nzh/cn");

export const fn = ({ term, display }) => {
  if (term.match('^nzh ')){
    var num = nzhcn.encodeB(term.split(" ")[1]);
    display({
      title: `${num}`
    })
  }
}
