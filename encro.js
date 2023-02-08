// https://github.com/dlvdls18/Encro

window.Encro = {
  pair([a, b]) {
    return 0.5 * (a + b) * (a + b + 1) + b;
  },
  unpair(n) {
    var w = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
    var t = (w ** 2 + w) / 2;
    var b = n - t;
    var a = w - b;
    return [a, b];
  },
  compress(text) {
    var nums = text.split("").map(function(char) {
      return char.charCodeAt(0) + 1;
    });
    var pairs = [];
    var cur = null;
    nums.forEach(function(num) {
      if(cur == null) cur = num;
      else {
        pairs.push([cur, num]);
        cur = null;
      }
    });
    if(cur != null) pairs.push([cur, 0]);
    return pairs.map(function(pair) {
      return Encro.pair(pair);
    });
  },
  decompress(list) {
    var res = "";
    list.map(function(item) {
      return Encro.unpair(item);
    }).forEach(function(pair) {
      pair.forEach(function(num) {
        if(num == 0) return;
        else res += String.fromCharCode(num - 1);
      });
    });
    return res;
  }
}