Package.describe({
  name: 'supaseca:google-charts',
  summary: 'Easy Google Charts for Meteor',
  version: '0.0.8',
  git: 'https://github.com/projik/meteor-google-charts.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.addFiles('supaseca_google-charts.js');
  api.export(['drawChart'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('supaseca:google-charts');
  api.addFiles('supaseca_google-charts-tests.js');
});
