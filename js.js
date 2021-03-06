﻿/// <reference path="jquery-2.1.4.intellisense.js" />
$(function () {
  //  var SpecialEvent = new CustomEvent(
  //"SpecialMessage",
  //{
  //    detail:
  //    {
  //        message: "Hello There",
  //        time: new Date()
  //    },
  //    bubbles: true,
  //    cancelable: true
  //});
  //  var binder = document.getElementById("event-binder");

  //  // Assign an event to the object.
  //  binder.addEventListener("SpecialMessage", HandleEvent, false);
  //  var $binder = $(binder);
  //  $binder.on("click", function () {
  //      SpecialEvent.detail.message = "new message";
  //      binder.dispatchEvent(SpecialEvent);
  //  });

  //  $binder.on("SpecialMessage", function (e) {
  //      console.log("Hello World!");
  //      console.log(e);
  //  });

  //  function HandleEvent(event) {
  //      // Display the event information.
  //      document.getElementById("display").innerHTML =
  //       "Control: " + event.currentTarget.id +
  //       "<br />Message: " + event.detail.message +
  //       "<br />Time sent: " +
  //       event.detail.time.toTimeString();
  //      return false;
    //  }

    $("#event-binder").on("custom", {hello: "world"}, function (event, param1, param2) {
        console.log(event);
        console.log(param1 + "\n" + param2);
    });
    $("#event-binder").on("click", function() {
        $("#event-binder").trigger("custom", ["Custom", "Event"]);
    });

    $("#event-binder").on("custom", function (evt) {
        console.log(evt);
    });
});