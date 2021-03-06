app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This is a test'; 
  $scope.promo = 'I cant believe I am actually learning Angular.';
   $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/bookOfTrees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/programOrProgrammed.jpeg' ,
    likes: 0,
    dislikes:0
  },
       { 
    name: 'To Kill a Mockingbird', 
    price: 13, 
    pubdate: new Date('2015', '08', '02'), 
    cover: 'img/toKillAMockingbird.jpeg',
    likes: 0,
    dislikes: 0 
  },
     { 
    name: 'The Alchemist', 
    price: 20, 
    pubdate: new Date('2017', '10', '01'), 
    cover: 'img/theAlchemist.jpg',
    likes: 0,
    dislikes:0
  }
]
 $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
   $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);