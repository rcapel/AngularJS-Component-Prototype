module psMovies {
	interface IMovieController {
		// fields
		message: string;

		// methods
		$onInit(): void;
	}

	interface IMovie {
		id: number;
		title: string;
		rating: number;
		length: number;
	}

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
			controller: ["$http",
				class MovieController implements IMovieController {

					// fields
					message: string = "Hello from MovieController in component";
					movies: IMovie[] = [];

					// constructors
					constructor(private $http) {
					}

					// methods

					$onInit(): void {
						this.fetchMovies()
							.then(data => {
								this.movies = data;
							});
					}

					setRating(movie: IMovie, rating: number): void {
						// check range validity
						movie.rating = rating;
					}

					upRating(movie: IMovie): void {
						movie.rating += movie.rating < 5 ? 1 : 0;
					}

					downRating(movie: IMovie): void {
						movie.rating -= movie.rating > 1 ? 1 : 0;
					}

					movieInfo() {
						alert(this.movies.length);
					}

					private fetchMovies(): Promise<IMovie[]> {
						return this.$http.get("/movies.json")
							.then(data => {
								return data.data;
							});
					}

				}]
		});
}