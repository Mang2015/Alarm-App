/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        main();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

      var main = function() {
        document.getElementById("dialogPrompt").addEventListener("click", dialogPrompt);
      }


      var dialogPrompt = function() {
        var message = "Enter a time? (in minutes)";
        var title = "Time";
        var buttonLabels = ["SUBMIT"];


        navigator.notification.prompt(message, promptCallback, title, buttonLabels);

        function promptCallback(result) {
          var a = moment();
          var b = a.add(result.input1, 'minute');
          alert("You clicked " + result.buttonIndex + " button! \n" +
          "You entered " +  result.input1 + " " + moment().format() + " " + b.format());

          newEvent(b);

        }
      }

      var newEvent = function(input2) {

        
        var startDate = new Date(moment().format());
        var endDate = new Date(input2);
        var success = function(message) { alert("Success: " + JSON.stringify(message)); };
        var error = function(message) { alert("Error: " + message); };
        window.plugins.calendar.createEvent("small event", "no location", "no notes",  startDate, endDate, success, error);

      }
app.initialize();
