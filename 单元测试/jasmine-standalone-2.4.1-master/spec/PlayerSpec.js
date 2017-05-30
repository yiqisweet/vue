describe("Player", function() { //describe 用来分组，可以嵌套   第一个参数 ： 描述，第二个参数：匿名函数是管理测试用例
  var player;
  var song;

  //测试之前需要进行的准备工作; afterEach 会在每一个测试用例执行之后执行。
  beforeEach(function() {
    player = new Player();
    song = new Song();
  });
    // 检测正在歌手进行的歌曲确实是指定的歌曲
  it("should be able to play a Song", function() {  //it是测试用例 第一个参数 ： 描述 第二个参数 ：匿名函数就是测试内容
    player.play(song);
    //测试结果的断言使用 expect 进行，函数内提供测试的值，toXXX 中则是期望的值。下面测试使用 toEqual 进行相等断言判断。
    expect(player.currentlyPlayingSong).toEqual(song);

    //自定义断言
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
