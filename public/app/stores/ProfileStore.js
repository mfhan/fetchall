var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// //var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var profiles = { };
var currentUser = {
    email:'',
    password: '',
    id: null
};

var ProfileStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    // this is how components REGISTER for notifications:
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    // this is how you remove a component from notification registry
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    updateCurrentUser: function(updatedUser){
        currentUser = updatedUser;
    },

    getCurrentUser: function(){
        return currentUser;
    }
});


ProfileStore.dispatchToken = FetchDispatcher.register(function(action) {

    // the action argument dictates what kind of notification to broadcast:
    switch (action.type) {

      case 'CURRENT_USER_UPDATED':
          console.log('PROFILE STORE - CURRENT_USER_UPDATED: '+JSON.stringify(action.updatedUser));
          var updatedUser = action.updatedUser;
          currentUser = updatedUser;
          ProfileStore.emitChange();
          break;

      default: // do nothing
        console.log('WHAT? '+action.type);
    }
});

module.exports = ProfileStore;

//   setPosts: function(c){
//     posts = c;
//   },

//   getAllPosts: function(format){
//   	if (format == null)
//   		return posts;

//   	if (format == 'object')
//   		return posts;

//   	if (format == 'array'){
//         return postsArray;

//     // 		var array = Object.keys(posts).map(function (key) {
//     // 			return posts[key]
//     // 		});

// 		  // return array;
//   	}
//   },

//   addPost: function(post){
//     console.log('ADD POST: '+JSON.stringify(post));
//     posts[post.id] = post;
//     postsArray.unshift(post);
//   },

//   getPostWithSlug: function(slug){
// //    console.log('GET POST WITH SLUG: '+slug);
//     var c = null;
//     var keys = Object.keys(posts);
//     for (var i=0; i<keys.length; i++){
//       var post = posts[keys[i]];
//       if (post == null)
//         continue;

//       if (post.slug == slug){
//         c = post;
//         break;
//       }
//     }

//     return c;

//   }

// });


// PostStore.dispatchToken = FullStackDispatcher.register(function(action) {

  // switch(action.type) {

//     case 'RECEIVED_POSTS':
// //        console.log('RECEIVED_POSTS: '+JSON.stringify(action.rawPosts));
//     		var list = action.rawPosts;
//     		for (var i=0; i<list.length; i++){ // populate courses property with results
//     			var post = list[i];
//     			posts[post.id] = post;
//           postsArray.push(post);
//     		}

//       	PostStore.emitChange();
//       	break;

    // case 'POST_CREATED':
    //     var post = action.rawPost;
    //     posts[post.id] = post;
    //     postsArray.unshift(post);
    //     PostStore.emitChange();
    //     break;

    // default:
    //   // do nothing
//   }

// });

// module.exports = PostStore;