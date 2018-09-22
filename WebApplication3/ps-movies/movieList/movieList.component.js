var psMovies;
(function (psMovies) {
    //let theController = function () {
    //	let vm = this;
    //	vm.message = "hello from a component controller";
    //	vm.changeMessage = function () {
    //		vm.message = "New Message";
    //	};
    //};
    angular.module("psMovies")
        .component("movieList", {
        templateUrl: "/ps-movies/movieList/movieList.component.html",
        controllerAs: "vm",
        controller: ["$http", /** @class */ (function () {
                // constructors
                function MovieController($http) {
                    this.$http = $http;
                    // fields
                    this.message = "Hello from MovieController in component";
                    this.movies = [];
                }
                // methods
                MovieController.prototype.$onInit = function () {
                    var _this = this;
                    this.fetchMovies()
                        .then(function (data) {
                        _this.movies = data;
                    });
                };
                MovieController.prototype.setRating = function (movie, rating) {
                    // check range validity
                    movie.rating = rating;
                };
                MovieController.prototype.upRating = function (movie) {
                    movie.rating += movie.rating < 5 ? 1 : 0;
                };
                MovieController.prototype.downRating = function (movie) {
                    movie.rating -= movie.rating > 1 ? 1 : 0;
                };
                MovieController.prototype.movieInfo = function () {
                    alert(this.movies.length);
                };
                MovieController.prototype.fetchMovies = function () {
                    return this.$http.get("/movies.json")
                        .then(function (data) {
                        return data.data;
                    });
                };
                return MovieController;
            }())]
    });
})(psMovies || (psMovies = {}));
//# sourceMappingURL=movieList.component.js.map