const FollowToggle = require('./follow_toggle.js');

$(() => {
  let $buttons = $('button.follow-toggle');
  $buttons.each((i, button) => new FollowToggle(button));
})