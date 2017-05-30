beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

/*
 其中调用了 jasmine 的 addMatchers 函数进行定义，原来这里不叫断言，称为 matcher ，也就是匹配器。
 断言是一个函数，返回一个对象，其中有一个 compare 的函数，这个函数接收两个参数，第一个是实际值，第二个为期望的值。
 具体的断言逻辑自己定义，这里比较歌手演唱的对象是否为我们传递的对象，并且歌手的状态为正在表演中。
 断言函数需要返回一个对象，对象的 pass 属性为一个 boolean 值，表示是否通过。
 */