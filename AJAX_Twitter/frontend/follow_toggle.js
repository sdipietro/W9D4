const APIUtil = require("./api_util.js")

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    // this.handleClick();
    this.$el.on("click", this.handleClick.bind(this))
  }

  render() {
    if (this.followState === "followed"){
      this.$el.text("Follow!");
    } else if (this.followState === "unfollowed"){
      this.$el.text("Unfollow!")
    }
  }

  handleClick() {
    event.preventDefault();
    if (this.followState === "followed"){
      this.followState = "unfollowed";
      this.$el.text("Unfollow!")
      APIUtil.unfollowUser(this.userId).then();
    } else if (this.followState === "unfollowed") {
      this.followState = "followed";
      this.$el.text("Follow!")
      APIUtil.followUser(this.userId);
    }

  }
}

module.exports = FollowToggle;