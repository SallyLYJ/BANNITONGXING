$(function(){
  var $solutionLi=$(".solution_main_l li");
  var $solutionAll=$(".solution_all");
  $solutionLi.on('click',function(event) {
      var $this=$(this);
      var _index=$solutionLi.index($this);
      changeSolution(_index);
  });
  //首页跳转显示相应的部分
  //获取url参数函数
  function getQueryString(name){
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
  }
  var pageId=getQueryString("page");
  if(pageId){
      changeSolution(pageId);
  }
  //各个方案切换函数
  function changeSolution(page){
      $solutionLi.removeClass('current');
      $solutionLi.eq(page).addClass('current');
      $solutionAll.hide();
      $solutionAll.eq(page).show();
  }
})