var psMovies;
(function (psMovies) {
    angular.module("psMovies")
        .component("movieRating", {
        templateUrl: "/ps-movies/movieRating/movieRating.component.html",
        bindings: {
            value: "<",
            max: "<",
            setRating: "&"
        },
        transclude: true,
        controllerAs: "vm",
        controller: /** @class */ (function () {
            function MovieRating() {
            }
            // methods
            MovieRating.prototype.$onInit = function () {
                this.entries = new Array(this.max);
            };
            MovieRating.prototype.$onChanges = function () {
                this.entries = new Array(this.max);
            };
            return MovieRating;
        }())
    });
})(psMovies || (psMovies = {}));
//# sourceMappingURL=movieRating.component.js.map