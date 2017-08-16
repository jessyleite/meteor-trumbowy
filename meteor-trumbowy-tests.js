// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-trumbowy.js.
import { name as packageName } from "meteor/jessyleite:meteor-trumbowy";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-trumbowy - example', function (test) {
  test.equal(packageName, "meteor-trumbowy");
});
