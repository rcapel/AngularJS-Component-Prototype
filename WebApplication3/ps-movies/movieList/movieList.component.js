var psMovies;
(function (psMovies) {
    angular.module("psMovies")
        .service("movieService", ["$http", /** @class */ (function () {
            //*
            // constructors
            //*
            function MovieService($http) {
                this.$http = $http;
            }
            //*
            // public methods
            //*
            MovieService.prototype.fetch = function () {
                return this.$http.get("/movies.json")
                    .then(function (data) {
                    return data.data;
                });
            };
            return MovieService;
        }())]);
    angular.module("psMovies")
        .component("movieList", {
        templateUrl: "/ps-movies/movieList/movieList.component.html",
        controllerAs: "vm",
        controller: ["movieService", /** @class */ (function () {
                //*
                // constructors
                //*
                function MovieController(movieService) {
                    this.movieService = movieService;
                    //*
                    // fields
                    //*
                    this.movies = [];
                }
                //*
                // public methods
                //*
                MovieController.prototype.$onInit = function () {
                    var _this = this;
                    this.movieService.fetch()
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
                return MovieController;
            }())]
    });
})(psMovies || (psMovies = {}));
//# sourceMappingURL=movieList.component.js.map