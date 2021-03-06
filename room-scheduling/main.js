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
    },500);
      showingDefault = true;
    } else {
      window.location = "https://app.escapetix.com/events/2483";
    }
  };

  $scope.showInfo = () => {
    // $('#room-info').css({'display':'block'});
  };
});
