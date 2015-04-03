Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
	Template.body.helpers({
		messages: function () {
			return Messages.find({});
		}
	});

	Template.body.events({
		"submit .new-message": function (event) {
			var newMessage = event.target.new_message.value;

			Messages.insert({
				message: newMessage,
				createdAt: new Date(),
				sender: 'Undefined',
			});

			event.target.new_message.value = '';

			return false;
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
