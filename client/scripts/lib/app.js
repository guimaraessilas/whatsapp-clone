// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
 
// Modules
import RoutesConfig from '../routes';
import CalendarFilter from '../filters/calendar.filter';
import NewChatService from '../services/new-chat.service';
import InputDirective from '../directives/input.directive';
import NewChatCtrl from '../controllers/new-chat.controller';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';


const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment',
  'ionic'
]);

new Loader(App)
    .load(ChatsCtrl)
    .load(ChatCtrl)
    .load(NewChatCtrl)
    .load(InputDirective)
    .load(CalendarFilter)
    .load(NewChatService)
    .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}