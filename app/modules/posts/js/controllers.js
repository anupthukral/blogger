'use strict'

angular.module('spBlogger.posts.controllers',[]).
controller("PostController",function($scope,postService){
	$scope.getAllPosts=function(){
		return postService.getAll();
	};

	$scope.posts=$scope.getAllPosts();
}).
controller("PostDetailsController",function($scope,postService,$stateParams,$state){
	$scope.getPostById=function(id){
		return postService.getPostById(id);
	}

	$scope.closePost=function(){
		$state.go("allPosts");
	}

	$scope.singlePost = $scope.getPostById($stateParams.id)
})
