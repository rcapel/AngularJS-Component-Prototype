module psMovies {
	interface IMovie {
		id: number;
		title: string;
		rating: number;
		length: number;
	}

	interface IMovieService {
		// methods
		fetch(): Promise<IMovie[]>;
	}

	angular.module("psMovies")
		.service("movieService", ["$http",
			class MovieService implements IMovieService {
				//*
				// constructors
				//*
				constructor(private $http) { }

				//*
				// public methods
				//*
				fetch(): Promise<IMovie[]> {
					return this.$http.get("/movies.json")
						.then(data => {
							return data.data;
						});
				}

			}
		]);

	interface IMovieController {
		// fields
		movies: IMovie[];

		// methods
		$onInit(): void;
		setRating(movie: IMovie, rating: number): void;
		upRating(movie: IMovie): void;
		downRating(movie: IMovie): void;
	}

	angular.module("psMovies")
		.component("movieList", {
			templateUrl: "/ps-movies/movieList/movieList.component.html",
			controllerAs: "vm",
			controller: ["movieService",
				class MovieController implements IMovieController {
					//*
					// fields
					//*
					movies: IMovie[] = [];

					//*
					// constructors
					//*
					constructor(private movieService: IMovieService) { }

					//*
					// public methods
					//*
					$onInit(): void {
						this.movieService.fetch()
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

				}]
		});
}