const APIUtil = {
  
  followUser: id => {
    $.ajax({
      method: "DELETE",
      url: "/users/:user_id/follow",
      dataType: "json",
    })
    
  },

  unfollowUser: id => {
    $.ajax({
      method: "POST",
      url: "/users/:user_id/follow",
      dataType: "json",
    })
    
  }
};


module.exports = APIUtil;