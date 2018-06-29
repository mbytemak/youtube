var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(Title, Comments, Description, views, Category) {
        var _this = this;
        this.getViews = function () {
            return _this.Views;
        };
        this.getRelatedVideos = function () {
            return console.log("related videos");
        };
        this.getSubscribers = function () {
            return console.log("subscribers");
        };
        this.Title = Title;
        this.Comments = Comments;
        this.Description = Description;
        this.Views = views;
        this.Category = Category;
    }
    return YoutubeVideo;
}());
var comedyVideo = new YoutubeVideo("dinchak puja", "best comedy video", "best comedy scenes added to rhe video", 2, "comedy");
var videos = comedyVideo.getViews();
alert(videos);
