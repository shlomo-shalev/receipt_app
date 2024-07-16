// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };


module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        "search-and-replace",
        {
          "rules": [
            {
              "search": /__DOM_DRIVER__/,
              "replace": "reactnative"
            }
          ]
        }
      ],
      'nativewind/babel',
    ],
  };
};


// watchman watch-del '/Users/shlomoshalevbenaderet/Desktop/projects' ; watchman watch-project '/Users/shlomoshalevbenaderet/Desktop/projects'

// clear cashe: rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-map-*

// clean cache:
//  watchman watch-del-all
//  watchman shutdown-server
