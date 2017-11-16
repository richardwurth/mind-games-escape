angular.module("myApp").controller("mainController", function($scope){
  $(document).ready(function(){
    console.log("Ready Freddy!");
  });

  const mq = window.matchMedia( "(min-width: 500px)" );

  if (mq.matches) {
    $scope.iframeStyle = {
      // "overflow-y" : "hidden"
      "margin-left" : "-10px",
      "margin-right" : "-50px",
      "margin-top " : "-10px",
    };
    setTimeout(function(){
      $('#iframe_id').attr('src', 'https://app.escapetix.com/events/2483?iframe=true');
      $('#iframe_id').css({'width': '100%'});
    }, 2000);
    console.log("Big!");
} else {
  $scope.iframeStyle = {
    // "overflow-y" : "hidden"
    "margin-left" : "0px",
    "margin-right" : "0px",
    "margin-top " : "0px",
    "z-index" : "1"
  };
  console.log("Small!");
}
  // $scope.iframeStyle = {
  //   // "overflow-y" : "hidden"
  //   "margin-left" : "-10px",
  //   "margin-right" : "-50px",
  //   "margin-top " : "-10px",
  // };
  let showingHome = true;
  $scope.successTest = () => {
    $('.home').removeClass('animate-enter');
    $('.home').addClass('animate-leave');
    $('body').css({'background-color':'#400f0f'});
    // $('.room-scheduling-1').toggleClass('animate-room-scheduling-1');
    setTimeout(function(){
      $('#room-scheduling-1').css({'opacity':'1'});
      $('#main-background').css({'display':'block'});
      $('#room-scheduling-1').css({'display':'block'});
      $('#floating-text').css({'display':'flex'});
      $('#main-background').css({'opacity':'1'});
    $('#home').css({'display':'none'});
},400);
};

  $scope.previous = () => {
    $('#home').css({'display':'block'});
    $('#room-scheduling-1').css({'opacity':'0'});
    $('body').css({'background-color':'rgb(17, 17, 17)'});
    setTimeout(function(){
      $('.home').removeClass('animate-leave');
      $('.home').addClass('animate-enter');
      $('#main-background').css({'display':'none'});
      $('#room-scheduling-1').css({'display':'none'});
      $('#floating-text').css({'display':'none'});
      $('#iframe_id').css({'opacity':'0'});
      $('#iframe_id').css({'height':'0px'});
},400);
  };

  let showingDefault = true;
  $scope.testClick = function(){
    if (showingDefault === true && mq.matches === true) {
      $('#floating-text').css({'display':'none'});
      $('#main-background').css({'opacity':'0'});
      setTimeout(function(){
        $('#main-background').css({'display':'none'});
        $('body').css({'background-color':'black'});
        $('#iframe_id').css({'opacity':'1'});
        $('#iframe_id').css({'height':'70vh'});
        $('#schedule-button').text("Go Back");
      },500);
      showingDefault = false;
    } else if (showingDefault === false && mq.matches === true) {
      $('#iframe_id').css({'opacity':'0'});
      setTimeout(function(){
        $('#iframe_id').css({'height':'0px'});
        $('#floating-text').css({'display':'flex'});
        $('#main-background').css({'display':'block'});
        $('#main-background').css({'opacity':'1'});
        $('body').css({'background-color':'#400f0f'});
        $('#schedule-button').text("Purchase Tickets");
    },500);
      showingDefault = true;
    } else {
      window.location = "https://app.escapetix.com/events/2483";
    }
  };

  // $scope.successTest = function(){
  //   console.log("Successfully clicked the button!");
  // };

  $scope.showInfo = () => {
    $('.room-scheduling-1').removeClass('animate-enter');
    $('.room-scheduling-1').addClass('animate-leave');
    $('body').css({'background-color':'black'});
    $('#insert-room-1').css({'display':'block'});
    // $('.room-scheduling-1').toggleClass('animate-room-scheduling-1');
    setTimeout(function(){
      // $('.room-1').removeClass('animate-leave');
      // $('.room-1').addClass('animate-enter');
      $('#insert-room-1').css({'height':'70vh','opacity':'1'});
      $('#room-scheduling-1').css({'opacity':'0'});
      $('#main-background').css({'display':'none'});
      $('#room-scheduling-1').css({'display':'none'});
      $('#floating-text').css({'display':'none'});
      $('#main-background').css({'opacity':'0'});
      $('.button-row').addClass('button-row-about');
},400);

// $('#home').css({'display':'block'});
// $('#room-scheduling-1').css({'opacity':'0'});
// $('body').css({'background-color':'rgb(17, 17, 17)'});
// setTimeout(function(){
//   $('.home').removeClass('animate-leave');
//   $('.home').addClass('animate-enter');
//   $('#main-background').css({'display':'none'});
//   $('#room-scheduling-1').css({'display':'none'});
//   $('#floating-text').css({'display':'none'});
// },400);
//
//
//
//     $('#floating-text').css({'display':'none'});
//     $('#main-background').css({'opacity':'0'});
//     setTimeout(function(){
//       $('#main-background').css({'display':'none'});
      // $('#insert-room-1').css({'height':'70vh','opacity':'1','display':'block'});
//       // $('#insert-room-1').css({'height':'70vh'});
//       // $('#insert-room-1').css({'opacity':'1'});
//       $('body').css({'background-color':'black'});
//     },500);
  };
});
